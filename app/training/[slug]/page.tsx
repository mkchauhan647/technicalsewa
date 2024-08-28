import TrainingCategorylist from "@/components/Categorylist";
import Nav from "@/components/Nav";
import { SEOBase } from "@/components/SEOBase";
import Footer from "@/components/footer/Footer";
import {
  fetchServerClient,
  getSEOByPageURL,
  getTrainingCategoriesData,
} from "@/lib/api";
import { baseUrl } from "@/public/baseUrl";
import { redirect } from "next/navigation";
import React from "react";
async function getData(id: string) {
  const formData = new FormData();
  formData.append("training_id", id);

  console.log("training_id ? ", id);

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
  const trainingId = params.slug;

  // console.log("trainingId", trainingId);
  // console.log("params", params);

  const data1 = await fetchServerClient(
    "/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories"
  );

  let data = await getData(trainingId);
  data = data?.[0] || data;

  if (!data || (Array.isArray(data) && data.length === 0)) {
    redirect("/");
  }

  const finddata = data1.find((i: any) => +i?.value === +trainingId);

  const trainingCategories = await getTrainingCategoriesData();

  return (
    <>
      <div className="max-w-[1280px] py-8  mx-auto md:px-0 px-[10px]">
        {/* fridge training  */}
        <div className="flex flex-wrap gap-[30px] md:gap-0  md:justify-between pb-8">
          <div className="w-full md:basis-[78%]">
            <h2 className="mb-2 text-2xl font-bold pb-[10px]">
              {data?.training_title}
            </h2>
            {data?.video_link && (
                <div className="lg:float-right lg:w-[30rem] mt-6 max-md:w-full p-1">
                  <div className="border-primary border-opacity-60 p-0.5 rounded-md border overflow-hidden">
                    <iframe
                      className="w-full rounded-md"
                      height="300"
                      src={`https://www.youtube.com/embed/${data?.video_link?.replace(
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
                style={{ color: "black" }}
                className="trainingdescription"
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
          <div className="w-full md:basis-[19%]">
            <div className="py-1 px-4 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
              <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
              <TrainingCategorylist
                categories={trainingCategories}
                activeId={finddata}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

export async function generateMetadata({ params }: any) {
  const trainingSlug = params.slug;

  // fetch seo data for page based on slug
  const seoData = await getSEOByPageURL(`/training/${trainingSlug}`);

  const seoExists = seoData?.content && !Array.isArray(seoData?.content);

  const seoContent = seoData?.content;

  if (seoExists) {
    return {
      title: `${
        seoExists ? seoContent?.page_title : "Training | Technical sewa"
      } `,
      description: `${seoContent?.description}`,
      keywords: `${seoContent?.key_words}`,
      openGraph: {
        title: `${
          seoExists ? seoContent?.page_title : "Training | Technical sewa"
        } `,
        description: `${seoContent?.description} `,
        url: seoContent?.page_url,
        type: "website",
      },
    };
  }

  return {
    title: `${trainingSlug} - Training | Technical sewa`,
  };
}
