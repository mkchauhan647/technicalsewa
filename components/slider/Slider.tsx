import React, { useEffect, useRef, useState } from "react";
import SliderCard from "./SliderCard";

const Slider =async ({data}:any) => {

  return (
    <div className="flex justify-center ">
      <div className="w-[1000px]" >
          <SliderCard data={data} />
      </div>
    </div>
  );
};

export default Slider;
