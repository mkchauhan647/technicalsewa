"use client"

import Link from 'next/link'
import React from 'react'

const BlogCard = ({blog}:any) => {

  return (
    <div className='flex gap-4 rounded-[10px] border-[2px] border-gray-200 p-4'>
        <div className='basis-[10%] dark:text-black font-bold'>
            {blog.created_ts}
        </div>
        <div className='basis-[90%]'>
            <h3 className='dark:text-black font-bold text-[20px] mb-3 '>
                {blog.blog_name}
            </h3>
            <div className='flex gap-4'>
                <div className='basis-[40%] h-[150px]'>
                    <img className='h-full w-full object-cover' src={blog.filename.replace(
                    "https://smartcare.com.np/multiservice/",
                    "https://smartcare.com.np/multiservice/test/")} />
                </div>
               
                <div className='basis-[60%] gap-2'>
                    <div className='h-[100px] overflow-hidden' dangerouslySetInnerHTML={{__html:blog.blog_desc.split('\n')[0]}} ></div>
                    <Link href={`blogs/${blog.blog_name}`}> <button  className='bg-black text-white rounded p-3'>Readmore</button> </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard

