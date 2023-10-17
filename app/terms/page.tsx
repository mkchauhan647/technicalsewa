import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import React from "react";

const page = async () => {
  const terms = await fetch(
    "https://smartcare.com.np/techsewa/publicControl/terms"
  );
  const termsData = await terms.json();
  return (
    <>
      <Nav />
      <div>
        <div className="relative h-[200px] md:h-[350px]">
          <img
            src="/../assets/Aboutus.jpg"
            className="object-cover w-full h-full"
          />
          <h2 className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-[40px] md:text-[60px]">
            Terms and Conditions
          </h2>
        </div>
        <div className="w-full px-10 lg:px-0 m-auto text-justify content text-lg  my-10 max-w-[70rem]">
          <div
            dangerouslySetInnerHTML={{
              __html: termsData,
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Terms and Conditions | Technical sewa`,
  };
}
