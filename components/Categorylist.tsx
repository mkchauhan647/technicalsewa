"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Categorylist = ({
  activeId,
  categories = [],
}: {
  activeId?: string;
  categories: string[];
}) => {
  const { push } = useRouter();
  const handleCatClick = (id: any) => {
    push(`/training/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {categories.map((cat: any, index: number) => (
        <div
          onClick={() =>
            handleCatClick(cat?.text?.replace(" ", "-").toLowerCase())
          }
          key={index}
          className={`cursor-pointer hover:text-primary hover:font-semibold flex  items-center justify-between py-1 border-b-[1px] border-solid border-[#3d4145] ${
            activeId === cat?.value ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className=" text-[base]">{cat?.text}</h3>
          {/* <div className="rounded-full hover:bg-primary bg-gray-400 w-[30px] h-[30px] flex items-center justify-center">
              <h3 className="text-center">{cat.number}</h3>
            </div> */}
        </div>
      ))}
    </div>
  );
};

export default Categorylist;
