"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SliderCard = ({data}:any) => {
  console.log(data)
  const [slider, setslider] = useState();

  var sliderRef:any = useRef(null);
  
  let isDragStart = false , prevPageX:any, prevScrollLeft:any;

  const DragStart = (e:any)=>{
    isDragStart= true;
    prevPageX = e.pageX;
    if (sliderRef.current){
    prevScrollLeft = sliderRef.current.scrollLeft * 10 
    console.log(prevScrollLeft)
    }
  }

  const Dragging = (e: any) => {
    if(isDragStart) return;
    try {
      let positionDiffrence = e.pageX - prevPageX;
      setslider(e.pageX);
      if (sliderRef.current) {
        e.preventDefault()
        sliderRef.current.scrollLeft =positionDiffrence
        console.log(sliderRef.current.scrollLeft);
      }
    } catch (error) {}
  };

  const DragStop = ()=>{
    isDragStart=false
  }

  useEffect(() => {

  }, [slider]);

  return (
    <div  onMouseUp={DragStop} onMouseDown={DragStart} onMouseMove={Dragging} ref={sliderRef} className="overflow-hidden flex justify-center items-center gap-2 cursor-pointer">
      {data?.map((ele: any) => (
        <Link href="/service/lcd-led-tv" className="w-1/6" >
        <div key={ele?.title} >
          <img width={10} height={10} src={ele?.image_url? ele?.image_url:""} alt={ele?.alt} className="h-[100px] w-[150px]" />
        </div>
        </Link>
      ))}
    </div>
  );
};

export default SliderCard;
