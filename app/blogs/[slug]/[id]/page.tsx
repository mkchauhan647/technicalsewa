import BlogCategorylist from "@/components/BlogCategorylist";
import Nav from "@/components/Nav";
import { SEOBase } from "@/components/SEOBase";
import Footer from "@/components/footer/Footer";
import {
  getBlogDataById,
  getSEOByPageURL,
  getTrainingCategoriesData,
} from "@/lib/api";
import Head from "next/head";
import React from "react";

const page = async ({ params }: any) => {
  const title = params.slug;
  const blogId = params.id;
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
      <div className="container flex justify-center py-6 mx-auto px-[10px] md:px-[0px]">
        <div className="max-w-[1200px]">
          <div className="flex flex-wrap gap-[30px] md:gap-0  md:justify-between pb-8">
            <div className="w-full md:basis-[79%]">
              <h1 className="text-[30px] mb-2 font-bold">{data?.blog_name}</h1>
              {data?.filename && (
                <div className="w-[100%] h-[281px] md:h-[340px]">
                  <img
                    className="object-cover w-full h-full"
                    src={data.filename}
                  />
                </div>
              )}
              {data?.blog_desc && (
                <div
                  className="mt-6 blogdesc"
                  dangerouslySetInnerHTML={{ __html: data?.blog_desc }}
                ></div>
              )}
            </div>
            <div className="w-full md:basis-[15%]">
              <div className="py-1 px-4 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
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

export async function generateMetadata({ params }: any) {
  const slug = params.slug;
  const blogId = params.blogId;

  // fetch seo data for page based on slug
  const seoData = await getSEOByPageURL(
    `https://technicalsewa.com/blogs/${slug}/${blogId}`
  );

  const seoExists = seoData?.content && !Array.isArray(seoData?.content);

  const seoContent = seoData?.content;

  if (seoExists) {
    return {
      title: `${seoExists ? seoContent?.page_title : "Blog | Technical sewa"} `,
      description: `${seoContent?.description}`,
      keywords: `${seoContent?.key_words}`,
      openGraph: {
        title: `${
          seoExists ? seoContent?.page_title : "Blog | Technical sewa"
        } `,
        description: `${seoContent?.description} `,
        url: seoContent?.page_url,
        type: "website",
      },
    };
  }

  return {
    title: `Technical sewa`,
  };
}
