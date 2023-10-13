import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import Service from "@/components/pageHelperComponents.js/Service";
import { api } from "@/lib/api";
import React from "react";

const page = async () => {
  const { data: servicesData } = await api.get(
    `/multiservice/masterconfig/publicmasterconfig/getServiceList`
  );

  const result = await api.get(
    `/multiservice/masterconfig/publicmasterconfig/getSliderListpop1`
  );
  const data = result?.data?.brands;

  // dataa for Popular Brands
  const PopularBrands = data?.filter((val: any) => {
    return val.brand_name === "Popular Brands";
  });

  return (
    <>
      <Nav />
      <Service
        services={servicesData?.brands}
        data={data}
        PopularBrands={PopularBrands}
      />
      <Footer />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Service | Technical sewa`,
  };
}
