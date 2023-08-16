import React from "react";
const categories = [
  {
    name: "Company News",
    number: "36",
  },
  {
    name: "cPanel",
    number: "2",
  },
  {
    name: "Domains",
    number: "1",
  },
  {
    name: "Hosting",
    number: "130",
  },
  {
    name: "Interviews",
    number: "1",
  },
  {
    name: "Linux",
    number: "2",
  },
  {
    name: "Marketing",
    number: "2",
  },
  {
    name: "Search Engine Optimization",
    number: "2",
  },
  {
    name: "Security",
    number: "32",
  },
  {
    name: "Server Optimization",
    number: "5",
  },
  {
    name: "Software",
    number: "4",
  },
  {
    name: "Uncategorized",
    number: "2",
  },
  {
    name: "Web Development",
    number: "7",
  },
  {
    name: "Windows",
    number: "1",
  },
  {
    name: "WordPress",
    number: "11",
  },
];
const Categorylist = () => {
  return (
    <div>
      <div className="py-12 px-10 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
        <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
        {categories.map((cat: any, index: number) => (
          <div
            key={index}
            className="flex  items-center justify-between py-5 border-b-[1px] border-solid border-[#3d4145]"
          >
            <h3 className=" text-[base]">{cat.name}</h3>
            <div className="rounded-full hover:bg-[#2591B2] bg-gray-400 w-[30px] h-[30px] flex items-center justify-center">
              <h3 className="text-center">{cat.number}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorylist;
