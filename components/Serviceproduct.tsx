import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Element as ScrollElement } from "react-scroll";

interface IProps {
  icon: React.ReactElement;
  brandname: string;
  filterdata: string[];
}

const Serviceproduct = ({ icon, brandname, filterdata }: IProps) => {
  return (
    <div>
      {/* <ScrollElement

     >

     </ScrollElement> */}
      <ScrollElement
        name={brandname}
        className="hidden  md:block bg-white min-h-[112px] w-full p-5 rounded-md border-[1px] border-gray-400 "
      >
        <div>
          <div className="flex justify-center items-center gap-2 text-[#2591b2]">
            {/* Heading Icon  */}
            {icon}

            {/* Title Name  */}
            <span className="text-[#2591b2]">{brandname}</span>
          </div>

          {/* Card container started... */}
          <div className="flex flex-wrap gap-16 justify-center items-center p-4">
            {filterdata?.map((value: any, index: any) => (
              <div className="flex items-center w-[120px] border-r-[1px]  borderline ">
                <div
                  key={index}
                  className={`${
                    value.image_url ? "flex flex-col justify-center" : "hidden"
                  }`}
                >
                  {value.image_url && (
                    <Link href={`/service/${value?.url_product_name}`}>
                      <Image
                        width={100}
                        height={100}
                        className="h-[80px] w-[80px]"
                        src={value.image_url && value.image_url}
                        alt={value.alt2 && value.alt2}
                      />
                      <h3 className="text-[10px]">{value.product_name}</h3>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollElement>
    </div>
  );
};

export default Serviceproduct;
