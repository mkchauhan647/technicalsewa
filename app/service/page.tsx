import Nav from '@/components/Nav'
import Footer from '@/components/footer/Footer'
import Service from '@/components/pageHelperComponents.js/Service'
import { baseUrl } from '@/public/baseUrl'
import axios from 'axios'
import React from 'react'

const page = async () => {

  const result = await axios.get(
    `${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop1`
  );
  const data = result?.data?.brands

    // dataa for Popular Brands
    const PopularBrands = data?.filter((val: any) => {
      return val.brand_name === "Popular Brands";
    });

  return (
    <>
    <Nav />
    <Service data={data} PopularBrands={PopularBrands} />
    <Footer />
    </>
  )
}

export default page


export async function generateMetadata(){
  // const seocontet = await fetch(
  //   "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/blogs"
  // );
  // const seocontetdata:[] = await seocontet.json();

  return{
    title:`Service | Technical sewa`
  }
}