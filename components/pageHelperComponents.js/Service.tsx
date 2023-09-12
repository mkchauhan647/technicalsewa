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
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
const Service = ({ data, PopularBrands }: any) => {
  const [activeview, setActiveview] = useState("");

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
  const [filteredAppliances, setFilteredAppliances] = useState<any>([]);
  const [filterwarranty, setFilterwarranty] = useState<any>([]);
  const [filterplumber, setFilterplumber] = useState<any>([]);
  const [filterair, setFilterair] = useState<any>([]);
  const [filtermobile, setFiltermobile] = useState<any>([]);
  const [filtercctv, setFiltercctv] = useState<any>([]);
  const [filtercomputer, setFiltercomputer] = useState<any>([]);
  const [filtermedical, setFiltermedical] = useState<any>([]);

  useEffect(() => {
    setFilteredData(
      data?.filter((val: any) => {
        return val.brand_name === "Appliances Repair";
      })
    );
    setFilteredAppliances(
      data?.filter((val: any) => {
        return val.brand_name === "Appliances Repair";
      })
    );
    setFilterwarranty(
      data?.filter((val: any) => {
        return val.brand_name === "Warranty Products";
      })
    );
    setFilterplumber(
      data?.filter((val: any) => {
        return val.brand_name === "Electrician & Plumber";
      })
    );
    setFilterair(
      data?.filter((val: any) => {
        return val.brand_name === "Air-Purifier/Humidifier";
      })
    );
    setFiltermobile(
      data?.filter((val: any) => {
        return val.brand_name === "Mobile & Tabs";
      })
    );
    setFiltercctv(
      data?.filter((val: any) => {
        return val.brand_name === "CCTV Repair Service";
      })
    );
    setFiltercomputer(
      data?.filter((val: any) => {
        return val.brand_name === "Computer/Printer";
      })
    );
    setFiltermedical(
      data?.filter((val: any) => {
        return (val.brand_name = "Medical Equipment");
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
    <>
      <div className="md:hidden flex items-center border-[1px] bg-[#ffeeda] p-3">
        <input
          className="text-[12px] w-full bg-[#ffeeda]"
          type="text"
          placeholder="Search for a service"
        />
        <AiOutlineSearch />
      </div>
      <div className="md:bg-[#f5f5f5] pt-[20px] pb-[79px] xl:w-[80rem] 2xl:w-[80rem] px-4 sm:w-full m-auto flex">
        {/* input in mobile responsive  */}

        <div className="sticky top-[80px] w-[18%] max-md:w-[20%] flex-shrink-0 flex-grow-0 flex flex-col gap-1 overflow-y-auto  md:overflow-hidden max-md:h-auto cursor-pointer h-screen">
          {services.map(({ n, src }, index): any => (
            <ScrollLink
              key={index}
              activeClass="bgd-[#EFEFEF] bg-[#dddddd] border-0 border-r-4 border-[#2591B2]"
              onSetActive={() => setActiveview(n)}
              className={` text-black  md:p-1  pl-2    ${
                activeview === n ? "font-bold" : ""
              }`}
              to={n}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => handleTabClick(index, n)}
              offset={-100}
            >
              <div className="flex flex-col gap-2 justify-center max-md:items-center">
                <div className="md:hidden  text-[#2591b2]">{src}</div>
                <h3 className="md:text-[black] font-medium text-[12px] md:text-[16px] text-center  md:text-left">
                  {n}
                </h3>
              </div>
            </ScrollLink>
          ))}
        </div>

        <div className="flex gap-2 justify-center py-4 md:gap-6">
          {/* left side services div  */}
          {/* <div className="fixed   rounded-lg md:bg-[#2591b2] md:p-5 flex flex-col gap-4 overflow-y-auto h-[80vh] md:overflow-hidden md:h-auto cursor-pointer">
          {services.map(({ n, src }, index): any => (
            <div
              onClick={() => handleTabClick(index, n)}
              key={index}
              className={`   md:p-3 rounded-md flex flex-col  justify-center items-center md:items-start gap-2  ${
                activeview === n ? "md:bg-black md:text-white" : "md:bg-white"
              }`}
            >
              <div className="md:hidden  text-[#2591b2]">{src}</div>
              <h3 className="md:text-[#a6adbb] font-medium text-[12px] md:text-[16px] text-center  md:text-left">
                {n}
              </h3>
            </div>
          ))}
        </div> */}

          {/* right side item div  */}
          <div className="bg-[#f5f5f5] basis-[70%] md:basis-[95%] ml-[20px] flex flex-col gap-8 text-center ">
            {/* <div className="md:hidden">
            {services[value] && (
              <h2 className="text-[14px] text-[#2591b2] text-left p-2">
                {services[value].n}
              </h2>
            )}
          </div> */}

            <div className="md:hidden bg-white min-h-[112px] w-full p-0 md:p-5 rounded-md border-[1px] border-gray-400 ">
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  {services[value] && services[value].src}

                  {/* Title Name  */}
                  {services[value] && (
                    <span className="text-[#2591b2]">{services[value].n}</span>
                  )}
                </div>
                {/* Card container started... */}
                <div className="flex flex-wrap gap-6 justify-around items-center p-4 md:justify-center md:gap-16">
                  {filteredData?.map((value: any, index: any) => (
                    <Link
                      href={`/service/${value?.url_product_name}`}
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col w-[80px] justify-center"
                          : "hidden"
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
                          <p className="text-[10px]  whitespace-pre-wrap  ">
                            {value.product_name}
                          </p>
                        </>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <ScrollElement
              name="Appliances Repair"
              className="hidden md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <GiWashingMachine />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">Appliances Repair</span>
                </div>
                {/* Card container started... */}
                <div className="flex flex-wrap gap-6 justify-around items-center p-4 md:justify-center md:gap-16">
                  {filteredAppliances?.map((value: any, index: any) => (
                    <Link
                      href={`/service/${value?.url_product_name}`}
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col w-[80px] justify-center"
                          : "hidden"
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
                          <p className="text-[10px]  whitespace-pre-wrap  ">
                            {value.product_name}
                          </p>
                        </>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollElement>

            <ScrollElement
              name="Popular Brands"
              className="hidden md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <AiFillStar />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">Popular Brands</span>
                </div>

                {/* Card container started... */}
                <div className="flex flex-wrap gap-16 justify-center items-center p-4">
                  {PopularBrands?.map((value: any, index: any) => (
                    <div
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col justify-center"
                          : "hidden"
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
            </ScrollElement>

            <ScrollElement
              name="Warranty Products"
              className="hidden  md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <AiFillStar />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">Warranty Products</span>
                </div>

                {/* Card container started... */}
                <div className="flex flex-wrap gap-16 justify-center items-center p-4">
                  {filterwarranty?.map((value: any, index: any) => (
                    <div
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col justify-center"
                          : "hidden"
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
            </ScrollElement>

            <ScrollElement
              name="Electrician & Plumber"
              className="hidden  md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <AiFillStar />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">Electrician & Plumber</span>
                </div>

                {/* Card container started... */}
                <div className="flex flex-wrap gap-16 justify-center items-center p-4">
                  {filterplumber?.map((value: any, index: any) => (
                    <div
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col justify-center"
                          : "hidden"
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
            </ScrollElement>

            <ScrollElement
              name="Air-Purifier/Humidifier"
              className="hidden  md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <AiFillStar />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">
                    Air-Purifier/Humidifier
                  </span>
                </div>

                {/* Card container started... */}
                <div className="flex flex-wrap gap-16 justify-center items-center p-4">
                  {filterair?.map((value: any, index: any) => (
                    <div
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col justify-center"
                          : "hidden"
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
            </ScrollElement>

            <ScrollElement
              name="Mobile & Tabs"
              className="hidden  md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <AiFillStar />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">Mobile & Tabs</span>
                </div>

                {/* Card container started... */}
                <div className="flex flex-wrap gap-16 justify-center items-center p-4">
                  {filtermobile?.map((value: any, index: any) => (
                    <div
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col justify-center"
                          : "hidden"
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
            </ScrollElement>

            <ScrollElement
              name="CCTV Repair Service"
              className="hidden  md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <AiFillStar />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">CCTV Repair Service</span>
                </div>

                {/* Card container started... */}
                <div className="flex flex-wrap gap-16 justify-center items-center p-4">
                  {filtercctv?.map((value: any, index: any) => (
                    <div
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col justify-center"
                          : "hidden"
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
            </ScrollElement>

            <ScrollElement
              name="Computer/Printer"
              className="hidden  md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <AiFillStar />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">Computer/Printer</span>
                </div>

                {/* Card container started... */}
                <div className="flex flex-wrap gap-16 justify-center items-center p-4">
                  {filtercomputer?.map((value: any, index: any) => (
                    <div
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col justify-center"
                          : "hidden"
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
            </ScrollElement>

            <ScrollElement
              name="Medical Equipment"
              className="hidden  md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
            >
              <div>
                <div className="flex justify-center items-center gap-2 text-[#2591b2]">
                  {/* Heading Icon  */}
                  <AiFillStar />

                  {/* Title Name  */}
                  <span className="text-[#2591b2]">Medical Equipment</span>
                </div>

                {/* Card container started... */}
                <div className="flex flex-wrap gap-16 justify-center items-center p-4">
                  {filtermedical?.map((value: any, index: any) => (
                    <div
                      key={index}
                      className={`${
                        value.image_url
                          ? "flex flex-col justify-center"
                          : "hidden"
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
            </ScrollElement>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
