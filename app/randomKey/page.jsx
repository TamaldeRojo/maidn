'use client'
import Wheel from '/components/spinWheel'
import React from 'react'

function RandomKey() {
  const places = ['MOBILE', 'PC', 'XBOX', 'PSN', 'NINTENDO', 'CARDS', 'MOBILE RECHARGES', 'NOTHING'];
  return (
    <>
    <div className='mt-20'>
      <Wheel items={places} selectedItem={2}/>
    </div>
    </>
  )
}

export default RandomKey