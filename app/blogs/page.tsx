import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import BlogCard from "@/components/pageHelperComponents.js/BlogCard";
import Image from "next/image";
import React from "react";
import { GiGloves } from "react-icons/gi";
import { ImPhone } from "react-icons/im";
import { MdMasks, MdSanitizer } from "react-icons/md";
import { URLSearchParams } from "url";

const page = async () => {
  const blogs = await fetch(
    "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getblogdetails"
  );
  const blogsdata: [] = await blogs.json();
  const categories = [
    {
      name: "Company News",
      number: "36",
    },
    {
      name: "cPanel",
      number: "2",
    },
    {
      name: "Domains",
      number: "1",
    },
    {
      name: "Hosting",
      number: "130",
    },
    {
      name: "Interviews",
      number: "1",
    },
    {
      name: "Linux",
      number: "2",
    },
    {
      name: "Marketing",
      number: "2",
    },
    {
      name: "Search Engine Optimization",
      number: "2",
    },
    {
      name: "Security",
      number: "32",
    },
    {
      name: "Server Optimization",
      number: "5",
    },
    {
      name: "Software",
      number: "4",
    },
    {
      name: "Uncategorized",
      number: "2",
    },
    {
      name: "Web Development",
      number: "7",
    },
    {
      name: "Windows",
      number: "1",
    },
    {
      name: "WordPress",
      number: "11",
    },
  ];
  return (
    <>
      <Nav />
      <div className="bg-[#FBFBFB] py-4 px-2 md:px-0">
        <div className="container mx-auto xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <h3 className="text-[25px] md:text-[35px] text-black my-[10px] text-left font-bold">
            All Blogs
          </h3>
          <div className="flex md:justify-between flex-wrap  ">
            <div className="w-full md:basis-[60%]">
              <div className="grid gap-4 md:grid-cols-1">
                {blogsdata.map((blog) => (
                  <BlogCard blog={blog} />
                ))}
              </div>
            </div>
            <div className="w-full  md:basis-[35%] py-12 px-10 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
              <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
              {categories.map((cat: any, index: number) => (
                <div
                  key={index}
                  className="flex  items-center justify-between py-5 border-b-[1px] border-solid border-[#3d4145]"
                >
                  <h3 className=" text-[base]">{cat.name}</h3>
                  <div className="rounded-full hover:bg-[#2591B2] bg-gray-400 w-[30px] h-[30px] flex items-center justify-center">
                    <h3 className="text-center">{cat.number}</h3>
                  </div>
                </div>
              ))}
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
