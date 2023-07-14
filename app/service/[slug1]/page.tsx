"use client";
import { baseUrl } from "../../../public/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { useParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import { url } from "inspector";
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";

const page = () => {
  //state variable
  const [data, setData] = useState<any>(null);
  const [selectCategoryData, setSelectCategoryData] = useState<any>();
  const params = useParams(); // getting params from URL
  const router = useRouter();

  // filter data based on URL params and stored to fitlerData vaiables
  const filterData = data?.filter((val: any) => {
    return val.url_product_name === params.slug1;
  });

  // filtering product_id from data
  const filteredId: any = filterData?.map((element: any) => element.product_id);
  console.log(filteredId && filteredId[0]);

  // ===========function-to-call-api-==========
  const fetchedData = async () => {
    const result = await axios.get(
      `${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop`
    );
    setData(result?.data?.brands);
  };

  // =====data fetched for selectProductCategory====
  const fetchedData1 = async () => {
    const formData = new FormData();
    formData.append("product_id", filteredId);
    const result = await axios.post(
      `${baseUrl}multiservice/publicControl/GetProductcategiryByProduct`,
      formData
    );
    setSelectCategoryData(result?.data);
  };

  console.log(Number(filteredId), "idd");
  console.log(selectCategoryData, "selectssss");

  // call fetchData() function once when components renders
  useEffect(() => {
    if (data === null) {
      fetchedData();
    }
  }, []);

  useEffect(() => {
    fetchedData1();
  }, [data]);
  // ===============================================

  filterData &&
    filterData.forEach((element: any) => {
      console.log(element.brand_name);
    });

  console.log(filterData);

  return (
    <div>
      {filterData &&
        filterData.map((val: any, index: any) => (
          <div
            key={index}
            className="mb-[20px] max-md:p-4 flex flex-col gap-4 "
          >
            <div
              style={{ backgroundImage: `url(${val?.image_url})` }}
              className="bg-white h-[350px] bg-contain bg-no-repeat bg-center w-full relative  py-[20px]"
            >
              <div className="absolute top-0 z-0 h-full w-full left-0 bg-black/50 "></div>

              <div className="container absolute h-full top-0 left-0 py-3  px-[10px] z-30  2xl:mx-[290px] md:mx-[166px]">
                <div className="flex flex-col ">
                  <h3 className="text-[#cdcecf] font-[600] text-[16px] ">
                    {val?.brand_name} /{" "}
                    <span className="text-white font-[600] text-[16px]">
                      {val?.product_name}
                    </span>{" "}
                  </h3>
                  <h1 className=" text-white leading-[1.5] tracking-[1px] text-[30px] font-bold">
                    {val?.title}
                  </h1>
                </div>

                <div className="w-[200px] h-[45px] bg-[#1D738D] flex itmes-center  text-white py-[5px] px-[15px] rounded-[6px] mt-[10px]">
                  <AiFillStar size={30} />
                  <p className="pl-[10px] text-[24px] font-semibold">4.65</p>
                  <p className="pl-[5px] self-end mb-[5px]">Out of 5</p>
                </div>

                <div className="flex flex-col mt-[20px]  md:gap-[14px] ">
                  <div className="flex  items-center">
                    <div
                      className="flex pb-4 text-white text-justify flex-col gap-4"
                      dangerouslySetInnerHTML={{ __html: val?.product_desc }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[30%] lg:px-4 z-40  md:absolute md:top-[100px] md:right-0  ">
              <div className="bg-[#2591b2] rounded-md shadow-md   w-[355px] p-4 lg:fixed  ">
                <h2 className="text-white mb-4 text-[24px] font-medium text-center ">
                  Select product Category
                </h2>
                <div className="flex flex-col px-2 gap-2 justify-center items-center">
                  {selectCategoryData?.map((val: any) => {
                    return (
                      <div
                        onClick={() =>
                          router.push(`/service/${params.slug1}/${val.model}`)
                        }
                        key={val.value}
                        className="h-[20pxpx] flex justify-between items-center px-4 py-[12px] bg-white w-full text-black rounded-md "
                      >
                        {val.text}
                        <SlArrowRight />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-[50px] w-[100%] md:w-[50%] container 2xl:mx-[290px] md:mx-[166px] px-[10px]">
              <div
                className="flex text-justify flex-col gap-4"
                dangerouslySetInnerHTML={{ __html: val?.content }}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
