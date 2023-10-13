"use client";
import { baseUrl } from "@/public/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Fotterupcontent = () => {
  const [desc, setDesc] = useState<any>(null);
  useEffect(() => {
    let fetchData = async () => {
      let data = await axios.get(
        `${baseUrl}/multiservice/publicControl/midcontent`
      );
      setDesc(data.data);
    };
    fetchData();
  }, []);
  const paragraphs = desc?.description?.split("</p>");
  return (
    <div className="bg-[#2591B2] py-[21px] mt-[10px] mb-[35px] md:mb-[48px]">
      <div className="max-w-[1280px] mx-auto font-normal text-[12px] md:text-[14px] leading-[21px] text-white px-[2px] md:px-0">
        {paragraphs?.map((paragraph: any, index: any) => (
          <div key={index} className="p-1  rounded ">
            <div
              className="text-white text-justify text-[14px]"
              dangerouslySetInnerHTML={{ __html: `${paragraph}</p>` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fotterupcontent;
