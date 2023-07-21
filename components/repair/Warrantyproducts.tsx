'use client'
import Slider from '../slider/Slider'

const Warrantyproducts = ({warrantyProductsData}:any) => {
  return (
    <div className='flex justify-center flex-col items-center bg-[#efefef]'>
    <b className='text-[#2591b2] font-bold text-[20px] my-4 border-b-[0.5px] pb-1 border-b-[#4f4b4b]'>Warranty Products</b>
    <Slider  data={warrantyProductsData} />
</div>
  )
}

export default Warrantyproducts