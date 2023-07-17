import Nav from '@/components/Nav'
import Footer from '@/components/footer/Footer'
import ServiceSlug1 from '@/components/pageHelperComponents.js/ServiceSlug1'
import { baseUrl } from '@/public/baseUrl'
import React from 'react'

const page = async () => {

  const result = await fetch(`${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop`);
  const data = await result.json();
  
  return (
    <>
    <Nav />
    <ServiceSlug1 data={data.brands} />
    <Footer />
    </>
  )
}

export default page