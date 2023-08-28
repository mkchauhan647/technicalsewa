"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BlogCategorylist = ({ categories = [] }: { categories: string[] }) => {
  const handleCatClick = (id: any) => {
    window.location.href = `/blogs/category/${id}`;
  };
  return (
    <div>
      {categories.map((cat: any, index: number) => (
        <div
          onClick={() => handleCatClick(cat?.value)}
          key={index}
          className="cursor-pointer hover:text-[#2591B2] hover:font-semibold flex  items-center justify-between py-5 border-b-[1px] border-solid border-[#3d4145]"
        >
          <h3 className=" text-[base]">{cat?.text}</h3>
          {/* <div className="rounded-full hover:bg-[#2591B2] bg-gray-400 w-[30px] h-[30px] flex items-center justify-center">
              <h3 className="text-center">{cat.number}</h3>
            </div> */}
        </div>
      ))}
    </div>
  );
};

export default BlogCategorylist;
