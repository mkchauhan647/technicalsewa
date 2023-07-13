'use client'

import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCard = ({length,data}:any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: length,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <Slider {...settings} className="overflow-hidden flex justify-center items-center gap-1 cursor-pointer">
      {data?.map((ele: any, index:any) => (
        <div key={index}  className={``}>
        <Link  href={"service" + "/" + ele.product_name } className={``} >
          <img  src={ele?.image_url? ele?.image_url:""} alt={ele?.alt2} className="h-[100px] w-[150px]" />
        </Link>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCard;
