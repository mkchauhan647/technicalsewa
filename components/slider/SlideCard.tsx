"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const SlideCard = ({ length, data }: any) => {
  // other responsiveness property is added to global.css file on class swiper-horizontal

  const breakpoints = {
    // Define your breakpoints here
    500: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: length,
      spaceBetween: 20,
    },
    // Add more breakpoints as needed
  };

  return (
    <Swiper
      className="mySwiper overflow-hidden flex justify-center items-center cursor-pointer px-10 pb-12 pt-4"
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      breakpoints={breakpoints}
      resizeObserver
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.map((ele: any, index: any) => (
        <SwiperSlide key={index}>
          <div>
            <Link
              href={`/service/${ele?.url_product_name}`}
              className={`flex flex-col items-center gap-1 py-2`}
            >
              <img
                src={ele?.image_url?.replace(
                  "https://smartcare.com.np/multiservice",
                  "https://smartcare.com.np/techsewa"
                )}
                alt={ele?.alt2}
                className="bg-white h-[90px] w-[150px] border-[1px] border-gray-100 rounded-sm hover:scale-[1.1] transition-hover duration-300"
              />
              <p className="text-[16px] text-center  font-bold">
                {ele?.product_name}
              </p>
              <p className="text-[12px] text-[#a6adbb] px-2 text-center">
                {ele.title}
              </p>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCard;
