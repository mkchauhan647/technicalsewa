import Nav from '@/components/Nav'
import Footer from '@/components/footer/Footer'
import Service from '@/components/pageHelperComponents.js/Service'
import { baseUrl } from '@/public/baseUrl'
import axios from 'axios'
import React from 'react'

const page = async() => {

  const result = await axios.get(`${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop1`);
  const data = result?.data?.brands;

    // Data for Popular Brands that is placed at rigth bottom of service page
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