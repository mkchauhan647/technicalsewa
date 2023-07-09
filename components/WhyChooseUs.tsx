import Image from "next/image";
import React from "react";
import { MdSanitizer } from "react-icons/md";
import { FaMaskFace } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { GiGloves } from "react-icons/gi";

const WhyChooseUs = () => {
  return (
    <>
      <div className="w-full h-[516.5px] bg-[#FBFBFB] pr-[40px] pl-[40px]  ">
        <div className="w-[1280px] py-[60px] mx-auto xl:w-[80rem] sm:w-full sm-w-full m-auto ">
          <div className="flex  max-md:justify-center items-center gap-[10px]">
            <div className="h-[3px] w-[40px] bg-black/[0.5]"></div>
            <h1 className="text-[#a6adbb]">WHY CHOOSE US</h1>
          </div>
          <h1 className="text-[35px] flex max-md:justify-center text-black/[0.7] mt-[10px] text-left font-bold">
            Because We care about your safety..
          </h1>
          <div className="flex flex-col justify-center items-center  md:flex-row  gap-[40px] mt-[30px]">
            <div className="cards-container  w-full sm:w-[45%] grid max-sm:grid-cols-1 sm:grid grid-cols-2 gap-[30px]">
              <div className="cards w-[50%] mx-auto sm:w-full  hover:scale-[1.1] ease-in-out duration-500 cursor-pointer border-[1px] border-[#cbcbcb] flex justify-center items-center gap-3 h-[120px]  bg-white ">
                <FaMaskFace className="text-[#2591B2]" size={40} />
                <p className="text-[#a6adbb] text-[19px] font-medium inline-block ">
                  Ensuring <br /> Masks
                </p>
              </div>
              <div className="cards w-[50%] mx-auto sm:w-full  hover:scale-[1.1] ease-in-out duration-500 cursor-pointer border-[1px] border-[#cbcbcb] flex justify-center items-center gap-3 h-[120px] bg-white ">
                <IoCall className="text-[#2591B2]" size={40} />
                <p className="text-[#a6adbb] text-[19px] font-medium inline-block ">
                  24/7 <br /> Support
                </p>
              </div>
              <div className="cards w-[50%] mx-auto sm:w-full  hover:scale-[1.1] ease-in-out duration-500 cursor-pointer border-[1px] border-[#cbcbcb] flex justify-center items-center gap-3 h-[120px] bg-white ">
                <MdSanitizer className="text-[#2591B2]" size={40} />
                <p className="text-[#a6adbb] text-[19px] font-medium inline-block ">
                  Sanitising <br /> hands & <br /> Masks
                </p>
              </div>
              <div className="cards w-[50%] mx-auto sm:w-full  hover:scale-[1.1] ease-in-out duration-500 cursor-pointer border-[1px] border-[#cbcbcb] flex justify-center items-center gap-3 h-[120px] bg-white ">
                <GiGloves className="text-[#2591B2]" size={40} />
                <p className="text-[#a6adbb] text-[19px] font-medium inline-block ">
                  Ensuring <br /> Gloves
                </p>
              </div>
            </div>
            <div className="w-[55%]  flex justify-center  object-contain bg-white ">
              <img
                className="object-cover"
                src="/assets/whyus.jpg"
                alt="img-whyChooseUs"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
