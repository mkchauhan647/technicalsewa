"use client";

import { useEffect, useState } from "react";
import { getSinglePartPurjaData } from "../HelperFuncion/PartpurjaDataFile";

const PartPurjaSlug1 = () => {
  const [singleData, setSingleData] = useState<any>([]);

  useEffect(() => {
    const data = getSinglePartPurjaData();
    console.log(data);
    setSingleData(data);
  }, []);

  return (
    <div className="pt-[20px] pb-[79px] max-w-[1280px] mx-auto  ">
      <div className="sm:w-[60%] w-[80%]  mx-auto border-[2px] border-[#2591b2] rounded-lg flex flex-col gap-2 p-4 md:p-10 text-[14px] text-[#a6adbb] font-bold">
        <img
          className=" self-center w-[600px] h-[200px] md:h-[400px]"
          src={singleData?.data?.filename}
          alt={singleData?.data?.features}
        />
        <div
          className="bg-[#2591b2] self-center text-center w-[80%] sm:w-auto text-white font-normal rounded-xl px-4 py-2"
          dangerouslySetInnerHTML={{ __html: singleData?.data?.blog_name }}
        ></div>
        <h2>{singleData?.data?.features}</h2>
        <hr />
        <h2>Market Price: {singleData?.data?.market_rate}</h2>
        <hr />
        <h3 className="text-[#2591b2]">
          Our Offer: {singleData?.data?.our_rate}
        </h3>
        <hr />

        <h2>Contact: {singleData?.data?.contact_info}</h2>
        <hr />

        <h2>Description</h2>
        <div
          className="text-[#ced2d9]"
          dangerouslySetInnerHTML={{ __html: singleData?.data?.blog_desc }}
        ></div>
        <hr />
      </div>
    </div>
  );
};

export default PartPurjaSlug1;