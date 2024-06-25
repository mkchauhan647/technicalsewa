import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import React from "react";

const page = (params: any) => {
  return (
    <>
      <Nav />
      <div className="text-center" style={{height:"300px"}}>
       <p  className="text-2xl font-extrabold"> Address/ location is here. {params.params.slug}</p>
      </div>
      <Footer />
    </>
  );
};

export default page;
