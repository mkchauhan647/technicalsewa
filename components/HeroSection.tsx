"use client";

import Image from "next/image";
import React from "react";

import { MdLocationPin } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Search from "./Search";
import { baseUrl } from "@/public/baseUrl";

const HeroSection = async () => {

  const banner = await fetch(`${baseUrl}/techsewa/masterconfig/publicmasterconfig/getConfigList`).then((res)=>res.json());

  return (
    <>
      <div className="hero-section">
        <div className="hidden relative image-banner-container md:flex">
          <Image
            className="w-full h-[240px] object-cover "
            src={banner?.brands[0].image_url}
            // layout="responsive"
            alt="banner"
            width={1000}
            height={240}
          />
          <div className=" absolute top-0 left-[50%] translate-x-[-50%] bg-white/[0.85] h-[240px] w-[720px] ">
            <h1 className="text-primary text-[20px] leading-[60.94px] font-medium text-center pl-[124.5px] mt-5 pr-[125.5px] ">
              Professional Repair Services On Demand
            </h1>
            <p className="text-[#505056] font-medium text-center  ">
              One-stop solution for your services. Order any service, anytime.
            </p>
            <div className="flex justify-around w-full gap-[10px] px-[32px] mt-[18px] ">
              <div className=" flex justify-center items-center gap-[14px] px-2 py-[15px] bg-white rounded-[6px]">
                <MdLocationPin size={25} className="text-primary" />
                <span className="text-[#1A1A1A] text-[16px] font-semibold ">
                  Kathmandu
                </span>
              </div>
              <Search />
            </div>
          </div>
        </div>
        <div className="md:hidden relative image-banner-container">
          <Image
            className="w-full h-[164px] object-cover relative"
            src={banner?.brands[0].image_url}
            // layout="responsive"
            alt="banner"
            width={1000}
            height={164}
          />
          <div className=" absolute top-0 left-[50%] translate-x-[-50%] bg-white/[0.8] w-full ">
            <h1 className="text-primary text-[20px] font-bold text-center px-[5px]">
              Professional Repair Services On Demand
            </h1>
            <p className="text-[#505056] font-normal text-center px-[1px] mt-2 ">
              One-stop solution for your services. Order any service, anytime.
            </p>
            <div className="flex justify-around w-full gap-[10px] px-[12px] mt-[15px] ">
              <div className=" flex justify-center items-center gap-[12px] px-1 py-[15px] bg-white rounded-[6px]">
                <MdLocationPin size={20} className="text-primary" />
                <span className="text-[#1A1A1A] text-[12px] font-semibold ">
                  Kathmandu
                </span>
              </div>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
