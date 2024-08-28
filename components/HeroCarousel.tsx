"use client";

import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const HeroCarousel = ({ banners }: any) => {
  const [banner, setBanner] = useState(0);

  const handlebanner = (button: string) => {
    if (button === "prev") {
      setBanner((prevCount) => (prevCount - 1 + 3) % 3);
    } else {
      setBanner((prevCount) => (prevCount + 1) % 3);
    }
  };

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setBanner((prevCount) => (prevCount + 1) % 3);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [banner]);

  return (
    <>
      {
        banners.length > 1 && (
          <>
          <button
            onClick={() => handlebanner("prev")}
            className="prev absolute bg-none z-10 border-none text-[4rem] p-2 rounded bg-black/20 hover:text-white hover:bg-black/20 text-white/20 top-[50%] translate-y-[-50%] cursor-pointer left-4"
          >
            <BiLeftArrow />
          </button>
        < button
        onClick={() => handlebanner("next")}
      className="next absolute bg-none z-10 border-none text-[4rem] p-2 rounded bg-black/20 hover:text-white hover:bg-black/20 text-white/20 top-[50%] translate-y-[-50%] cursor-pointer right-4"
      >
      <BiRightArrow />
    </button >
          
          </>
  )
}

      {/* <Image
        loading="lazy"
        className="object-cover w-full h-full"
        src={banners[banner]?.image_url}
        alt={banners[banner]?.alt}
        width={600}
        height={600}
      /> */}
      <img
        className="object-cover w-full h-full"
        src={banners[banner]?.image_url}
        alt={banners[banner]?.alt}
        />
    </>
  );
};

export default memo(HeroCarousel);