"use client";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  const slug = blog?.page_url
    ?.toLowerCase().trim()
    .replace(/[^a-zA-Z0-9-\s]/g, "") // Replace special characters with -
    .replace(/\s+/g, "-");
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
    //                     "https://www.technicalsewa.com/multiservice/",
    //                     "https://www.technicalsewa.com/multiservice/test/")} />
    //                 </div>

    //                 <div className='basis-[60%] gap-2'>
    //                     <div className='h-[100px] overflow-hidden' dangerouslySetInnerHTML={{__html:blog.blog_desc.split('\n')[0]}} ></div>
    //                     <Link href={`blogs/${blog.blog_name}`}> <button  className='p-3 text-white bg-black rounded'>Readmore</button> </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    <>
      <div className="flex flex-wrap gap-2 md:gap-0 md:justify-between rounded-[10px] border-[2px] border-gray-200 p-4">
        <div className="w-full md:basis-[40%]  h-[180px] hover:opacity-95 order-2 md:order-1">
          {/* <a href={`/blog/${slug}/${blog?.blog_id}`} className="w-full h-full"> */}
          <a href={`/blog/${slug}`} className="w-full h-full">
            <img
              className="object-contain w-full h-full"
              src={blog?.filename?.replace(
                "https://www.technicalsewa.com/multiservice/",
                "https://www.technicalsewa.com/multiservice/test/"
              )}
            />
          </a>
        </div>

        <div className="w-full md:basis-[54%] order-1 md:order-2">
          <a
            // href={`/blogs/${blog.blog_name.replaceAll(" ", "-").toLowerCase()}`}
            href={`/blog/${slug}`}
          >
            <div className="md:pb-[3px] text-gray-500 font-bold">
              {blog?.created_ts}
            </div>
            <h3 className="hover:text-primary font-bold text-[19px] md:text-[25px] mb-2 h-[40px] ">
              {blog?.blog_name}
            </h3>
          </a>

          <div
            className="mt-[21px] md:mt-[44px] overflow-hidden text-black font-normal"
            dangerouslySetInnerHTML={{ __html: blog?.short_content }}
          ></div>

          {/* <Link
            href={`/blogs/${blog?.blog_name
              .replaceAll(" ", "-")
              .toLowerCase()}/${blog?.blog_id}`}
          >
            <button className="p-2 text-white bg-black rounded hover:bg-primary">
              Readmore
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};
export default BlogCard;
