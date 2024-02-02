"use client";
import { fetchClient } from "@/lib/api";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ClientsSlider() {
  const [clients, setClients] = useState<any>([]);
  const [showSlider, setShowSlider] = useState(false);
  const fetchClients = async () => {
    const clients = await fetchClient(
      "/techsewa/masterconfig/publicmasterconfig/getConfigList"
    );
    setClients(clients?.brands ?? []);
    setShowSlider(clients?.brands?.length > 0);
  };
  useEffect(() => {
    fetchClients();
  }, []);

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
      slidesPerView: clients?.length,
      spaceBetween: 15,
    },
  };
  if (!showSlider) return <></>;
  return (
    <div className="flex flex-col items-center py-10">
      <div className="text-primary font-bold text-2xl mb-[12px]">Clients</div>

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
          {clients?.map((ele: any, index: any) => {
            if (ele?.image_type !== "clients" || !ele?.image_url) return <></>;
            return (
              <SwiperSlide key={index}>
                <div
                  className={
                    "flex flex-col justify-center items-center p-2 rounded-md border h-[110px] border-primary"
                  }
                >
                  <img
                    src={ele?.image_url}
                    alt={ele?.alt ?? ""}
                    className="w-[80px] object-contain h-auto md:w-[100px] hover:scale-110 duration-100"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
