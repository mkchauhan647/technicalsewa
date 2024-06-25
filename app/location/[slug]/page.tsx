import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import Categories from "@/components/repair/Categories";
import { fetchServerClient } from "@/lib/api";
import React from "react";

const page = async(props: any) => {

  const result = await fetchServerClient(
    `techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
  );
  let allBrands = result?.brands;
  // allBrands?.sort((a: any, b: any) => +a?.brand_id - +b?.brand_id);
  allBrands?.sort((a: any, b: any) => +a?.ordering - +b?.ordering);
 
  return (
    <>
      <Nav />
      <div className="text-center px-8">
       <p  className="text-justify font-normal"> {Object.keys(props.searchParams)}</p>

       <Categories allBrands={allBrands} />
      </div>
      <Footer />
    </>
  );
};

export default page;
