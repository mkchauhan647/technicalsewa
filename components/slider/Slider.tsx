"use client"

import SlideCard from "./SlideCard";

const Slider =({data}:any) => {
  const length = data?.length 

  return (
    <div className="flex justify-center ">
      <div className={`${length>3? "md:max-w-[1280px]" : "max-w-[500px]"}  `} >
          <SlideCard length={length>3?6:2} data={data} />
      </div>
    </div>
  );
};

export default Slider;
