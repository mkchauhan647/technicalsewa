import Nav from '@/components/Nav'
import Footer from '@/components/footer/Footer'
import ServiceSlug2 from '@/components/pageHelperComponents.js/ServiceSlug2'
import { baseUrl } from '@/public/baseUrl';
import React from 'react'

const page = async () => {

  const result = await fetch(`${baseUrl}techsewa/masterconfig/publicmasterconfig/getSliderListpop`);
  const data = await result.json();

  return (
    <>
    <Nav />
    <ServiceSlug2 data= {data.brands} />
    <Footer />
    </>
  )
}

export default page

export async function generateMetadata({params}:any){
  // const seocontet = await fetch(
  //   "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/blogs"
  // );
  // const seocontetdata:[] = await seocontet.json();
  return{
    title:`${params.slug1} ${params.slug2} | Technical sewa`
  }
}