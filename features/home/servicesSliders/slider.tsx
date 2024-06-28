import React from "react";
import Slider from "../../../components/slider/Slider";

interface IProps {
  index: number;
  service: any;
  data: any;
  topSliders?: boolean;
}
export default function ServiceSlider({
  index,
  service,
  data,
  topSliders = false,
}: IProps) {
  if (!Array.isArray(data) || (Array.isArray(data) && data.length < 1)) {
    return <></>;
  }
  return (
    <div
      className={`flex md:h-[278px] justify-center flex-col items-center py-2 ${
        index % 2 === 0 ? "bg-[#efefef]" : "bg-white"
      } `}
    >
      <b className="text-primary font-bold text-[20px] mb-[12px] mt-[5px]">
        {service}
      </b>
      <Slider data={data} top={topSliders} />
    </div>
  );
}
