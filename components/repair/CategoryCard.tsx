"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal";

type props = {
  imageUrl: string;
  brandName: string;
  imgAlt: string;
};

const CategoryCard = ({ imageUrl, brandName, imgAlt, allBrands, id }: any) => {
  const [show, setShow] = useState(false);

  const filterData = allBrands?.filter((val: any) => {
    return val.brand_id === id;
  });

  return (
    <div>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="flex flex-col cursor-pointer items-center  md:gap-3 w-[92px] md:w-[144px]"
      >
        <img
          src={imageUrl}
          alt={imgAlt}
          width={30}
          height={30}
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
        />
        <p className="text-[12px] md:text-[13px] text-center leading-[15px] md:leading-[17px]">
          {brandName}
        </p>
      </div>
      {show && (
        <Modal
          imageUrl={imageUrl}
          brandName={brandName}
          filterData={filterData}
          imgAlt={imgAlt}
        />
      )}
    </div>
  );
};

export default CategoryCard;
