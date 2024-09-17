"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Brand {
  image_url: string;
  alt: string;
  image_type: string;
}

interface ClientsProps {
  clients: {
    brands: Brand[];
  };
}

export default function ClientsSlider({ clients }: ClientsProps) {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(clients?.brands?.length > 0);
  }, [clients?.brands]);

  const clientsImage = clients?.brands?.filter(
    (item: Brand) => item.image_type === "clients"
  );

  const breakpoints = {
    200: { slidesPerView: 3, spaceBetween: 4 },
    768: { slidesPerView: 4, spaceBetween: 5 },
    992: { slidesPerView: 6, spaceBetween: 10 },
    1280: { slidesPerView: clientsImage?.length || 7, spaceBetween: 15 },
  };

  if (!showSlider) return null;

  return (
    <div className="flex flex-col items-center py-10">
      <div className="text-primary font-bold text-2xl mb-[12px]">Our Clients</div>

      <div className="relative w-full md:max-w-[1280px] pb-2">
        <Swiper
          className="flex overflow-hidden justify-center items-center px-10 py-4 cursor-pointer"
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          breakpoints={breakpoints}
          resizeObserver
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          wrapperClass="pb-4 justify-center"
        >
          {clientsImage?.map((ele: Brand, index: number) => (
            <SwiperSlide key={index}>
              <div className="p-2 h-[130px] w-[130px] border  flex justify-center items-center">
                <Image
                  src={ele.image_url}
                  alt={ele.alt || "Client logo"}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
