import React from "react";
import ServiceSlider from "./slider";

export default function ServicesSLiders({
  brands,
  data,
}: {
  brands: any[];
  data: any[];
}) {
  return (
    <>
      {brands?.map((b: any, k) => {
        const services = data?.filter((d: any) => d?.brand_name === b);
        return <ServiceSlider key={k} index={k} service={b} data={services} />;
      })}
    </>
  );
}
