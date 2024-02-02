import BlogCategorylist from "@/components/BlogCategorylist";
import Nav from "@/components/Nav";
import { SEOBase } from "@/components/SEOBase";
import Footer from "@/components/footer/Footer";
import {
  getBlogDataById,
  getSEOByPageURL,
  getTrainingCategoriesData,
} from "@/lib/api";
import React from "react";
import { redirect } from "next/navigation";

const page = async ({ params }: any) => {
  const title = params.slug;
  const blogId = params.id;
  const blogData = await getBlogDataById(blogId);
  const data = blogData?.[0] || blogData;

  if (!data || (Array.isArray(data) && data.length === 0)) {
    redirect("/");
  }

  const trainingCategories = await getTrainingCategoriesData();

  return (
    <>
      <Nav />
      <div className="container flex justify-center py-6 mx-auto px-[10px] md:px-[0px]">
        <div className="max-w-[1200px] w-full">
          <div className="flex flex-wrap gap-[30px] md:gap-0  md:justify-between pb-8">
            <div className="w-full md:basis-[78%]">
              <h1 className="text-[30px] mb-2 font-bold">{data?.blog_name}</h1>
              {/* {data?.filename && (
                <div className="border-primary rounded-md border border-opacity-60 p-0.5">
                  <div className="w-[100%] rounded-md h-[281px] md:h-[340px] overflow-hidden">
                    <img
                      className="object-cover w-full h-full rounded-md"
                      src={data.filename}
                    />
                  </div>
                </div>
              )} */}
              {data?.youtube && (
                <div className="lg:float-right lg:w-[30rem] mt-6 max-md:w-full p-1">
                  <div className="border-primary border-opacity-60 p-0.5 rounded-md border overflow-hidden">
                    <iframe
                      className="w-full rounded-md"
                      height="300"
                      src={`https://www.youtube.com/embed/${data?.youtube?.replace(
                        "https://www.youtube.com/watch?v=",
                        ""
                      )}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
              {data?.blog_desc && (
                <div
                  className="mt-6 blogdesc"
                  dangerouslySetInnerHTML={{ __html: data?.blog_desc }}
                ></div>
              )}
            </div>
            <div className="w-full md:basis-[19%]">
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
  const seoData = await getSEOByPageURL(`/blogs/${slug}/${blogId}`);

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
    title: `Blog | Technical sewa`,
  };
}
