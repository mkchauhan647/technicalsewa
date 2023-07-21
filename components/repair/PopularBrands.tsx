'use client'
import Slider from '../slider/Slider'

const PopularBrands = ({popularBrandsData}:any) => {
  return (
    <div className='flex md:h-[360px] justify-center flex-col items-center'>
        <b className='text-[#2591b2] font-bold text-[20px]  mb-12 '>Popular Brands</b>
        <Slider data={popularBrandsData} />
    </div>
  )
}

export default PopularBrands