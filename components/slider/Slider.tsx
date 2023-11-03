"use client";

import SlideCard from "./SlideCard";

const Slider = ({ data, top }: any) => {
  const length = data?.length;

  return (
    <div className="flex justify-center px-1 w-full">
      <div
        className={`relative w-full pb-2 ${
          length > 2 ? "md:max-w-[1280px]" : "max-w-[500px]"
        }  `}
      >
        <SlideCard top={top} length={length > 2 ? (top ? 5 : 3) : 2} data={data} />
      </div>
    </div>
  );
};

export default Slider;
