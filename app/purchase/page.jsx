'use client'
import React from 'react'
import Image from "next/image"
import { useSearchParams } from 'next/navigation'
import {PiHeartStraightFill } from "react-icons/pi"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
//import { PhantomWallet } from "@thirdweb-dev/wallets";
import {
  Connection,
  SystemProgram,
  Transaction,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  SendTransactionError,
} from '@solana/web3.js'

function Purchase() {
  //const wallet = new PhantomWallet();
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')
  const img = searchParams.get('img')
  const title = searchParams.get('title')
  const desc = searchParams.get('desc')
  const rating = searchParams.get('rating')
  const price = searchParams.get('price')
  const router = useRouter()

  const SOLANA_NETWORK = "testnet"
  
  const [publicKey, setPublicKey] = useState(null);
  const [balance, setBalance] = useState(0)


  useEffect(()=>{
    let key = window.localStorage.getItem("publicKey")
    setPublicKey(key)
    getBalance(key)
  },[])

  const getBalance = async (publicKey) => {
    try {
      const conn = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed"
      )
      const balance = await conn.getBalance(
        new PublicKey(publicKey)
      )
      const balanceNew = balance / LAMPORTS_PER_SOL
      setBalance(balanceNew)
    } catch (error) {
      console.log("Error get balance", error)
    }
  }

  const con = async () => {

    const provider = window?.phantom.solana;
    const { solana } = window;

    

    if(!provider?.isPhantom || !solana.isPhantom){
      console.log("caca")
      setTimeout(()=>{
        window.open("https://phantom.app/","_blank")
      },2000)
      return
    }

    let phantom 
    if (provider?.isPhantom) phantom = provider
    const { publicKey } = await phantom.connect();
    setPublicKey(publicKey.toString())
    console.log(publicKey.toString())
    window.localStorage.setItem("publicKey",publicKey.toString())

  } 

  const handlePurchase = async ()=>{
    
  const price = searchParams.get('price')
    console.log('Purchasing')
    console.log(price)


    try {
      if (balance < price ){
        return
      }
      const provider = window?.phantom?.solana
      const connection = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed"
      )
      const fromPubkey = new PublicKey(publicKey)
      const toPubkey = new PublicKey("6RcTUV1CzGUWLWDnNemyfRFYN11e8gHKc9V6xHYyfb3M") //receiver

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: price * LAMPORTS_PER_SOL
        })
      )
      console.log("Esta es la trans pa",transaction)

        const { blockhash } = await connection.getLatestBlockhash()
        transaction.recentBlockhash = blockhash
        transaction.feePayer = fromPubkey

        //firmar
        const transactionSignature = await provider.signTransaction(
          transaction
        )
        const txid = await connection.sendRawTransaction(
          transactionSignature.serialize()
        )
        console.info(`Transaction ${txid} sent`)

        const confirmation = await connection.confirmTransaction(txid,{
          commitment: "singleGossip",
        })

        const { slot } = confirmation.value
        console.log(" done xd")
        
        router.push(`/code?img=${img}`)

    } catch (error) {
      console.log(error,"xd")
    }
  }

  return (
    <>
    
    <section className="cta-sec relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-black font-semibold md:text-4xl">
                        You are about to buy: <span className="text-[#FFCACA]">{title}</span> for: <h1>{parseFloat(price)} Soles</h1>
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed mt-3">
                       Please Connect your Phantom Wallet
                    </p>
                    
                    {
                    publicKey ? (
                    <>
                      <h2>Your publicKey is: {publicKey}</h2>
                      <button 
                      className="mt-5 px-4 py-2 text-black font-medium bg-pink-600 rounded-full inline-flex items-center"
                      onClick={(price)=>{
                        handlePurchase(price)
                      }}
                      >BUY</button>
                    </>
                    ) :
                    (<>
                    <button
                        onClick={()=>{
                          con()
                        }}
                        className="mt-5 px-4 py-2 text-black font-medium bg-pink-600 rounded-full inline-flex items-center"
                        href="/">
                        Connect Now!
                       <PiHeartStraightFill/>
                    </button>
                    </>)
                  }
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                <Image
                    className="w-[50%] ml-[20%] py-5 rounded-3xl"
                    src={img}
                    width={1000}
                    height={1000}
                    alt={title}
                  />
                  
                </div>
            </div>

        </section>
    
    </>
  )
}

export default Purchase