"use client";

import Image from 'next/image';
import React, { memo, useMemo, useState } from 'react'

const HeroCarousel = ({banners}:any) => {
    const [banner, setBanner] = useState(0);

    
      const handlebanner =(button:string)=>{
        if(button === "prev"){
          setBanner((prevCount) => (prevCount - 1 + 3) % 3)
        }else{
          setBanner((prevCount) => (prevCount + 1) % 3)
        }
      }

      useMemo(() => {
        const interval = setInterval(handlebanner, 5000);
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, [banner]);

  return (
    <>
    <button onClick={()=>handlebanner("prev")} className="prev absolute bg-none z-10 border-none text-[4rem] p-2 rounded bg-black/20 hover:text-white hover:bg-black/20 text-white/20 top-[50%] translate-y-[-50%] cursor-pointer left-4">&#8656; </button>
            <button onClick={()=>handlebanner("next")} className="next absolute bg-none z-10 border-none text-[4rem] p-2 rounded bg-black/20 hover:text-white hover:bg-black/20 text-white/20 top-[50%] translate-y-[-50%] cursor-pointer right-4"> &#8658; </button>
            <ul className="list-none">
                <li className={`h-full`}>
                  <Image
                    className="object-fill w-full h-full"
                    src={banners[banner]?.image_url}
                    alt={banners[banner]?.alt}
                    layout="fill" // Use layout="fill" for responsive behavior
                  />
                </li>
            </ul>
          </>
  )
}

export default memo(HeroCarousel)