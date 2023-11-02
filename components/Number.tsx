"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp, { useCountUp } from "react-countup";

type Props = {};

const Number = (props: Props) => {
  const [users, setUsers] = useState({
    customers: 100,
    complains: 100,
    technicians: 100,
  });
  useEffect(() => {
    axios
      .get("https://smartcare.com.np/techsewa/publiccontrol/getGetTotalFooter")
      .then((response) => {
        let data = response.data;
        let numberedData = {
          customers: parseInt(data.customers),
          complains: parseInt(data.complains),
          technicians: parseInt(data.technicians),
        };
        setUsers(numberedData);
      });
  }, []);

  return (
    <div className="mt-[20px] md:mt-[50px] bg-primary">
      <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 text-white pt-[20px] md:py-[35px] pb-[20px] md:gap-[30px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[29px] md:text-[37px] leaing-[56px] md:leading-[78px] font-medium cursor-pointer transform hover:scale-105  transition duration-300 ease-out">
            {" "}
            <CountUp
              end={users?.complains}
              duration={3}
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
            <CountUp end={users?.customers} duration={3.1} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Customers
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-[37px]  sm:text-[30px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
            <CountUp end={users?.technicians} duration={3} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Technicians
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" text-[37px]  sm:text-[30px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
            <CountUp end={12} duration={1.1} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Service Providers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Number;
