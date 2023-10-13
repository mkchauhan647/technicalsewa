"use client";
import Slider from "../slider/Slider";

const PopularBrands = ({ popularBrandsData }: any) => {
  return (
    <div className="flex md:h-[278px] justify-center flex-col items-center">
      <b className="text-[#2591b2] font-bold text-[20px] mb-[12px]  mt-[3px]">
        {popularBrandsData[0].brand_name}
      </b>
      <Slider data={popularBrandsData} />
    </div>
  );
};

export default PopularBrands;
