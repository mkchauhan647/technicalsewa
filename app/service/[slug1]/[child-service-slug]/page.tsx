import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import ChildService from "@/features/service/child-service/ChildService";
import { fetchServerClient } from "@/lib/api";
import { baseUrl } from "@/public/baseUrl";
import React from "react";

const page = async () => {
  const data = await fetchServerClient(
    `/techsewa/masterconfig/publicmasterconfig/getSliderListpop`
  );

  return (
    <>
      <Nav />
      <ChildService data={data.brands} />
      <Footer />
    </>
  );
};

export default page;

export async function generateMetadata({ params }: any) {
  return {
    title: `${params.slug1} ${params["child-service-slug"]} | Technical sewa`,
  };
}
