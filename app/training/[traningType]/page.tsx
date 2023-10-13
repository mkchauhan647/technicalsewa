import Categorylist from "@/components/Categorylist";
import Nav from "@/components/Nav";
import { SEOBase } from "@/components/SEOBase";
import Footer from "@/components/footer/Footer";
import { getTrainingCategoriesData } from "@/lib/api";
import { baseUrl } from "@/public/baseUrl";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
async function getData(id: string) {
  const formData = new FormData();
  formData.append("id", id);

  const res = await fetch(
    `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/gettrainingDetails`,
    {
      method: "POST",
      body: formData,
      headers: {
        "Cache-Control": `max-age=${2 * 60}`, // max 2 min cache
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async ({ params }: any) => {
  let trainingSlug = params.traningType;
  const res1 = await fetch(
    "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories"
  );
  const data2 = await res1.json();
  const finddata = data2.find(
    (i: any) => i?.text?.replace(" ", "-").toLowerCase() === trainingSlug
  );

  // fetch all the categories
  // find category id by matching slug/name

  const trainingId = 1;

  let data = await getData(finddata?.value);
  data = data?.[0] || data;

  const trainingCategories = await getTrainingCategoriesData();

  const pageTitle = `${data?.training_title} - Training`;

  return (
    <>
      <Head>
        <SEOBase title={pageTitle} />
        {/* Open Graph tags */}
        <meta property="og:title" content={`${data?.meta_title}`} />
        <meta property="og:description" content={`${data?.meta_desc}`} />
        <meta
          property="og:image"
          content={data?.image_1 ? data?.image_1 : "/favicon.ico"}
        />
        <meta
          property="og:url"
          content={`https://technicalsewa.com/training/${trainingId}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content=" technicalsewa.com Repair Services on Demand "
        />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Nav />
      <div className="max-w-[1280px] py-8  mx-auto md:px-0 px-[10px]">
        {/* fridge training  */}
        <div className="flex flex-wrap gap-[30px] md:gap-0  md:justify-between pb-8">
          <div className="w-full md:basis-[81%]">
            <h2 className="mb-2 text-2xl font-bold pb-[10px]">
              {data?.training_title}
            </h2>
            {data?.image_1 && (
              <div className="w-full h-[500px] cursor-pointer mb-[10px]">
                <img
                  src={data?.image_1}
                  alt={`${data?.training_title} image #1}`}
                  className="object-fill w-full h-full"
                />
              </div>
            )}
            {data?.detail && (
              <div
                className="blogdesc"
                dangerouslySetInnerHTML={{ __html: data?.detail }}
              ></div>
            )}
            {data?.image_2 && (
              <div className="w-full h-[500px] cursor-pointer mb-[10px]">
                <img
                  src={data?.image_2}
                  alt={`${data?.training_title} image #2}`}
                  className="object-fill w-full h-full"
                />
              </div>
            )}
          </div>
          <div className="w-full md:basis-[15%]">
            <div className="py-1 px-4 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
              <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
              <Categorylist
                categories={trainingCategories}
                activeId={finddata}
              />
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
    title: `Training | Technical sewa`,
  };
}
