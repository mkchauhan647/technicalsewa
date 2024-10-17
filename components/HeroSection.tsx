import React from "react";

import Search from "./Search";
import HeroCarousel from "./HeroCarousel";

const HeroSection = async ({ data,allBrands }: any) => {
  const banners = data?.brands?.filter(
    (item: any) => item.image_type === "banner"
  );

  return (
    <>
      <div className="hero-section">
        <div className="hidden relative image-banner-container md:flex">
          <div className="w-full h-[250px] relative">
            <HeroCarousel banners={banners} />
          </div>
          {/* <div className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white/[0.85] h-[220px] w-[700px] ">
            <h1 className="text-primary text-[20px] leading-[60.94px] font-medium text-center pl-[124.5px] mt-5 pr-[125.5px] ">
              Professional Repair Services On Demand
            </h1>
            <p className="text-[#505056] font-medium text-center  ">
              One-stop solution for your services. Order any service, anytime.
            </p>
            <div className="flex justify-center w-full px-[32px] mt-[18px] "> */}
          {/* <div className=" flex justify-center items-center gap-[14px] px-2 py-[15px] bg-white rounded-[6px]">
                <MdLocationPin size={25} className="text-primary" />
                <span className="text-[#1A1A1A] text-[16px] font-semibold ">
                  Kathmandu
                </span>
              </div> */}
          {/* <Search />
            </div>
          </div> */}
        </div>
        <div className="md:hidden relative image-banner-container">
          <div className="relative w-full h-[170px]">
            <HeroCarousel banners={banners} />
          </div>
          <div className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white/[0.85] py-4 w-full ">
            <h1 className="text-primary text-[15px] font-bold text-center px-[5px]">
              Professional Repair Services On Demand
            </h1>
            <p className="text-[#505056] text-sm text-center px-[1px] mt-1 ">
              One-stop solution for your services. Order any service, anytime.
            </p>
            <div className="flex justify-center w-full gap-[10px] px-[12px] mt-[12px] ">
              {/* <div className=" flex justify-center items-center gap-[12px] px-1 py-[15px] bg-white rounded-[6px]">
                <MdLocationPin size={20} className="text-primary" />
                <span className="text-[#1A1A1A] text-[12px] font-semibold ">
                  Kathmandu
                </span>
              </div> */}
              <Search data={allBrands} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
