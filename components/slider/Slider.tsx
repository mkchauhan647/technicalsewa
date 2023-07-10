"use client";

import React, { useEffect, useRef, useState } from "react";
import SliderCard from "./SliderCard";

const Slider = () => {
  const [slider, setslider] = useState();
  var sliderRef: any = useRef();

  const Dragging = (e: any) => {
    try {
      setslider(e.pageX);
      if (sliderRef.current) {
        sliderRef.current.scrollBy = e.pageX;
        console.log(sliderRef.current);
      }
    } catch (error) {}
  };

  useEffect(() => {
    console.log(slider, sliderRef.current.scrollLeft);
    sliderRef.current.scrollLeft = slider;
  }, [slider]);

  return (
    <div className="flex justify-center ">
      <div className="w-[1000px]" >
        <div
          onMouseMove={Dragging}
          ref={sliderRef}
          className="overflow-hidden flex justify-center items-center gap-2"
        >
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
