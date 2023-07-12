"use client";

import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal";

type props = {
  imageUrl: string;
  brandName: string;
  imgAlt: string;
};

const CategoryCard = ({ imageUrl, brandName, imgAlt, allBrands,id }: any) => {
  const [show, setShow] = useState(false);
  const [activeCatagory, setActiveCategory] = useState("");

  console.log(imgAlt,'imgAlt')

  console.log(allBrands)
  


  const filterData = allBrands?.filter((val:any)=>{return  val.brand_id === id})
  console.log(filterData,'filterData')

  return (
    <div>
      <div
        onClick={() => {
          setShow(!show);
          setActiveCategory(brandName);
        }}
        className="flex flex-col items-center gap-3 w-[230px]"
      >
        <Image src={imageUrl} alt={imgAlt} width={45} height={45} />
        <h2>{brandName}</h2>
      </div>
      {show && <Modal filterData={filterData} />}
    </div>
  );
};

export default CategoryCard;
