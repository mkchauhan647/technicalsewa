import React from "react";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/Nav";
import "./about.css";

const About = async () => {
  const aboutUs = await fetch(
    "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/GetAboutUs"
  );
  const aboutUsData = await aboutUs.json();

  return (
    <div>
      <Nav />
      <div className="bg-[#2591b2ca]  md:h-[389px] xsm:h-[200px] text-white text-5xl flex items-center">
        <h1 className="xsm:w- md:w-[800px] m-auto text-center font-extrabold xsm:text-2xl  lg:text-4xl">
          About Us
        </h1>
      </div>
      <div className="w-full px-10 lg:px-0 m-auto text-justify content  my-10 max-w-[70rem] text-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: aboutUsData?.brands[0].description,
          }}
        />
        ;
      </div>
      <Footer />
    </div>
  );
};

export default About;

export async function generateMetadata() {
  // const seocontet = await fetch(
  //   "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/blogs"
  // );
  // const seocontetdata:[] = await seocontet.json();

  return {
    title: `About Us | Technical sewa`,
  };
}
