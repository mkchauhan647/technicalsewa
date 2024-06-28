"use client";

import React from 'react'
import CountUp from "react-countup";

const NumberUI = ({numbers}:any) => {
  return (
    <div className="mt-[20px] md:mt-[50px] bg-primary">
      <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 text-white pt-[20px] md:py-[35px] pb-[20px] md:gap-[30px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[29px] md:text-[37px] leaing-[56px] md:leading-[78px] font-medium cursor-pointer transform hover:scale-105  transition duration-300 ease-out">
            {" "}
            <CountUp
              end={numbers?.complains}
              duration={1}
              enableScrollSpy
              className="md:text-[30px]"
            />
            +
          </div>

          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Complaints
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-[37px]  sm:text-[30px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
            <CountUp end={numbers?.customers} duration={1.1} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Customers
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-[37px]  sm:text-[30px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
            <CountUp end={numbers?.technicians} duration={1} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Technicians
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-[37px]  sm:text-[30px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
            <CountUp end={12} duration={1} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Service Providers
          </h2>
        </div>
      </div>
    </div>
  )
}

export default NumberUI