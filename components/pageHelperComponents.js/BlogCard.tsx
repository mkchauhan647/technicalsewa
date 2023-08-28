"use client";

import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  return (
    //     <div className='flex gap-4 rounded-[10px] border-[2px] border-gray-200 p-4'>
    //         <div className='basis-[10%] dark:text-black font-bold'>
    //             {blog.created_ts}
    //         </div>
    //         <div className='basis-[90%]'>
    //             <h3 className='dark:text-black font-bold text-[20px] mb-3 '>
    //                 {blog.blog_name}
    //             </h3>
    //             <div className='flex gap-4'>
    //                 <div className='basis-[40%] h-[150px]'>
    //                     <img className='object-cover w-full h-full' src={blog.filename.replace(
    //                     "https://smartcare.com.np/multiservice/",
    //                     "https://smartcare.com.np/multiservice/test/")} />
    //                 </div>

    //                 <div className='basis-[60%] gap-2'>
    //                     <div className='h-[100px] overflow-hidden' dangerouslySetInnerHTML={{__html:blog.blog_desc.split('\n')[0]}} ></div>
    //                     <Link href={`blogs/${blog.blog_name}`}> <button  className='p-3 text-white bg-black rounded'>Readmore</button> </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    <>
      <div className="flex gap-4 rounded-[10px] border-[2px] border-gray-200 p-4">
        <Link href={`/blogs/${blog.blog_id}`}>
          <div className="basis-[40%] h-[180px] hover:opacity-95">
            <img
              className="object-cover w-full h-full"
              src={blog.filename.replace(
                "https://smartcare.com.np/multiservice/",
                "https://smartcare.com.np/multiservice/test/"
              )}
            />
          </div>
        </Link>
        <div className="basis-[60%]">
          <Link href={`/blogs/${blog.blog_id}`}>
            <h3 className="hover:text-[#2591B2] font-bold text-[14px] md:text-[20px] mb-3 h-[40px] ">
              {blog.blog_name}
            </h3>
          </Link>
          <div className="h-[50px]"></div>
          {/* <div
            className="h-[50px] overflow-hidden text-black font-normal"
            dangerouslySetInnerHTML={{ __html: blog.blog_desc.split("\n")[0] }}
          ></div> */}
          <div className="pb-[10px] text-gray-500 font-bold">
            {blog.created_ts}
          </div>
          <Link href={`/blogs/${blog.blog_id}`}>
            <button className="p-2 hover:bg-[#2591B2] text-white bg-black rounded">
              Readmore
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
