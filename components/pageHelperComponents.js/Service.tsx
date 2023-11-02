"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import ServiceProducts from "../Serviceproduct";

interface ServiceItem {
  name: string;
  id: number;
  icon: string;
}

const Service = ({ services, data = [] }: any) => {
  const [activeviewId, setActiveviewId] = useState<number>(0);

  const servicesList = services.map((i: any) => ({
    name: i?.brand_name,
    id: +i?.brand_id,
    icon: i?.image_url,
  })) as ServiceItem[];

  const activeService = servicesList.find((s) => s.id === activeviewId);
  const activeServiceData = [...data]?.filter(
    (s: any) => +s?.brand_id === activeviewId
  );
  activeServiceData?.sort(
    (a: any, b: any) => +a?.second_ordering - +b?.second_ordering
  );

  const handleTabClick = (id: any) => setActiveviewId(id);

  return (
    <>
      {/* <div className="md:hidden flex items-center border-[1px] bg-[#ffeeda] p-3">
        <input
          className="text-[12px] w-full bg-[#ffeeda]"
          type="text"
          placeholder="Search for a service"
        />
        <AiOutlineSearch />
      </div> */}
      <div className="md:bg-[#f5f5f5] flex justify-between pt-[20px] pb-[79px] xl:w-[80rem] 2xl:w-[80rem] px-4 sm:w-full m-auto ">
        {/* input in mobile responsive  */}
        <div className="relative basis-[20%]">
          <div className="sticky top-[80px]  flex-shrink-0 flex-grow-0 flex flex-col gap-1 overflow-y-auto  md:overflow-hidden max-md:h-auto cursor-pointer ">
            {servicesList?.map((item, index: number) => (
              <ScrollLink
                key={index}
                activeClass="bgd-[#EFEFEF] bg-[#dddddd] border-0 border-r-4 border-[#2591B2]"
                onSetActive={() => setActiveviewId(item.id)}
                className={` text-black  md:p-1  pl-2    ${
                  activeviewId === item.id ? "font-bold" : ""
                }`}
                to={`service_${item.id}`}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleTabClick(item.id)}
                offset={-100}
              >
                <div className="flex flex-col gap-2 justify-center max-md:items-center">
                  <div className="md:hidden text-primary">{}</div>
                  <h3 className="md:text-[black] font-medium text-[12px] md:text-[14px] text-center  md:text-left">
                    {item.name}
                  </h3>
                </div>
              </ScrollLink>
            ))}
          </div>
        </div>

        <div className="basis-[70%] md:basis-[75%]">
          {/* right side item div  */}
          <div className="bg-[#f5f5f5]  mx-[26px] flex flex-col gap-8 text-center ">
            {/* <div className="md:hidden">
            {services[value] && (
              <h2 className="text-[14px] text-primary text-left p-2">
                {services[value].n}
              </h2>
            )}
          </div> */}

            <div className="md:hidden bg-white min-h-[112px] w-full p-0 max-md:py-2 md:p-5 rounded-md border-[1px] border-gray-400 ">
              <div>
                <div className="flex gap-2 justify-center items-center text-primary">
                  {/* Heading Icon  */}
                  {activeService?.icon && (
                    <Image
                      width={25}
                      height={25}
                      src={activeService.icon}
                      alt={activeService.name}
                    />
                  )}
                  <span className="text-primary">{activeService?.name}</span>
                </div>
                {/* Card container started... */}
                <div className="flex flex-wrap gap-6 justify-around items-center p-4 md:justify-center md:gap-16">
                  {activeServiceData?.map((value: any, index: any) => (
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

            {servicesList.map((s, k) => {
              const serviceData = [...data]?.filter(
                (i: any) => +i?.brand_id === s.id
              );
              serviceData?.sort(
                (a: any, b: any) => +a?.second_ordering - +b?.second_ordering
              );
              return (
                <ServiceProducts
                  key={k}
                  id={`service_${s.id}`}
                  icon={
                    s?.icon ? (
                      <Image width={30} height={30} src={s.icon} alt={s.name} />
                    ) : (
                      <></>
                    )
                  }
                  brandname={s.name}
                  data={serviceData || []}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
