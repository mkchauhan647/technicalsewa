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
        className="outline-none shadow-lg bg-[white] px-[10px] py-[20px] rounded-[10px] "
      >
        <div className="flex md:justify-between items-center gap-[10px] mb-2">
          <div className="flex gap-[10px] items-center pl-[10px] mx-auto">
            <Image src={imageUrl} alt={imgAlt} width={30} height={30} loading="lazy"/>
            <p className="text-black font-medium md:text-[28px] text-[21px] leading-[20px]">
              {brandName}
            </p>
          </div>

          <RxCross2
            size={16}
            className="text-[#8C8C8C] cursor-pointer "
            onClick={() => myDialog?.current.close()}
          />
        </div>
        <div className="flex flex-wrap justify-center place-items-center space-x-1 space-y-1 w-full max-w-xl max-md:grid max-md:grid-cols-2">
          {filterData?.map((val: any) => (
            <a
              key={val.product_name}
              href={`/service/${val.url_product_name}`}
              className="flex flex-col justify-center items-center w-[80px] md:w-[120px] h-[120px] p-0.5"
            >
              <div className="rounded-md p-2 border border-[#2591b2] flex flex-col h-full justify-center items-center w-[115px] overflow-hidden">
                {val.image_url && (
                  <Image
                    src={val.image_url.replace(
                      "https://www.technicalsewa.com/multiservice",
                      "https://www.technicalsewa.com/techsewa"
                    )}
                    alt={val.alt2}
                    width={80}
                    height={60}
                    loading="lazy"
                    className="h-[60px] w-[80px]"
                  />
                )}
                {/* <p className="text-xs mt-2 text-center font-bold text-[#1C1E21] w-32 h-10">
                  {val.product_name}
                </p> */}
              </div>
            </a>
          ))}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
