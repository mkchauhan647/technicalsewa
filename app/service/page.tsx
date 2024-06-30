import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import Service from "@/components/pageHelperComponents.js/Service";
import { fetchServerClient } from "@/lib/api";
import React from "react";

const page = async () => {
  const servicesData = await fetchServerClient(
    `/techsewa/masterconfig/publicmasterconfig/getServiceList`
  );

  const result = await fetchServerClient(
    `/techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
  );
  const data = result?.brands;

  return (
    <>
      <Service services={servicesData?.brands} data={data} />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Service | Technical sewa`,
  };
}
