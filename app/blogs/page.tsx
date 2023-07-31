import Nav from '@/components/Nav'
import Footer from '@/components/footer/Footer'
import BlogCard from '@/components/pageHelperComponents.js/BlogCard'
import Image from 'next/image'
import React from 'react'
import { GiGloves } from 'react-icons/gi'
import { ImPhone } from 'react-icons/im'
import { MdMasks, MdSanitizer } from 'react-icons/md'
import { URLSearchParams } from 'url'

const page =async () => {
  const blogs = await fetch(
    "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getblogdetails"
  );
  const blogsdata:[] = await blogs.json();

  return (
    <>
    <Nav />
    <div className="bg-[#FBFBFB] py-4">
      <div className="container mx-auto xl:w-[80rem] sm:w-full  sm-w-full m-auto">
       
        <h3 className="text-[25px] md:text-[35px] text-black my-[10px] text-left font-bold">
          All Blogs
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {blogsdata.map((blog)=>(
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default page

export async function generateMetadata(){
  // const seocontet = await fetch(
  //   "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/blogs"
  // );
  // const seocontetdata:[] = await seocontet.json();

  return{
    title:`Blog | Technical sewa`
  }
}