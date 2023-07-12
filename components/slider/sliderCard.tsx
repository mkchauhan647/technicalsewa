"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "./Slider";

const SliderCard = ({data}:any) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };


  return (
    <Slider {...settings} className="overflow-hidden flex justify-center items-center gap-2 cursor-pointer">
      {data?.map((ele: any) => (
        <Link href="/service/lcd-led-tv" className="w-1/6" >
        <div key={ele?.title} >
          <img width={10} height={10} src={ele?.image_url? ele?.image_url:""} alt={ele?.alt} className="h-[100px] w-[150px]" />
        </div>
        </Link>
      ))}
    </Slider>
  );
};

export default SliderCard;
