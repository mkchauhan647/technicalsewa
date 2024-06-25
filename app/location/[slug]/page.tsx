import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import Categories from "@/components/repair/Categories";
import { fetchServerClient } from "@/lib/api";
import axios from "axios";
import React from "react";

const page = async(props: any) => {

  const allLocation = await axios
    .get(
      "https://www.technicalsewa.com/techsewa/publiccontrol/publicfaq/getLocation"
    )
    .then((res) => res.data);

  const location = props?.params?.slug?.split("-").pop();

  const singleLocationDetails = allLocation.filter((value:any)=> value?.location.toLowerCase() === location)

  // fetching for allBrands
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
        <h1 className="bg-primary font-extrabold text-white text-2xl py-4">{location.toUpperCase()}</h1>
       <p  className="text-justify font-normal">{singleLocationDetails[0]?.description} </p>

       <Categories allBrands={allBrands} />
      </div>
      <Footer />
    </>
  );
};

export default page;
