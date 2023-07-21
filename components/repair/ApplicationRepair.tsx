'use client'
import React from 'react'
import Slider from '../slider/Slider'

const ApplicationRepair = ({applicationRepairData}:any) => {
  return (
    <div className='flex md:h-[360px] justify-center flex-col items-center bg-[#efefef]'>
        <b className='text-[#2591b2] font-bold text-[20px] mb-12  '>Application Repair</b>
        <Slider data={applicationRepairData} />
    </div>
  )
}

export default ApplicationRepair