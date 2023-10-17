"use client";
import { baseUrl } from "@/public/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Fotterupcontent = () => {
  const [desc, setDesc] = useState<any>(null);
  useEffect(() => {
    let fetchData = async () => {
      let data = await axios.get(
        `${baseUrl}/techsewa/publicControl/midcontent`
      );
      setDesc(data.data);
    };
    fetchData();
  }, []);
  const paragraphs = desc?.description?.split("</p>");
  return (
    <div className="bg-[#2591B2] py-[21px] mt-[10px] mb-[35px] md:mb-[48px]" id="tsewa_about_ex">
      <div className="max-w-[1280px]  mx-auto font-normal leading-[21px] text-white px-[2px] md:px-0 footerup">
        {paragraphs?.map((paragraph: any, index: any) => (
          <div key={index} className="p-1 rounded">
            <div className="!text-base" dangerouslySetInnerHTML={{ __html: `${paragraph}</p>` }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fotterupcontent;
