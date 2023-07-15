"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { useParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import { url } from "inspector";
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";
import MapComponent from "@/components/mapComponents/MapComponent";
import { baseUrl } from "@/public/baseUrl";

const ServiceSlug2 = () => {
  const [openMapComponent, setopenMapComponent] = useState(false);
  const [data, setData] = useState<any>(null);
  const [selectCategoryData, setSelectCategoryData] = useState<any>();
  const [serviceCategoryData, setServiceCategoryData] = useState<any>();
  const params = useParams();

  // ===========function-to-call-api-==========
  const fetchedData = async () => {
    const result = await axios.get(
      `${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop`
    );
    setData(result?.data?.brands);
  };

  // filter data based on URL params and stored to fitlerData vaiables
  const filterData = data?.filter((val: any) => {
    return val.url_product_name === params.slug1;
  });

  //  ===============================
  const filteredId: any = filterData?.map((element: any) => element.product_id);
  const fetchedData1 = async () => {
    const formData = new FormData();
    formData.append("product_id", filteredId);
    const result = await axios.post(
      `${baseUrl}multiservice/publicControl/GetProductcategiryByProduct`,
      formData
    );
    setSelectCategoryData(result?.data);
  };
  useEffect(() => {
    fetchedData1();
  }, [data]);
  //  ===============================

  //
  useEffect(() => {
    if (data === null) {
      fetchedData();
    }
  }, []);

  const finalData = selectCategoryData?.filter((val: any) => {
    return val.model === decodeURIComponent(params.slug2);
  });
 

  // ===========================================
  const serviceCategoryId: any = finalData?.map(
    (element: any) => element.value
  );
  const serviceDataFetched = async () => {
    const formData = new FormData();
    formData.append("brand_id", serviceCategoryId);
    const result = await axios.post(
      `${baseUrl}multiservice/publicControl/getServicesByProductCategory`,
      formData
    );
    setServiceCategoryData(result?.data);
  };

  useEffect(() => {
    serviceDataFetched();
  }, [selectCategoryData]);
  // ==================================================

  return (
    <div>
      {!openMapComponent ? (
        <div>
          {filterData &&
            filterData.map((val: any, index: any) => {
              return (
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
                            {val?.product_name} /{" "}
                            {decodeURIComponent(params.slug2)}
                          </span>{" "}
                        </h3>
                      </div>

                      <div className="w-[200px] h-[45px] bg-[#1D738D] flex itmes-center  text-white py-[5px] px-[15px] rounded-[6px] mt-[10px]">
                        <AiFillStar size={30} />
                        <p className="pl-[10px] text-[24px] font-semibold">
                          4.65
                        </p>
                        <p className="pl-[5px] self-end mb-[5px]">Out of 5</p>
                      </div>

                      <div className="flex flex-col mt-[20px]  md:gap-[14px] ">
                        <div className="flex  items-center">
                          {finalData &&
                            finalData.map((val: any,index:any) => {
                              return (
                                <div
                                  key={index}
                                  className="flex pb-4 text-white text-justify flex-col gap-4"
                                  dangerouslySetInnerHTML={{
                                    __html: val?.description,
                                  }}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[30%] lg:px-4 z-40  md:absolute md:top-[100px] md:right-0  ">
                    <div className="bg-[#2591b2] rounded-md shadow-md   w-[355px] p-4 lg:fixed  ">
                      {finalData?.map((val: any,index:any) => {
                        return (
                          <div key={index} className="flex flex-col justify-center items-center">
                            <h2 className="text-white  text-[24px] font-medium text-center ">
                              Hire a Expert for
                            </h2>
                            <span className="text-white mb-4 text-[24px] font-medium text-center ">
                              {val?.text}
                            </span>
                          </div>
                        );
                      })}
                      <div className="flex flex-col px-2 gap-2 justify-center items-center">
                        {serviceCategoryData?.map((val: any) => {
                          return (
                            <div
                              key={val.value}
                              onClick={() => setopenMapComponent(true)}
                              className="h-[20pxpx] cursor-pointer flex justify-between items-center px-4 py-[12px] bg-white w-full text-black rounded-md "
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
                    {finalData &&
                      finalData.map((val: any,index:any) => {
                        return (
                          <div
                            key={index}
                            className="flex text-justify flex-col gap-4"
                            dangerouslySetInnerHTML={{ __html: val?.content }}
                          />
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <MapComponent />
      )}
    </div>
  );
};

export default ServiceSlug2;
