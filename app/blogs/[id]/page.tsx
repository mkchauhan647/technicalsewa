import BlogCategorylist from "@/components/BlogCategorylist";
import Nav from "@/components/Nav";
import { SEOBase } from "@/components/SEOBase";
import Footer from "@/components/footer/Footer";
import { getBlogDataById, getTrainingCategoriesData } from "@/lib/api";
import Head from "next/head";
import React from "react";

const page = async ({ params }: any) => {
  let blogId = params.id;

  const blogData = await getBlogDataById(blogId);

  const data = blogData?.[0] || blogData;

  const trainingCategories = await getTrainingCategoriesData();

  const pageTitle = `${data?.blog_name} - Blog`;
  return (
    <>
      <Head>
        <SEOBase title={pageTitle} />
        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle}`} />

        <meta
          property="og:image"
          content={data?.filename ? data?.filename : "/favicon.ico"}
        />
        <meta
          property="og:url"
          content={`https://technicalsewa.com/blogs/${data?.blog_id}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content=" technicalsewa.com Repair Services on Demand "
        />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Nav />
      <div className="container flex justify-center py-6 mx-auto">
        <div className="max-w-[1200px]">
          <div className="flex flex-wrap gap-[30px] md:gap-0  md:justify-between pb-8">
            <div className="w-full md:basis-[79%]">
              <h1 className="text-[30px] mb-2 font-bold">{data?.blog_name}</h1>
              {data?.filename && (
                <div className="w-full h-[600px]">
                  <img
                    className="object-cover w-full h-full"
                    src={data.filename}
                  />
                </div>
              )}
              {data?.blog_desc && (
                <div
                  className="mt-6"
                  dangerouslySetInnerHTML={{ __html: data?.blog_desc }}
                ></div>
              )}
            </div>
            <div className="w-full md:basis-[15%]">
              <div className="py-12 px-10 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
                <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
                <BlogCategorylist categories={trainingCategories} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

// export async function generateMetadata() {
//   // const seocontet = await fetch(
//   //   "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/blogs"
//   // );
//   // const seocontetdata:[] = await seocontet.json();

//   return {
//     title: `SingleBlog | Technical sewa`,
//   };
// }
