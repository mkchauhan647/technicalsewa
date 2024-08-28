import { baseUrl } from "@/public/baseUrl";
import axios from "axios";
import React from "react";
import parse from "html-react-parser";

const MidContent2 = async () => {
  const desc = await axios.get(`${baseUrl}techsewa/publicControl/bottomcontent`)

 
  // const paragraphs = desc?.data?.description?.split("</p>");
  const paragraphs = desc?.data?.description.replace(/<li>\s*<p>/g, '<li>')
    .replace(/<\/p>\s*<\/li>/g, '</li>').replace(/<ul>/g,"<ul className='list-disc pl-5 '>");
  console.log("paragraphs", paragraphs,desc.data);
  return (
    <div
      className="bg-primary py-[21px] mt-[10px] mb-[35px] md:mb-[48px]"
      id="tsewa_about_ex"
    >
      <div className="max-w-[1280px]  mx-auto font-normal leading-[21px] text-white px-[2px] md:px-0 footerup">
        {/* {paragraphs?.map((paragraph: any, index: any) => (
          <div key={index} className="p-1 rounded">
            <div
              className="!text-base"
              dangerouslySetInnerHTML={{ __html: `${paragraph}</p>` }}
            />
          </div>
        ))} */}
        {
          paragraphs && parse(paragraphs)
        }
      </div>
    </div>
  );
};

export default MidContent2;
