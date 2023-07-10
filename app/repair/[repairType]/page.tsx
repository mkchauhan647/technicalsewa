import React from "react";
import { BsNewspaper } from "react-icons/bs";

const page = () => {
  return (
    <>
      <div className="container relative  lg:w-[80rem] mx-auto   ">
        <div className="my-[20px] max-md:p-4 flex flex-col gap-4 ">
          <p className="text-[18px] text-[#2591b2] leading-[17.01px] tracking-[0.02em] font-extrabold">
            appliances Repair Service / Microwave Oven
          </p>
          <span className="bg-[#2591b2] text-white font-bold rounded-[25px]  w-max py-[10px] px-[30px] ">
            4.5
          </span>
          <div>undefined</div>

          <div className="w-[30%] lg:px-4  lg:absolute md:top-0 md:right-0  ">
            <div className="bg-[#2591b2] w-[355px] p-4 lg:fixed  ">
              <h2 className="text-white text-[24px] font-medium text-center ">
                Select product Category
              </h2>
              <div className="flex flex-col gap-2 justify-center items-center">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </div>

        </div>

        <div className="flex">
          <div className="w-[70%]  ">
            <div className=" hidden md:flex justify-center items-center gap-[60px] w-full h-[251px] bg-[#2591B2] ">
              <div className="flex flex-col justify-center items-center w-[150px]  ">
                <h2 className="text-white text-[37px] font-bold ">14,116+</h2>
                <span className="text-white">Complaints</span>
              </div>
              <div className="flex flex-col justify-center items-center w-[150px]">
                <h2 className="text-white text-[37px] font-bold ">9,186+</h2>
                <span className="text-white">Customers</span>
              </div>
              <div className="flex flex-col justify-center items-center w-[150px]">
                <h2 className="text-white text-[37px] font-bold ">111+</h2>
                <span className="text-white">Technicians</span>
              </div>
            </div>
            <div className="section-1 hidden md:block shadow-lg px-[100px] py-[50px] ">
              <div className="description mb-4 ">
                <h1 className="text-[#2591b2] text-[23px] leading-[32.89px] font-semibold text-center ">
                  Why Choose Technical Sewa Services
                </h1>
                <p className="text-[#505056] border-b-[2px] border-[#ededed] text-[15px] leading-[24px] pb-2 font-normal mt-[17px] text-center ">
                  Technical Sewa Service Group recognizes the problems that a
                  broken microwave oven can create, as well as the need of
                  getting it back in running condition. That's why, we provide
                  quick, reliable, and long-lasting Microwave oven Repair and
                  Services.
                </p>
              </div>
              <div className="flex flex-col gap-[31px] ">
                <div className="flex items-center gap-2 ">
                  <BsNewspaper className="text-[#2591b2]" size={60} />
                  <div>
                    <h2 className="text-[#2591b2] text-[16px] font-bold leading-[22.88px] ">
                      Validated Professionals
                    </h2>
                    <p className="text-[#505056] text-[15px] font-normal leading-[24px] mt-[6px]">
                      Technical Sewa Service supports online payments using
                      eSewa, Khalti, and other similar services to eliminate the
                      risk of fraud and unnecessary trouble.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 ">
                  <BsNewspaper className="text-[#2591b2]" size={60} />
                  <div>
                    <h2 className="text-[#2591b2] text-[16px] font-bold leading-[22.88px] ">
                      Online Payment
                    </h2>
                    <p className="text-[#505056] text-[15px] font-normal leading-[24px] mt-[6px]">
                      Technical Sewa Service supports online payments using
                      eSewa, Khalti, and other similar services to eliminate the
                      risk of fraud and unnecessary trouble.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 ">
                  <BsNewspaper className="text-[#2591b2]" size={60} />
                  <div>
                    <h2 className="text-[#2591b2] text-[16px] font-bold leading-[22.88px] ">
                      Warranty on Service
                    </h2>
                    <p className="text-[#505056] text-[15px] font-normal leading-[24px] mt-[6px]">
                      Technical Sewa offers a 30-day warranty on spare parts and
                      a 100-day service warranty on washing machine repairs
                      since we take full responsibility for our work.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <BsNewspaper className="text-[#2591b2]" size={60} />
                  <div>
                    <h2 className="text-[#2591b2] text-[16px] font-bold leading-[22.88px] ">
                      Budget-Friendly
                    </h2>
                    <p className="text-[#505056] text-[15px] font-normal leading-[24px] mt-[6px]">
                      The Technician can be booked for the same or less than any
                      other local technician near you. We understand what is
                      important to you and we believe in shaping the right
                      solution based on your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section2 hidden md:flex flex-col gap-[55px] mt-4 ">
              <h2 className="text-[#2591b2] text-[23px]  font-semibold text-center ">
                FAQ On Washing Machine Repair And Services
              </h2>
              <div className="flex flex-col gap-4">
                <div className="bg-[#2591b21a] py-[12px] pl-[16px]">
                  <p className="text-[#505056] text-[16px] font-normal  ">
                    What brands of microwave ovens do you repair
                  </p>
                </div>
                <p className="text-[#505056] text-[16px] leading-[24px] font-normal ">
                  Technical Sewa Technicians can work with any brand of
                  microwave. However, LG, Samsung, Whirlpool, IFB, ELECTROLUX,
                  Skyworth, and Hisense are the popular brands that Technical
                  Sewa normally deals with.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-[#2591b21a] py-[12px] pl-[16px]">
                  <p className="text-[#505056] text-[16px] font-normal  ">
                    Should I trust Technical Sewa Microwave oven Repair and
                    Services technician?
                  </p>
                </div>
                <p className="text-[#505056] text-[16px] leading-[24px] font-normal ">
                  All Microwave Repair and Services on Smart Care are
                  experienced and background checked. Our main concern is our
                  client’s safety. So, You do not have to worry about it.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-[#2591b21a] py-[12px] pl-[16px]">
                  <p className="text-[#505056] text-[16px] font-normal  ">
                    What are the services Smart Care provides in Microwave
                    repair?
                  </p>
                </div>
                <p className="text-[#505056] text-[16px] leading-[24px] font-normal ">
                  Microwave Repair and Services Provided by Smart Care include
                  diagnosis of the fault in the microwave, repair it, and
                  replacing the genuine parts if needed.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-[#2591b21a] py-[12px] pl-[16px]">
                  <p className="text-[#505056] text-[16px] font-normal  ">
                    How much will it cost me to get my microwave Oven repaired?
                  </p>
                </div>
                <p className="text-[#505056] text-[16px] leading-[24px] font-normal ">
                  The cost of the Microwave Repair and Services cannot be fixed
                  before a diagnosis of the fault in the microwave. After
                  analyzing the problem, adding service charge, and spare parts
                  cost if needed to be replaced, we can decide the cost.
                </p>
              </div>
              <div className="flex flex-col gap-4 mb-[31px] ">
                <div className="bg-[#2591b21a] py-[12px] pl-[16px]">
                  <p className="text-[#505056] text-[16px] font-normal  ">
                    Why should I keep my microwave clean?
                  </p>
                </div>
                <p className="text-[#505056] text-[16px] leading-[24px] font-normal ">
                  The remaining food or grease on the bottom of your microwave,
                  as well as moisture from the steam in the air, can combine
                  with filth and oil to produce a bacteria-friendly environment.
                </p>
              </div>
            </div>
          </div>

          {/* =======selecting product  category=======  */}
          {/* <div className="w-[30%] px-4  absolute top-0 right-0  ">
            <div className="bg-[#2591b2] w-[355px] p-4 fixed  ">
              <h2 className="text-white text-[24px] font-medium text-center ">
                Select product Category
              </h2>
              <div className="flex flex-col gap-2 justify-center items-center">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
