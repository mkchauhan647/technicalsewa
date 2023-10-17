import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import Service from "@/components/pageHelperComponents.js/Service";
import { api } from "@/lib/api";
import React from "react";

const page = async () => {
  const { data: servicesData } = await api.get(
    `/techsewa/masterconfig/publicmasterconfig/getServiceList`
  );

  const result = await api.get(
    `/techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
  );
  const data = result?.data?.brands;

  return (
    <>
      <Nav />
      <Service services={servicesData?.brands} data={data} />
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
