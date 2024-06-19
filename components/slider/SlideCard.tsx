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

const SlideCard = ({ length, data, top }: any) => {
  const breakpoints = {
    // Define your breakpoints here
    200: {
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
      spaceBetween: 15,
    },
  };

  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <Swiper
    ref={swiperRef}
    onSwiper={(swiper) => (swiperRef.current = swiper)}
      className="flex overflow-hidden justify-center items-center px-10 pt-4 pb-12 cursor-pointer"
      autoplay={{
        delay: 2500,
      }}
      breakpoints={breakpoints}
      resizeObserver
      pagination={{ clickable: true }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.map((ele: any, index: any) => (
        <SwiperSlide        
        key={index}>
          <div className={`py-1`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
>
            <a
              href={`/service/${ele?.url_product_name}`}
              className={`flex flex-col gap-1 items-center py-2`}
            >
              <img
                src={ele?.image_url?.replace(
                  "https://www.technicalsewa.com/multiservice",
                  "https://www.technicalsewa.com/techsewa"
                )}
                alt={ele?.alt2}
                className="bg-white h-[120px] object-contain w-[190px] border-[1px] border-gray-100 rounded-sm hover:scale-[1.1] transition-hover duration-300"
              />
              <p className="text-[16px] text-center  font-bold">
                {ele?.product_name}
              </p>
              <p
                className="text-[12px] text-[#000000] px-2 text-center truncate line-clamp-2 whitespace-normal"
                dangerouslySetInnerHTML={{ __html: ele.prod_sec_content ?? "" }}
              >
                {/* {ele.title} */}
              </p>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCard;
