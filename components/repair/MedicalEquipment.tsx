"use client";
import React from "react";
import Slider from "../slider/Slider";

const MedicalEquipment = ({ medicalEquipmentData }: any) => {
  return (
    <div className="flex md:h-[278px] justify-center flex-col items-center bg-[#efefef]">
      <div className="text-[#2591b2] font-bold text-[20px] mb-[12px] mt-[3px]">
        Medical Equipment
      </div>
      <Slider data={medicalEquipmentData} />
    </div>
  );
};

export default MedicalEquipment;
