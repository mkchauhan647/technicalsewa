import React from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";

// professionals page
const page = () => {
  const card = [
    {
      src: "user",
      h3: "Smart Care",
    },
    {
      src: "user",
      h3: "City Electronics",
    },
    {
      src: "user",
      h3: "Om Refrigeration",
    },
    {
      src: "user",
      h3: "Siddhartha Electronics",
    },
    {
      src: "user",
      h3: "Radhe Electronics",
    },
    {
      src: "user",
      h3: "Chaudhary Electronics",
    },
  ];

  return (
    <div className="  pt-[20px] pb-[79px] xl:w-[80rem] sm:w-full  m-auto flex flex-col items-center justify-center">
      <div className=" px-2 md:p-0 ">
        {/* header  */}
        <h2 className="text-[32px] md:text-[42px] text-center md:text-left">
          Our Professionals
        </h2>

        <div className="flex justify-between items-center pt-4 px-2 md:px-0">
          {/* page number  */}
          <p className="text-center md:text-left text-[14px]">
            Showing 1-20 of 50
          </p>
          <div className="flex gap-4  items-center">
            <RiLayoutGridFill color="#d9d9d9" size="30px" />
            <TfiLayoutColumn3Alt
              color="#2591b2"
              className="rotate-90"
              size="23px"
            />
          </div>
        </div>

        {/* card  */}
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-5 py-4 md:py-8 px-2 md:px-0">
          {card.map((s, index) => (
            <div
              key={index}
              className="flex items-center border-[1px] rounded-md p-2 md:px-8 md:py-4 gap-2 lg:gap-10 "
            >
              {/* image  */}
              <img src={`../Assets/${s.src}.jpg`} alt="image" />
              <div className="flex flex-col gap-2 md:gap-5">
                <h3 className="text-[#2591b2] text-[18px] lg:text-[24px] font-bold">
                  {s.h3}
                </h3>

                {/* three small button */}
                <div className="flex gap-1 text-[12px] text-[#2591b2]">
                  <button className="bg-[#e8ebf4] px-[9px] py-[2px] rounded-sm">
                    Kent
                  </button>
                  <button className="bg-[#e8ebf4] px-[9px] py-[2px] rounded-sm">
                    Bravos
                  </button>
                  <button className="bg-[#e8ebf4] px-[9px] py-[2px] rounded-sm">
                    Haier
                  </button>
                </div>

                {/* book now and view button */}
                <div className="flex gap-2 text-[16px]">
                  <button className="text-white bg-[#2591b2] rounded-md px-2 py-1 md:px-[17px] md:py-[6px]">
                    Book Now
                  </button>
                  <button className="bg-[#f2dedf] text-black rounded-md px-2 py-1 md:px-[17px] md:py-[6px]">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* download app section  */}
      <div className="bg-[#fbfcfe] py-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="md:text-[32px] text-[18px] text-[#a6adbb] font-semibold text-center md:text-left">
              Download our App
            </h3>
            <p className="text-[14px] md:text-[20px]">
              Enter mobile number to ger APP download Link
            </p>
          </div>

          {/* input and send button  */}
          <div className="flex-1 flex px-2 md:p-0">
            <input
              className="w-full border-[2px]  rounded-l-md p-3 md:p-4 outline-none text-[14px]"
              type="text"
              placeholder="Type your mobile number"
            />
            <button className="bg-[#2591b2] text-white px-6 md:px-10 md:py-4 rounded-r-md">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
