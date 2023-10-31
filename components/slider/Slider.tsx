"use client";

import SlideCard from "./SlideCard";

const Slider = ({ data, top }: any) => {
  const length = data?.length;

  return (
    <div className="flex justify-center w-full">
      <div
        className={`relative w-full ${
          length > 3 ? "md:max-w-[1280px]" : "max-w-[500px]"
        }  `}
      >
        <SlideCard length={length > 3 ? (top ? 5 : 3) : 2} data={data} />
      </div>
    </div>
  );
};

export default Slider;
