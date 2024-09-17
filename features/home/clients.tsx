"use client";
import { fetchClient } from "@/lib/api";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ClientsSlider({clients}:any) {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(clients?.brands?.length > 0);
  }, []);

  const clientsImage = clients?.brands?.filter(
    (item: any) => item.image_type === "clients"
  ); 

  const breakpoints = {
    // Define your breakpoints here
    200: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: clients?.brands?.length,
      spaceBetween: 15,
    },
  };
  if (!showSlider) return <></>;
  return (
    <div className="flex flex-col items-center py-10">
      <div className="text-primary font-bold text-2xl mb-[12px]">Our Clients</div>

      <div className="relative w-full md:max-w-[1280px] pb-2">
        <Swiper
          className="flex overflow-hidden justify-center items-center px-10 py-4 cursor-pointer"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={breakpoints}
          resizeObserver
          pagination={{ clickable: true }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          wrapperClass="pb-4 justify-center"
        >
          <div className="flex flex-col lg:flex-row  gap-4 justify-center items-center">
          {clientsImage?.map((ele: any, index: any) => (
             
             <div key={index} className="p-2 h-[130px] w-[130px] border shadow-md flex justify-center items-center ">
                <img src={ele?.image_url} alt={ele?.alt ?? ""} className=" w-full h-full object-scale-down " />
                  </div>
             ))}
         </div>
        </Swiper>
      </div>
    </div>
  );
}
