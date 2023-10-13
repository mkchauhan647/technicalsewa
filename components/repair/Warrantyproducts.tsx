"use client";
import Slider from "../slider/Slider";

const Warrantyproducts = ({ warrantyProductsData }: any) => {
  return (
    <div className="flex md:h-[278px] justify-center flex-col items-center bg-[#efefef]">
      <b className="text-[#2591b2] font-bold text-[20px] mb-[12px] mt-[3px]">
        {warrantyProductsData[0].brand_name}
      </b>
      <Slider data={warrantyProductsData} />
    </div>
  );
};

export default Warrantyproducts;
