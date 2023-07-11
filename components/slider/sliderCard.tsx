"use client"

import React, { useEffect, useRef, useState } from "react";

const SliderCard = () => {
  const arr = [1, 2, 3, 4,5,6,7,8,9];

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
      {arr.map((ele: any) => (
        <div className="w-1/6">
          <div className="w-[150px] h-[100px] bg-blue-500">{ele}</div>
        </div>
      ))}
    </div>
  );
};

export default SliderCard;
