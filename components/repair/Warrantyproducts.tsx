'use client'
import Slider from '../slider/Slider'

const Warrantyproducts = ({warrantyProductsData}:any) => {
  return (
    <div className='flex justify-center flex-col items-center'>
    <h2 className='text-[#2591b2] font-bold text-[20px] my-4'>Warranty Products</h2>
    <Slider  data={warrantyProductsData} />
</div>
  )
}

export default Warrantyproducts