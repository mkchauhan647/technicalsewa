'use client'
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
        className="flex flex-col cursor-pointer items-center gap-3 w-[230px]"
      >
        <Image src={imageUrl} alt={imgAlt} width={45} height={45} />
        <h2>{brandName}</h2>
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
