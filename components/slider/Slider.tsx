"use client"


import React, { useEffect, useRef, useState } from "react";
import SliderCard from "./sliderCard";

const Slider =async ({data}:any) => {
  const length = data.length 

  return (
    <div className="flex justify-center ">
      <div className={`${length>3? "max-w-[1350px]" : "max-w-[500px]"} `} >
          <SliderCard length={length>3?7:2} data={data} />
      </div>
    </div>
  );
};

export default Slider;
