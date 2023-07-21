"use client";

import React, { useEffect, useState } from "react";
import {
  AiFillStar,
  AiFillSafetyCertificate,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  GiWashingMachine,
  GiCctvCamera,
  GiDeliveryDrone,
  GiHammerNails,
} from "react-icons/gi";
import { BiSolidMobile } from "react-icons/bi";
import { FaStethoscope } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdPestControl, MdAir, MdPlumbing } from "react-icons/md";
import axios from "axios";
import Image from "next/image";
import { baseUrl } from "@/public/baseUrl";
import Link from "next/link";

const Service = ({ data, PopularBrands }: any) => {
  const services = [
    {
      src: <GiWashingMachine />,
      n: "Appliances Repair",
    },
    {
      src: <AiFillStar />,
      n: "Popular Brands",
    },
    {
      src: <AiFillSafetyCertificate />,
      n: "Warranty Products",
    },
    {
      src: <MdPlumbing />,
      n: "Electrician & Plumber",
    },
    {
      src: <MdAir />,
      n: "Air-Purifier/Humidifier",
    },
    {
      src: <BiSolidMobile />,
      n: "Mobile & Tabs",
    },
    {
      src: <GiCctvCamera />,
      n: "CCTV Repair Service",
    },
    {
      src: <RiComputerFill />,
      n: "Computer/Printer",
    },
    {
      src: <FaStethoscope />,
      n: "Medical Equipment",
    },
    {
      src: <GiDeliveryDrone />,
      n: "Drone Repair",
    },
    {
      src: <GiHammerNails />,
      n: "Carenter Service",
    },
    {
      src: <MdPestControl />,
      n: "Cleaning & Pest Control",
    },
  ];

  const [value, setValue] = useState(0);

  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    setFilteredData(
      data?.filter((val: any) => {
        return val.brand_name === "Appliances Repair";
      })
    );
  }, [data]);

  const handleTabClick = (index: any, n: any) => {
    setValue(index);
    setFilteredData(
      data?.filter((val: any) => {
        return val.brand_name === n;
      })
    );
  };

  return (
    <div className="md:bg-[#f5f5f5] pt-[20px] pb-[79px] xl:w-[80rem] px-4 sm:w-full  m-auto ">
      {/* input in mobile responsive  */}
      <div className="md:hidden flex items-center border-[1px] bg-[#ffeeda] p-3">
        <input
          className="text-[12px] w-full bg-[#ffeeda]"
          type="text"
          placeholder="Search for a service"
        />
        <AiOutlineSearch />
      </div>

      <div className="flex gap-2 md:gap-6  py-4 ">
        {/* left side services div  */}
        <div className="basis-[30%] md:basis-[22%] rounded-lg md:bg-[#2591b2] md:p-5 flex flex-col gap-4 overflow-y-auto h-[80vh] md:overflow-hidden md:h-auto cursor-pointer">
          {services.map(({ n, src }, index): any => (
            <div
              onClick={() => handleTabClick(index, n)}
              key={index}
              className={`   md:p-3 rounded-md flex flex-col  justify-center items-center md:items-start gap-2  ${
                index === value ? "md:bg-black md:text-white" : "md:bg-white"
              }`}
            >
              <div className="md:hidden  text-[#2591b2]">{src}</div>
              <h3 className="md:text-[#a6adbb] font-medium text-[12px] md:text-[16px] text-center  md:text-left">
                {n}
              </h3>
            </div>
          ))}
        </div>

        {/* right side item div  */}
        <div className="bg-[#f5f5f5] basis-[70%] md:basis-[80%] flex flex-col gap-8 text-center ">
          {/* <div className="md:hidden">
            {services[value] && (
              <h2 className="text-[14px] text-[#2591b2] text-left p-2">
                {services[value].n}
              </h2>
            )}
          </div> */}
          <div className=" md:block bg-white min-h-[112px] w-full md:w-[90%] p-0 md:p-5 rounded-md border-[1px] border-gray-400 ">
            <div className="flex justify-center items-center gap-2 text-[#2591b2]">
              {/* Heading Icon  */}
              {services[value] && services[value].src}

              {/* Title Name  */}
              {services[value] && (
                <span className="text-[#2591b2]">{services[value].n}</span>
              )}
            </div>

            {/* Card container started... */}
            <div className="flex flex-wrap justify-around md:justify-center items-center  gap-6 md:gap-16 p-4">
              {filteredData?.map((value: any, index: any) => (
                <Link
                  href={`/service/${value?.url_product_name}`}
                  key={index}
                  className={`${
                    value.image_url ? "flex flex-col w-[80px] justify-center" : "hidden"
                  }`}
                >
                  {value.image_url && (
                    <>
                      <Image
                        width={100}
                        height={100}
                        className="h-[60px] w-[80px]"
                        src={value.image_url && value.image_url}
                        alt={value.alt2 && value.alt2}
                      />
                      <p className="text-[10px]  whitespace-pre-wrap  ">{value.product_name}</p>
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block bg-white min-h-[112px] w-[90%] p-5 rounded-md border-[1px] border-gray-400 ">
            <div className="flex justify-center items-center gap-2 text-[#2591b2]">
              {/* Heading Icon  */}
              <AiFillStar />

              {/* Title Name  */}
              <span className="text-[#2591b2]">Popular Brands</span>
            </div>

            {/* Card container started... */}
            <div className="flex flex-wrap justify-center items-center gap-16 p-4">
              {PopularBrands?.map((value: any, index: any) => (
                <div
                  key={index}
                  className={`${
                    value.image_url ? "flex flex-col justify-center" : "hidden"
                  }`}
                >
                  {value.image_url && (
                    <Link href={`/service/${value?.url_product_name}`}>
                      <Image
                        width={100}
                        height={100}
                        className="h-[80px] w-[80px]"
                        src={value.image_url && value.image_url}
                        alt={value.alt2 && value.alt2}
                      />
                      <h3 className="text-[10px]">{value.product_name}</h3>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
