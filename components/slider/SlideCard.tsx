"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = ({ length, data }: any) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: length,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
          {
          breakpoint: 1024,
          settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
          }
          },
          {
          breakpoint: 600,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 10000,
          autoplaySpeed: 10000,
          initialSlide: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 10000,
          autoplaySpeed: 10000,
          }
          }
          ]
      };    
      return (
        <Slider
          {...settings}
          className="overflow-hidden flex justify-center items-center cursor-pointer px-10 pb-12 pt-4"
        >
          {data?.map((ele: any, index: any) => (
            <div key={index} className={``}>
              <Link
                href={`/service/${ele?.url_product_name}`}
                className={`flex flex-col items-center gap-1 py-2`}
              >
                <img
                  src={ele?.image_url ? ele?.image_url : ""}
                  alt={ele?.alt2}
                  className="bg-white h-[100px] w-[160px] border-[1px] border-gray-100 rounded-sm hover:scale-[1.1] transition-hover duration-300"
                />
                <h1 className="text-[16px] text-center whitespace-nowrap font-bold">
                  {ele?.product_name}
                </h1>
                <p className="text-[12px] text-[#a6adbb] px-2 text-center">
                  {ele.title}
                </p>
              </Link>
            </div>
          ))}
        </Slider>
      );
}

export default SlideCard
