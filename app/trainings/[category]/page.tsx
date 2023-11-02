/* eslint-disable @next/next/no-img-element */
import TrainingCategorylist from "@/components/Categorylist";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import { fetchServerClient, getTrainingCategoriesData } from "@/lib/api";
import { baseUrl } from "@/public/baseUrl";
import Link from "next/link";
import React from "react";
async function getData(id: string) {
  const formData = new FormData();
  formData.append("id", id);

  const res = await fetch(
    `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/gettrainingDetails`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function TrainingCategoryPage({ params }: any) {
  const categorySlug = params.category;

  const trainingCats = await fetchServerClient(
    "/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories"
  );
  const finddata = trainingCats.find(
    (i: any) => i?.text?.replace(" ", "-").toLowerCase() === categorySlug
  );

  // all trainigs posts by cat id
  const data = await getData(finddata?.value);

  const trainingCategories = await getTrainingCategoriesData();

  return (
    <>
      <Nav />

      <div className="bg-[#FBFBFB] py-4 px-2 md:px-0">
        <div className="container mx-auto xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <h3 className="text-[25px] md:text-[35px] text-black my-[10px] text-left font-bold">
            Trainings
          </h3>
          <div className="flex flex-wrap md:justify-between mb-[36px]">
            <div className="w-full md:basis-[78%]">
              <div className="grid gap-4 md:grid-cols-1">
                {data?.map((item: any, i: number) => {
                  const slug = item?.training_title
                    ?.toLowerCase()
                    .replace(/[^a-zA-Z0-9\s]/g, "-") // Replace special characters with -
                    .replace(/\s+/g, "-");
                  return (
                    <div
                      key={i}
                      className="flex justify-between flex-wrap gap-4 rounded-[10px] border-[2px] border-gray-200 p-4 items-center"
                    >
                      <div className="w-full md:basis-[25%] h-[160px] md:h-[120px] order-2 md:order-1">
                        <img
                          className="object-cover w-full h-full"
                          src={
                            item?.image_1 ??
                            item?.image_2 ??
                            "/assets/no-image.jpg"
                          }
                        />
                      </div>
                      <div className="w-full md:basis-[73%] order-1 md:order-2">
                        <Link
                          href={`/training/${slug}/${item?.id}`}
                          className="  font-bold hover:text-primary text-[19px] md:text-[27px] mb-3 h-[40px] "
                        >
                          {item?.training_title}
                        </Link>

                        <div className="h-[50px] overflow-hidden text-black font-normal">
                          {item?.short_detail}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {(!data || data?.length < 1) && (
                  <div className="text-lg font-medium">
                    No any trainings found
                  </div>
                )}
              </div>
            </div>
            <div className="w-full md:basis-[19%]">
              <div className="py-1 px-4 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
                <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
                <TrainingCategorylist categories={trainingCategories} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
