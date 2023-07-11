import React from 'react'
import Slider from '../slider/Slider'

const PopularBrands = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <h2 className='text-[#2591b2] font-bold text-[20px] my-4'>Popular Brands</h2>
        <Slider />
    </div>
  )
}

export default PopularBrands