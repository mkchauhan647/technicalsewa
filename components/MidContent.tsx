"use client";
import { fetchClient } from "@/lib/api";
import React, { useEffect, useState } from "react";

const MidContent = () => {
  const [desc, setDesc] = useState<any>(null);

  useEffect(() => {
    let fetchData = async () => {
      let data = await fetchClient(
        "https://smartcare.com.np/techsewa/publicControl/midcontent"
      );
      setDesc(data);
    };
    fetchData();
  }, []);
  const paragraphs = desc?.description?.split("</p>");
  return (
    <div className="bg-[rgb(37,145,178)] mt-[42px] mx-auto">
      <div className="container xl:w-[80rem] sm:w-full  sm-w-full m-auto grid md:grid-cols-3 grid-cols-1 text-white pt-[35px] pb-[5px] md:gap-[30px] gap-6">
        {paragraphs?.map((paragraph: any, index: any) => (
          <div key={index} className="p-2 rounded">
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

export default MidContent;
