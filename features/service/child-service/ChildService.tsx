"use client";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { useParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import { url } from "inspector";
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/public/baseUrl";
import ComplainForm from "@/features/complain/complain-form/complainForm";
import useComplainFormStore from "@/store/useComplainInquiryStore";

const ChildService = ({ data }: any) => {
  const [complainForm, setComplainForm] = useState(false);
  const [selectCategoryData, setSelectCategoryData] = useState<any>();
  const [serviceCategoryData, setServiceCategoryData] = useState<any>();
  const params = useParams();
  const router = useRouter();

  // filter data based on URL params and stored to fitlerData vaiables
  const filterData = useMemo(
    () => data?.filter((val: any) => val.url_product_name === params.slug1),
    []
  );

  //  ===============================
  const filteredId: any = filterData?.map((element: any) => element.product_id);
  const fetchedData1 = async () => {
    const formData = new FormData();
    formData.append("product_id", filteredId);
    const result = await axios.post(
      `${baseUrl}/techsewa/publicControl/GetProductcategiryByProduct`,
      formData
    );
    setSelectCategoryData(result?.data);
  };
  useEffect(() => {
    fetchedData1();
  }, [data]);
  //  ===============================

  const finalData = selectCategoryData?.filter((val: any) => {
    return val.model === decodeURIComponent(params["child-service-slug"]);
  });

  // ===========================================
  const serviceCategoryId: any = finalData?.map(
    (element: any) => element.value
  );
  const serviceDataFetched = async () => {
    const formData = new FormData();
    formData.append("brand_id", serviceCategoryId);
    const result = await axios.post(
      `${baseUrl}/techsewa/publicControl/getServicesByProductCategory`,
      formData
    );
    setServiceCategoryData(result?.data);
  };

  useEffect(() => {
    serviceDataFetched();
  }, [selectCategoryData]);
  // ==================================================
  const { setInquiryData } = useComplainFormStore();

  // prp inquiry form data
  useEffect(() => {
    const item = data?.find(
      (val: any) => val.url_product_name === params.slug1
    );
    if (!item || !serviceCategoryId) return;

    const inquiryData = {
      service_category: item?.brand_id,
      product_category: serviceCategoryId?.[0],
      brand_product_id: item?.product_id,
      service_id: item?.brand_id,
    };
    setInquiryData(inquiryData);
  }, [selectCategoryData]);

  const childService = finalData?.[0];

  useEffect(() => {
    if (Array.isArray(filterData) && filterData.length === 0) {
      router.push("/");
    }
  }, [filterData]);

  return (
    <div>
      {!complainForm ? (
        <div>
          {filterData &&
            filterData.map((val: any, index: any) => {
              return (
                <div
                  key={index}
                  className="mb-[20px] max-md:p-4 flex flex-col gap-4 "
                >
                  <div
                    style={{
                      backgroundImage: `url(${(
                        childService?.image_url ?? val?.image_url
                      )?.replace(
                        "https://www.technicalsewa.com/multiservice/",
                        "https://www.technicalsewa.com/multiservice/test/"
                      )})`,
                    }}
                    className="bg-white h-[350px] bg-contain bg-no-repeat bg-center w-full relative  py-[20px]"
                  >
                    <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/50"></div>

                    {/* banner description paragraph  */}
                    <div className="absolute left-0 w-full">
                      <div className=" max-w-[1280px] mx-auto px-[2px]">
                        <div className="flex flex-col">
                          <h3 className="text-[#cdcecf] font-[600] text-[16px] ">
                            {val?.brand_name} /{" "}
                            <span className="text-white font-[600] text-[16px]">
                              {val?.product_name} /{" "}
                              {decodeURIComponent(params["child-service-slug"])}
                            </span>{" "}
                          </h3>
                          <h3 className="max-w-[637px] text-white leading-[1.5] tracking-[1px] md:text-[30px] text-[24px] font-bold">
                            {childService?.title}
                          </h3>
                        </div>

                        <div className="w-[200px] h-[45px] bg-[#1D738D] flex itmes-center  text-white py-[5px] px-[15px] rounded-[6px] mt-[5px]">
                          <AiFillStar size={30} />
                          <p className="pl-[10px] text-[24px] font-semibold">
                            4.65
                          </p>
                          <p className="pl-[5px] self-end mb-[5px]">Out of 5</p>
                        </div>

                        <div className="flex flex-col mt-[11px]  md:gap-[14px] ">
                          <div className="flex items-center">
                            {childService && (
                              <div
                                className="flex flex-col gap-2 pb-4 text-justify text-white listpoint"
                                dangerouslySetInnerHTML={{
                                  __html: childService?.description,
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* side hire a expert div  */}
                  <div className="w-[30%] lg:px-4 z-40  md:absolute md:top-[100px] md:right-14   xl:right-4 2xl:right-28">
                    <div className="bg-primary rounded-md shadow-md w-[340px]  md:w-[355px] p-4 lg:fixed  ">
                      {finalData?.map((val: any, index: any) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col justify-center items-center"
                          >
                            <h2 className="text-white  text-[24px] font-medium text-center ">
                              Hire a Expert for
                            </h2>
                            <span className="text-white mb-4 text-[24px] font-medium text-center ">
                              {val?.text}
                            </span>
                          </div>
                        );
                      })}
                      <div className="flex flex-col gap-2 justify-center items-center px-2">
                        {serviceCategoryData?.map((val: any, i: number) => {
                          return (
                            <div className="flex relative w-full group" key={i}>
                              <div
                                key={val.value}
                                onClick={() => setComplainForm(true)}
                                className="hover:bg-gray-500 h-[20pxpx] cursor-pointer flex justify-between items-center px-4 py-[12px] bg-white w-full text-black rounded-md "
                              >
                                {val.text}
                                <SlArrowRight />
                              </div>

                              {/* <span
                                className="absolute top-[-12sma0%] left-1/2 px-1 m-4 mx-auto text-sm text-gray-100 bg-gray-800 rounded-md opacity-0 transition-opacity -translate-x-1/2 translate-y-full group-hover:opacity-100"
                              >
                                Tooltip
                              </span> */}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[1280px] mx-auto mt-[50px] px-[2px] ">
                    {finalData &&
                      finalData.map((val: any, index: any) => {
                        return (
                          <div
                            key={index}
                            className="flex text-justify md:w-[66%] flex-col gap-2"
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
        <ComplainForm />
      )}
    </div>
  );
};

export default ChildService;
