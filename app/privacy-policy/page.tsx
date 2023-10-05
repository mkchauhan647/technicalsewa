import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import React from "react";

const page = async () => {
  const privacyPolicy = await fetch(
    "https://smartcare.com.np/multiservice/publicControl/privacy"
  );
  const privacyPolicyData = await privacyPolicy.json();
  return (
    <div>
      <Nav />
      <div className="bg-[#2591b2ca]  md:h-[200px] xsm:h-[100px] text-white text-5xl flex items-center">
        <h2 className="xsm:w- md:w-[800px] m-auto text-center font-extrabold xsm:text-2xl  lg:text-4xl">
          Privacy Policy
        </h2>
      </div>
      <div className="w-full px-10 lg:px-0 m-auto text-justify content text-lg  my-10 max-w-[70rem]">
        <div
          dangerouslySetInnerHTML={{
            __html: privacyPolicyData,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Privacy Policy | Technical sewa`,
  };
}
