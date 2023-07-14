"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Modal = ({ brandName, imgAlt, filterData, imageUrl }: any) => {
  const myDialog: any = useRef(null);

  useEffect(() => {
    if (myDialog) {
      myDialog?.current?.showModal();
    }
  }, []);

  return (
    <div>
      <dialog
        ref={myDialog}
        id="myDialog"
        data-modal
        className="outline-none shadow-lg  bg-[white] md:px-[24px] px-[10px] py-[20px] rounded-[10px] "
      >
        <div className="flex md:justify-between items-center gap-[10px] ">
          <div className="flex gap-[10px]  items-center pl-[10px]">
            <Image src={imageUrl} alt={imgAlt} width={30} height={30} />
            <h2 className="text-black font-medium md:text-[28px] text-[21px] leading-[20px]">
              {brandName}{" "}
            </h2>
          </div>

          <RxCross2
            size={16}
            className="text-[#8C8C8C] cursor-pointer "
            onClick={() => myDialog?.current.close()}
          />
        </div>
        <div className="p-5 grid md:grid-cols-4 grid-cols-2 gap-[10px]">
          {filterData?.map((val: any) => (
            <Link
              key={val.product_name}
              href={`service/${val.url_product_name}`}
              className="flex flex-col justify-center items-center w-[100px] md:w-[178px] h-[128px]"
            >
              <div className="rounded-full p-4 border-2 border-[#036CDB] flex items-center w-[100px] h-[80px] overflow-hidden">
                <Image
                  src={val.image_url}
                  alt={val.alt2}
                  width={80}
                  height={64}
                  className=" rounded-full "
                />
              </div>
              <p className="mt-[15px] text-[12px] text-center font-bold text-[#1C1E21] w-32 h-10">
                {val.product_name}
              </p>
            </Link>
          ))}
        </div>
        <div></div>
      </dialog>
    </div>
  );
};

export default Modal;
