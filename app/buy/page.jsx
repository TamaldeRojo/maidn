'use client'

import React from 'react'
import Image from 'next/image'

import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import {PiHeartStraightFill , PiHeartStraightBreakLight} from "react-icons/pi"


function Sellers() {

    const generateRating = (rating) => {
      switch (rating) {
        case 1:
          return (
            <div className="flex gap-1 text-[20px] text-pink-600">
              {/* <IoHeartSharp/>
              <PiHeartStraightBold/> */}
              <PiHeartStraightFill/>
              <PiHeartStraightBreakLight/>
              <PiHeartStraightBreakLight/>
              <PiHeartStraightBreakLight/>
              <PiHeartStraightBreakLight/>
            </div>
          );
        case 2:
          return (
            <div className="flex gap-1 text-[20px] text-pink-600">
              <PiHeartStraightFill/>
              <PiHeartStraightFill/>
              <PiHeartStraightBreakLight/>
              <PiHeartStraightBreakLight/>
              <PiHeartStraightBreakLight/>
            </div>
          );
        case 3:
          return (
            <div className="flex gap-1 text-[20px] text-pink-600">
              <PiHeartStraightFill/>
              <PiHeartStraightFill/>
              <PiHeartStraightFill/>
              <PiHeartStraightBreakLight/>
              <PiHeartStraightBreakLight/>
            </div>
          );
        case 4:
          return (
            <div className="flex gap-1 text-[20px] text-pink-600">
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightBreakLight/>
            </div>
          );
        case 5:
          return (
            <div className="flex gap-1 text-[20px] text-pink-600">
              <PiHeartStraightFill/>
              <PiHeartStraightFill/>
              <PiHeartStraightFill/>
              <PiHeartStraightFill/>
              <PiHeartStraightFill/>
            </div>
          );

        default:
          return null;
      }
    };

  
    const searchParams = useSearchParams()
    const productId = searchParams.get('productId')
    const img = searchParams.get('img')
    const title = searchParams.get('title')
    const desc = searchParams.get('desc')
    const rating = searchParams.get('rating')
    const price = searchParams.get('price')

  return (
    <>

<div class="ml-24 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
    <Image
        className="h-auto py-5 rounded-xl ml-[10%]  sm:ml-0]"
        src={img}
        width={300}
        height={600}
        alt={title}
    />
    <div className='border border-pink-200 ml-10 w-96 rounded-2xl p-2 flex gap-2'> 
    <PiHeartStraightBreakLight/> 
    <h1>This Game Is Only Available On English</h1> </div>
    </div>

    <div className='border border-pink-600 rounded-2xl h-[100rem] sm:h-[70%] w-[90%] p-5 ml-5 mt-10'>
        <h3 className='mt-10'>{title}</h3>
        <div className='mt-5'>{generateRating(rating)}</div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-2 gap-4'>
          <div><h1>NO US</h1></div>
          <div>{desc}</div>
          <div>DIGITAL CODE INFO</div>
        </div>
    </div>

    <div className='mt-16 ml-10 w-[33%]'>
      <div className='border border-pink-600 p-5 justify-center justify-items-center rounded-2xl'>
      <h1 className='mb-5'> Buy Now!</h1>
      <small className='border border-pink-600 p-2 rounded-full'>{price} SOL</small>
      <button
          className="flex items-center gap-2 px-4 py-2 text-white
           bg-pink-600 rounded-lg duration-150 hover:bg-pink-500
            active:bg-pink-700 mt-5"
      >
         <Link href={`/purchase?product=${productId}&img=${img}&title=${title}&desc=${desc}&rating=${rating}&price=${price}`}> BUY </Link>
      </button>
      </div>
    </div>
</div>

<div className="ml-32 grid grid-cols-1 md:grid-cols-1 gap-4 mt-10">
      <h1 className='font-bold'>Best Sellers</h1>
      <div>
        <div className="flex items-center gap-x-3 w-[24%] border border-pink-600 rounded-lg p-1">
        <Image
            className="h-auto rounded-full"
            src="/maidGoth.png"
            width={70}
            height={70}
            alt="a"
          />
              <div>
                  <span className="block text-gray-700 text-sm font-medium">Nikita Gaming</span>
                  <a href="/" className="block text-indigo-600 hover:text-indigo-500 text-xs">{price} SOL</a>
              </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-x-3 w-[24%] border border-pink-600 rounded-lg p-1">
        <Image
            className="h-auto rounded-full"
            src="/chocola.jpg"
            width={70}
            height={70}
            alt="a"
          />
              <div>
                  <span className="block text-gray-700 text-sm font-medium">FSD Codes</span>
                  <a href="/" className="block text-indigo-600 hover:text-indigo-500 text-xs">{parseFloat(price) + 6.8} SOL</a>
              </div>
        </div>
      </div>
      
</div>

    </>
  )
}

export default Sellers