import React from "react";

const page = () => {
  return (
    <div className="hidden justify-between items-center ">
      <div>
        <h2 className="text-[32px] md:text-[42px] text-center md:text-left">
          Featured Products
        </h2>
        <p className="text-center md:text-left text-[14px] ">
          {/* page number  */}
          Showing 1-20 of 50
        </p>
      </div>

      <select
        name=""
        id=""
        className="shadow-sm outline-none text-[14px] border-[1px] border-gray-200 p-4"
      >
        <option value="">Default Sorting</option>
        <option value="">Ascending</option>
        <option value="">Descending</option>
        <option value="">Default</option>
      </select>
    </div>
  );
};

export default page;
