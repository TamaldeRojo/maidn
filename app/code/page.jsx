'use client'
import React from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'


function code() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchParams = useSearchParams()
  const img = searchParams.get('img')
  return (
    <>
    
          <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="pb-6">
                    <Image
                    className='mx-auto'
                      src="/FinalLogo.png"
                      width={150}
                      height={150}
                      alt="Picture of the author"
                    />
                    </div>
                    <div className='border border-pink-600 p-2 rounded-3xl'>
                      <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                          HK5F-VM4P-5BCT-L0C6
                      </h3>
                    </div>
                    <p className="text-gray-600 mt-3">
                        This key is fake this is just a test 
                    </p>
                    <Image
                    className='mx-auto rounded-3xl mt-10'
                      src={img}
                      width={150}
                      height={150}
                      alt="Picture of the author"
                    />
                </div>
            </div>

    </>
  )
}

export default code