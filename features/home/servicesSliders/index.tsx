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
  // let pairBrands = brands?.length > 1 ? [...brands].slice(1) : [];
  let pairBrands = brands?.length > 1 ? [...brands] : [];

  // remove for appliances, popular brands, warranty repair
  pairBrands = pairBrands.filter((b: any) => b?.id !== 62);
  pairBrands = pairBrands.filter((b: any) => b?.id !== 76);
  pairBrands = pairBrands.filter((b: any) => b?.id !== 61);

  const numberOfPairs = Math.ceil(pairBrands.length / 2);

  const warrantyRepairServices = [...data]?.filter(
    (d: any) => +d?.brand_id === 61 // "warranty Repairs"
  );
  const appliancesServices = [...data]?.filter(
    (d: any) => +d?.brand_id === 62 // "Appliances Repairs"
  );
  const popularBrandsServices = [...data]?.filter(
    (d: any) => +d?.brand_id === 76 // specified id for "Popular Brands Repair"
  );

  const popularBrand = brands?.find((b: any) => b?.id === 76);
  const applianceRepair = brands?.find((b: any) => b?.id === 62);
  const warrantyRepair = brands?.find((b: any) => b?.id === 61);

  return (
    <>
      {/* {[
        brands?.length > 0 &&
          [brands[0]].map((b: any, k) => {
            const services = data?.filter((d: any) => +d?.brand_id === b?.id);
            return (
              <ServiceSlider key={k} index={k} service={b?.name} data={services} />
            );
          }),
      ]} */}
      {appliancesServices.length && (
        <ServiceSlider
          index={1}
          service={applianceRepair?.name}
          data={appliancesServices}
          topSliders
        />
      )}
      {popularBrandsServices.length && (
        <ServiceSlider
          index={0}
          service={popularBrand?.name}
          data={popularBrandsServices}
          topSliders
        />
      )}
      {warrantyRepairServices.length && (
        <ServiceSlider
          index={1}
          service={warrantyRepair?.name}
          data={warrantyRepairServices}
          topSliders
        />
      )}
      {Array.from({ length: numberOfPairs }, (_, index) => {
        const brand1 = index * 2;
        const brand2 = index * 2 + 1;
        const brand1Services = data?.filter(
          (d: any) => +d?.brand_id === pairBrands[brand1]?.id
        );
        const brand2Services = data?.filter(
          (d: any) => +d?.brand_id === pairBrands[brand2]?.id
        );
        return (
          <div
            key={index}
            className={`w-full ${index % 2 === 0 ? "md:bg-[#efefef]" : "bg-white"}`}
          >
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
                  {pairBrands[brand1]?.name}
                </b>
                <Slider data={brand1Services} />
              </div>
              {pairBrands[brand2] && (
                <div className="flex overflow-hidden flex-col justify-center items-center">
                  <p className="text-primary font-bold text-[20px] my-2 border-b-[0.5px] pb-1 border-b-[#4f4b4b]">
                    {pairBrands[brand2]?.name}
                  </p>
                  <Slider data={brand2Services} />
                </div>
              )}
            </div>
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
