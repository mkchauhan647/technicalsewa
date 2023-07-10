"use client"

import React from "react";
import SliderCard from "./SliderCard";

const Slider = () => {
  const slider:any = document.querySelector(".sliderContainer")
  console.log(slider)

  const Dragging =(e:any)=>{
    console.log(e.pageX)
    console.log(slider.scrollLeft)
    slider.scrollLeft = e.pageX;
    console.log(slider.scrollLeft)
  }

  return (
    <div className="flex justify-center ">
      <div className="max-w-[800px]">
        <div onMouseMove={Dragging} className=" sliderContainer overflow-hidden p-10 flex justify-center items-center overflow- gap-4 bg-green-500 ">
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </div>
      </div>
    </div>
  );
};

export default Slider;
