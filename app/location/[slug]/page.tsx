import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import { fetchServerClient } from "@/lib/api";
import axios from "axios";
import React from "react";
import SlugHelper from "../SlugHelper";

const page = async(props: any) => {

  const allLocation = await axios
    .get(
      "https://www.technicalsewa.com/techsewa/publiccontrol/publicfaq/getLocation"
    )
    .then((res) => res.data);

  const location = props?.params?.slug?.split("-").pop();

  const singleLocationDetails = allLocation.filter((value:any)=> value?.location.toLowerCase() === location)
  const formatedDescription = singleLocationDetails[0]?.description.replace(/•/g, '\n•');

  return (
    <>
      <Nav />
      <div className="text-center md:px-8 px-3 mb-8">
      </div>
      <SlugHelper location={location} formatedDescription={formatedDescription} />
      <Footer />
    </>
  );
};

export default page;
