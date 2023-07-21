'use client'
import React from 'react'
import Slider from '../slider/Slider'

const MedicalEquipment = ({medicalEquipmentData}:any) => {
    return (
        <div className='flex justify-center flex-col items-center bg-[#efefef]'>
            <h2 className='text-[#2591b2] font-bold text-[20px] my-4 border-b-[0.5px] pb-1 border-b-[#4f4b4b]'>Medical Equipment</h2>
            <Slider data={medicalEquipmentData} />
        </div>
      )
}

export default MedicalEquipment