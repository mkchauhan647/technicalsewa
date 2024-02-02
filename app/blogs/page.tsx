import BlogCategorylist from "@/components/BlogCategorylist";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import BlogCard from "@/components/pageHelperComponents.js/BlogCard";
import {
  fetchServerClient,
  getSEOByPageURL,
  getTrainingCategoriesData,
} from "@/lib/api";
import React from "react";
const page = async () => {
  const blogs: any = await fetchServerClient(
    "/techsewa/publiccontrol/publicmasterconfig/getblogdetails"
  );

  blogs?.sort(
    (a: any, b: any) =>
      new Date(b?.created_ts).getTime() - new Date(a?.created_ts).getTime()
  );

  const trainingCategories = await getTrainingCategoriesData();
  return (
    <>
      <Nav />
      <div className="bg-[#FBFBFB] py-[10px] px-2 md:px-0">
        <div className="container mx-auto xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <h3 className="text-[25px] md:text-[30px] text-black my-[5px] text-left font-bold">
            All Blogs
          </h3>
          <div className="flex flex-wrap space-y-2 md:justify-between mb-[36px]">
            <div className="w-full md:basis-[81%]">
              <div className="grid gap-4 md:grid-cols-1">
                {blogs?.map((blog: any, i: number) => (
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
  // fetch seo data for page based on slug
  const seoData = await getSEOByPageURL(`/blogs`);

  const seoExists = seoData?.content && !Array.isArray(seoData?.content);

  const seoContent = seoData?.content;

  if (seoExists) {
    return {
      title: `${
        seoExists ? seoContent?.page_title : "Blogs | Technical sewa"
      } `,
      description: `${seoContent?.description}`,
      keywords: `${seoContent?.key_words}`,
      openGraph: {
        title: `${
          seoExists ? seoContent?.og_title : "Blogs | Technical sewa"
        } `,
        // ...(seoContent?.og_type ? {type: seoContent?.og_type}:{}),
        type: "website",
        description: `${seoContent?.og_desc} `,
        url: seoContent?.og_url,
      },
    };
  }

  return {
    title: `Blogs | Technical sewa`,
  };
}
