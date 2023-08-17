import BlogCategorylist from "@/components/BlogCategorylist";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import BlogCard from "@/components/pageHelperComponents.js/BlogCard";
import { getTrainingCategoriesData } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiGloves } from "react-icons/gi";
import { ImPhone } from "react-icons/im";
import { MdMasks, MdSanitizer } from "react-icons/md";
import { URLSearchParams } from "url";

const Page = async () => {
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
            <div className="w-full md:basis-[60%]">
              <div className="grid gap-4 md:grid-cols-1">
                {trainingCategories.map((item: any, i: number) => {
                  return (
                    <div
                      key={i}
                      className="flex gap-4 rounded-[10px] border-[2px] border-gray-200 p-4 items-center"
                    >
                      <div className="basis-[25%] h-[120px]">
                        <img
                          className="object-cover w-full h-full"
                          src={item?.image ?? "/assets/no-image.jpg"}
                        />
                      </div>
                      <div className="basis-[60%]">
                        <Link
                          href={`/training/${item?.value}`}
                          className="font-bold hover:text-[#2591B2] text-[14px] md:text-[20px] mb-3 h-[40px] "
                        >
                          {item?.text}
                        </Link>

                        <div className="h-[50px] overflow-hidden text-black font-normal">
                          {item?.desc}
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
