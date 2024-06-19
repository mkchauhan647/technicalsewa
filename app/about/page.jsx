import React from "react";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/Nav";
import "./about.css";

const About = async () => {
  const aboutUs = await fetch(
    "https://www.technicalsewa.com/techsewa/masterconfig/publicmasterconfig/GetAboutUs"
  );
  const aboutUsData = await aboutUs.json();

  return (
    <div>
      <Nav />
      <div className="relative h-[200px] md:h-[350px]">
        <img
          src="/../assets/Aboutus.jpg"
          className="w-full h-full object-cover"
        />
        <h2 className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-[40px] md:text-[60px]">
          About Us
        </h2>
      </div>
      <div className="w-full px-10 lg:px-0 m-auto text-justify content  my-10 max-w-[70rem] text-lg">
        <div
          className="about"
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
  //   "https://www.technicalsewa.com/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://www.technicalsewa.com/blogs"
  // );
  // const seocontetdata:[] = await seocontet.json();

  return {
    title: `About Us | Technical sewa`,
  };
}
