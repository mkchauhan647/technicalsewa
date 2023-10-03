import BlogCategorylist from "@/components/BlogCategorylist";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import BlogCard from "@/components/pageHelperComponents.js/BlogCard";
import { getTrainingCategoriesData } from "@/lib/api";
import Image from "next/image";
import React from "react";

const page = async () => {
  const blogs = await fetch(
    "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getblogdetails"
  );
  const blogsdata: [] = await blogs.json();

  const trainingCategories = await getTrainingCategoriesData();

  return (
    <>
      <Nav />
      <div className="bg-[#FBFBFB] py-4 px-2 md:px-0">
        <div className="container mx-auto xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <h3 className="text-[25px] md:text-[35px] text-black my-[10px] text-left font-bold">
            All Blogs
          </h3>
          <div className="flex flex-wrap space-y-2 md:justify-between">
            <div className="w-full md:basis-[81%]">
              <div className="grid gap-4 md:grid-cols-1">
                {blogsdata.map((blog, i) => (
                  <BlogCard key={i} blog={blog} />
                ))}
              </div>
            </div>
            <div className="w-full  md:basis-[15%] py-1 px-4 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
              <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
              <BlogCategorylist categories={trainingCategories} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

export async function generateMetadata() {
  // const seocontet = await fetch(
  //   "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/blogs"
  // );
  // const seocontetdata:[] = await seocontet.json();

  return {
    title: `Blog | Technical sewa`,
  };
}
