import Categories from "@/components/repair/Categories";
import React from "react";

const SlugHelper = (props:any) => {
  return (
    <>
      <div className="text-center md:px-8 px-3 mb-8">
        <Categories />
        <h1 className="bg-primary md:font-extrabold font-bold text-white md:text-2xl text-xl md:py-4 py-3 mb-2">
          {props?.location.toUpperCase()}
        </h1>
        <p className="text-left font-normal whitespace-pre-wrap">
          {props?.formatedDescription}
        </p>
      </div>
    </>
  );
};

export default SlugHelper;
