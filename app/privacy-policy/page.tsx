import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import React from "react";
import "./page.css";
import { fetchServerClient } from "@/lib/api";

const page = async () => {
  const privacyPolicyData = await fetchServerClient(
    "/techsewa/publicControl/privacy"
  );
  return (
    <div>
      {/* <div className="  md:h-[200px] xsm:h-[100px] text-white text-5xl flex items-center">
        <h2 className="xsm:w- md:w-[800px] m-auto text-center font-extrabold xsm:text-2xl  lg:text-4xl">
          Privacy Policy
        </h2>
      </div> */}
      <div className="relative h-[200px] md:h-[350px]">
        <img
          src="/../assets/Aboutus.jpg"
          className="object-cover w-full h-full"
        />
        <h2 className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-[40px] md:text-[60px]">
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
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Privacy Policy | Technical sewa`,
  };
}
