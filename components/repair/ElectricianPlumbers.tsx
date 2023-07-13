'use client'
import Slider from '../slider/Slider'

const ElectricianPlumbers = ({electiricianPlumbersData}:any) => {
  return (
    <div className='flex justify-center flex-col items-center'>
    <h2 className='text-[#2591b2] font-bold text-[20px] my-4'>Electrician & Plumbers</h2>
    <Slider data={electiricianPlumbersData} />
</div>
  )
}

export default ElectricianPlumbers