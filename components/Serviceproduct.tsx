import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Element as ScrollElement } from "react-scroll";

interface IProps {
  id: string;
  icon: React.ReactElement;
  brandname: string;
  data: any[];
}

const ServiceProducts = ({ id, icon, brandname, data }: IProps) => {
  return (
    <ScrollElement
      name={id}
      id={id}
      className="hidden md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
    >
      <div>
        <div className="flex gap-2 justify-center items-center text-primary">
          {/* Heading Icon  */}
          {icon}

          {/* Title Name  */}
          <span className="text-primary">{brandname}</span>
        </div>

        {/* Card container started... */}
        <div className="flex flex-wrap max-sm:!gap-6 gap-16 justify-center items-center py-4 md:!gap-8 lg:!gap-6">
          {data?.map((value: any, index: any) => (
            <div
              key={index}
              className="flex items-center w-[120px] border-r-[1px] borderline p-1 hover:bg-gray-200 transition-all rounded-sm"
            >
              <div
                className={`${
                  value.product_name
                    ? "flex flex-col justify-center mx-auto"
                    : "hidden"
                } `}
              >
                <a href={`/service/${value?.url_product_name}`}>
                  {value.image_url && (
                    <Image
                      width={100}
                      height={100}
                      className="h-[80px] w-[80px] object-contain"
                      src={value.image_url && value.image_url}
                      alt={value.alt2 && value.alt2}
                    />
                  )}
                  <h3 className="text-[10px]">{value.product_name}</h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollElement>
  );
};

export default ServiceProducts;
