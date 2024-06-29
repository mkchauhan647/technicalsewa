import { baseUrl } from "@/public/baseUrl";
import axios from "axios";
import React from "react";

const MidContent = async () => {
  const desc = await axios.get(`${baseUrl}techsewa/publicControl/midcontent`)
 
  const paragraphs = desc?.data?.description?.split("</p>");
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
