import React from "react";
import ServiceSlider from "./slider";
import Slider from "@/components/slider/Slider";

export default function ServicesSLiders({
  brands,
  data,
}: {
  brands: any[];
  data: any[];
}) {
  let pairBrands = brands?.length > 1 ? [...brands].slice(1) : [];

  pairBrands = pairBrands.filter((b: any) => b !== "Appliances Repairs");
  pairBrands = pairBrands.filter((b: any) => b !== "Popular Brands Repair");

  const numberOfPairs = Math.ceil(pairBrands.length / 2);

  const appliancesServices = [...data]?.filter(
    (d: any) => d?.brand_name === "Appliances Repairs"
  );
  const popularBrandsServices = [...data]?.filter(
    (d: any) => d?.brand_name === "Popular Brands Repair"
  );

  return (
    <>
      {[
        brands?.length > 0 &&
          [brands[0]].map((b: any, k) => {
            const services = data?.filter((d: any) => d?.brand_name === b);
            return (
              <ServiceSlider key={k} index={k} service={b} data={services} />
            );
          }),
      ]}
      {appliancesServices.length && (
        <ServiceSlider
          index={1}
          service={"Appliances Repairs"}
          data={appliancesServices}
        />
      )}
      {popularBrandsServices.length && (
        <ServiceSlider
          index={0}
          service={"Popular Brands Repair"}
          data={popularBrandsServices}
        />
      )}
      {Array.from({ length: numberOfPairs }, (_, index) => {
        const brand1 = index * 2;
        const brand2 = index * 2 + 1;
        const brand1Services = data?.filter(
          (d: any) => d?.brand_name === pairBrands[brand1]
        );
        const brand2Services = data?.filter(
          (d: any) => d?.brand_name === pairBrands[brand2]
        );
        return (
          <div
            key={index}
            className={`container w-full px-2 overflow-hidden m-auto mb-2 max-md:flex-col justify-between items-center ${
              pairBrands[brand2]
                ? "md:grid md:grid-cols-2 md:space-x-2"
                : "mx-auto"
            }`}
          >
            <div className="flex overflow-hidden flex-col justify-center items-center">
              <b className="text-primary font-bold text-[20px] my-2 border-b-[0.5px] pb-1 border-b-[#4f4b4b]">
                {pairBrands[brand1]}
              </b>
              <Slider data={brand1Services} />
            </div>
            {pairBrands[brand2] && (
              <div className="flex overflow-hidden flex-col justify-center items-center">
                <p className="text-primary font-bold text-[20px] my-2 border-b-[0.5px] pb-1 border-b-[#4f4b4b]">
                  {pairBrands[brand2]}
                </p>
                <Slider data={brand2Services} />
              </div>
            )}
          </div>
        );
      })}
      {/* single slider */}
      {/* {brands?.length > 1 &&
        [...brands].slice(1)?.map((b: any, k) => {
          const services = data?.filter((d: any) => d?.brand_name === b);
          return (
            <ServiceSlider key={k} index={k} service={b} data={services} />
          );
        })} */}
    </>
  );
}
