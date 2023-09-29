import BlogCategorylist from "@/components/BlogCategorylist";
import Categorylist from "@/components/Categorylist";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import BlogCard from "@/components/pageHelperComponents.js/BlogCard";
import { getTrainingCategoriesData, getTrainings } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiGloves } from "react-icons/gi";
import { ImPhone } from "react-icons/im";
import { MdMasks, MdSanitizer } from "react-icons/md";
import { URLSearchParams } from "url";

const Page = async () => {
  const trainings = await getTrainings();

  const trainingCategories = await getTrainingCategoriesData();
  return (
    <>
      <Nav />
      <div className="bg-[#FBFBFB] py-4 px-2 md:px-0">
        <div className="container mx-auto xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <h3 className="text-[25px] md:text-[35px] text-black my-[10px] text-left font-bold">
            Trainings
          </h3>
          <div className="flex flex-wrap md:justify-between">
            <div className="w-full md:basis-[81%]">
              <div className="grid gap-4 md:grid-cols-1">
                {trainings.map((item: any, i: number) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-between flex-wrap gap-4 rounded-[10px] border-[2px] border-gray-200 p-4 items-center"
                    >
                      <div className="w-full md:basis-[25%] h-[160px] md:h-[120px] order-2 md:order-1">
                        <img
                          className="object-cover w-full h-full"
                          src={
                            item?.image_1 ??
                            item?.image_2 ??
                            "/assets/no-image.jpg"
                          }
                        />
                      </div>
                      <div className="w-full md:basis-[73%] order-1 md:order-2">
                        <Link
                          href={`/training/${item?.category}`}
                          className="  font-bold hover:text-[#2591B2] text-[19px] md:text-[27px] mb-3 h-[40px] "
                        >
                          {item?.training_title}
                        </Link>

                        <div className="h-[50px] overflow-hidden text-black font-normal">
                          {item?.short_detail}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* {blogsdata.map((blog, i) => (
                  <BlogCard key={i} blog={blog} />
                ))} */}
              </div>
            </div>
            <div className="w-full md:basis-[15%]">
              <div className="py-1 px-4 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
                <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
                <Categorylist categories={trainingCategories} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

export async function generateMetadata() {
  return {
    title: `Trainings | Technical sewa`,
  };
}
