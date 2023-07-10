import React from "react";
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
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";

const page = () => {
  const services = [
    {
      src: <GiWashingMachine />,
      name: "Appliances Repair",
    },
    {
      src: <AiFillStar />,
      name: "Popular Brands",
    },
    {
      src: <AiFillSafetyCertificate />,
      name: "Warranty Products",
    },
    {
      src: <MdPlumbing />,
      name: "Electrician & Plumber",
    },
    {
      src: <MdAir />,
      name: "Air-Purifier/Humidifier",
    },
    {
      src: <BiSolidMobile />,
      name: "Mobile & Tabs",
    },
    {
      src: <GiCctvCamera />,
      name: "CCTV Repair Service",
    },
    {
      src: <RiComputerFill />,
      name: "Computer/Printer",
    },
    {
      src: <FaStethoscope />,
      name: "Medical Equipment",
    },
    {
      src: <GiDeliveryDrone />,
      name: "Drone Repair",
    },
    {
      src: <GiHammerNails />,
      name: "Carenter Service",
    },
    {
      src: <MdPestControl />,
      name: "Cleaning & Pest Control",
    },
  ];

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
        <div className="basis-[30%] md:basis-[22%] rounded-lg md:bg-[#2591b2] md:p-5 flex flex-col gap-4 overflow-y-auto h-[80vh] md:overflow-hidden md:h-auto">
          {services.map((s, index) => (
            <div
              key={index}
              className=" bg-white  md:p-3 rounded-md flex flex-col  justify-center items-center md:items-start gap-2 "
            >
              <div className="md:hidden  text-[#2591b2]">{s.src}</div>
              <h1 className="md:text-[#a6adbb] font-medium text-[12px] md:text-[16px] text-center  md:text-left">
                {s.name}
              </h1>
            </div>
          ))}
        </div>

        {/* right side item div  */}
        <div className="bg-[#f5f5f5] basis-[70%] md:basis-[78%] flex flex-col gap-8 text-center ">
          <div className="md:hidden">
            <h2 className="text-[14px] text-[#2591b2]">Appliances Repair</h2>
          </div>
          <div className="hidden md:block bg-white min-h-[112px] w-[90%] p-5 rounded-md border-[1px] border-gray-400 ">
            <div className="flex justify-center items-center gap-2 text-[#2591b2]">
              <AiFillStar />
              <span>Warranty Products</span>
            </div>
          </div>

          <div className="hidden md:block bg-white min-h-[200px] md:w-[90%] p-5 rounded-md border-[1px]">
            <div className="flex justify-center items-center gap-2 text-[#2591b2]">
              <AiFillStar />
              <span>Popular Brands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
