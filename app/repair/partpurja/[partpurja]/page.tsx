import React from "react";

const page = () => {
  return (
    <div className="pt-[20px] pb-[79px] xl:w-[80rem] m-auto p-8 md:px-0">
      <div className="md:w-[60%]  m-auto border-[2px] border-[#2591b2] rounded-lg flex flex-col gap-2 p-10 text-[14px] text-[#a6adbb] font-bold">
        <img
          className=" self-center w-[600px] h-[200px] md:h-[400px]"
          src=""
          alt="image"
        />
        <h1 className="bg-[#2591b2] self-center text-center w-[80%] sm:w-auto text-white font-normal rounded-xl px-4 py-2">
          WM-TL-SUSPENSION RODS
        </h1>
        <h2>Whirlpool Top Load Suspension Tods </h2>
        <hr />
        <h2>Market Price: 3500.00</h2>
        <hr />
        <h3 className="text-[#2591b2]">Our Offer: 2100.00</h3>
        <hr />

        <h2>Contact: 9619544555, 015970066</h2>
        <hr />

        <h2>Description</h2>
        <p className="text-[#ced2d9]">
          This suspuension rods help to dampen the movement of the washer tub.
          If one or more of the suspension rods are broken, the washer will
          vibrate or sha
        </p>
        <hr />
      </div>
    </div>
  );
};

export default page;
