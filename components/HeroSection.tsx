"use client";

import Image from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="image-banner-container  relative hidden md:flex  ">
          <Image
            className="w-full h-[240px] object-cover "
            src="/assets/banner.jpg"
            // layout="responsive"
            alt="banner"
            width={1000}
            height={240}
          />
          <div className=" absolute top-0 left-[50%] translate-x-[-50%] bg-white/[0.85] h-[240px] w-[720px] ">
            <div className="text-[#2591B2] text-[20px] leading-[60.94px] font-medium text-center pl-[124.5px] mt-5 pr-[125.5px] ">
              Professional Repair Services On Demand
            </div>
            <p className="text-[#505056] font-medium text-center  ">
              One-stop solution for your services. Order any service, anytime.
            </p>
            <div className="flex justify-around w-full gap-[10px] px-[32px] mt-[18px] ">
              <div className=" flex justify-center items-center gap-[14px] px-[22.43px] py-[15px] bg-white rounded-[6px]">
                <MdLocationPin size={25} className="text-[#2591b2]" />
                <span className="text-[#1A1A1A] text-[16px] font-semibold ">
                  Kathmandu
                </span>
              </div>
              <div className="flex gap-4 ">
                <input
                  className="pl-[10px] border-[1px] border-[#C4C4C4] w-[400px] outline-[#2591b2] rounded-[5px] "
                  placeholder="Search Service here..."
                  type="text"
                />
                <div className="flex justify-center items-center bg-[#2591B2] h-full py-[10px] px-[12px] rounded-[6px] ">
                  <BsSearch size={25} className="text-white cursor-pointer " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex mt-4 md:mt-0 px-[40px] justify-center md:hidden">
          <input
            className="pl-[10px] border-[1px] border-[#C4C4C4] w-full outline-[#2591b2] rounded-[5px] "
            placeholder="Search Service here..."
            type="text"
          />
          <div className="flex justify-center items-center bg-[#2591B2] h-full py-[10px] px-[12px] rounded-[6px] ">
            <BsSearch size={25} className="text-white cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
