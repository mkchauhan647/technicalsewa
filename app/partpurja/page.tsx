import React from "react";

const page = () => {
  const card = [
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
    {
      src: "",
      p: "WM-Water Seal 50-75-10",
      h3: "WM-Water Seal 50-75-10 for Whirlpool front load 9 kg",
      price: "Rs. 1250.00",
    },
  ];

  return (
    <div className=" pt-[20px] pb-[79px] xl:w-[80rem] px-4 sm:w-full  m-auto ">
      {/* text and option div  */}
      <div className="flex justify-between items-center border-b-[1px] pb-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-9">Featured Products</h2>
          <p className="text-[14px] ">
            {/* page number  */}
            Showing 1-20 of 200
          </p>
        </div>

        <select
          name=""
          id=""
          className="shadow-sm outline-none text-[14px] border-[1px] border-gray-200 p-4"
        >
          <option className="p-4" value="">
            Default Sorting
          </option>
          <option value="">Ascending</option>
          <option value="">Descending</option>
          <option value="">Default</option>
        </select>
      </div>

      {/* card  */}

      <div className="flex flex-wrap justify-center gap-14 pt-10">
        {card.map((s, index) => (
          <div
            key={index}
            className=" w-[250px] h-[360px] md:w-[200px] flex flex-col   gap-4 border-[1px] rounded-md p-1 hover:border-[#ed1b26] hover:border-[1px]"
          >
            <img
              className="h-[50%] md:h-[45%] border-[1px] rounded-t-md bg-[#e8ebf4] p-4"
              src=""
              alt="products"
            />
            <div className="flex flex-col gap-4 p-2">
              <h2 className=" bg-[#e8ebf4] text-[#3293b2] rounded-full text-[10px] font-bold text-center py-4">
                {s.p}
              </h2>
              <h1 className="text-[12px] font-bold">{s.h3}</h1>
            </div>
            <div className="flex justify-between px-2">
              <h3 className="text-[#f1eef4] text-[14px]"> {s.price}</h3>
              <h3 className="text-[#ed1b26] text-[10px]"> {s.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
