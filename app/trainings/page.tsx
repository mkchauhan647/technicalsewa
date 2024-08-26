import Categorylist from "@/components/Categorylist";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import { getTrainingCategoriesData, getTrainings } from "@/lib/api";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const trainings = await getTrainings();

  // console.log('trainings', trainings);

  trainings?.sort(
    (a: any, b: any) =>
      new Date(b?.created_date).getTime() - new Date(a?.created_date).getTime()
  );

  const trainingCategories = await getTrainingCategoriesData();
  return (
    <>
      <div className="bg-[#FBFBFB] py-4 px-2 md:px-0">
        <div className="container mx-auto xl:w-[80rem] sm:w-full  sm-w-full m-auto">
          <h3 className="text-[25px] md:text-[35px] text-black my-[10px] text-left font-bold">
            Trainings
          </h3>
          <div className="flex flex-wrap md:justify-between mb-[36px]">
            <div className="w-full md:basis-[81%]">
              <div className="grid gap-4 md:grid-cols-1">
                {trainings.map((item: any, i: number) => {
                  // console.log("item",item.training_title);
                  const slug = item?.training_title
                    ?.toLowerCase().replace(/[|,-]/g,' ').split(" ").filter((p:string) => p.length > 0).join("-")
                    // .replace(/[^a-zA-Z0-9\s]/g, "-") // Replace special characters with -
                  // .replace(/\s+/g, "-");
                  // console.log("slug", slug);
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
                        <a
                          href={`/training/${slug}/${item?.training_id}`}
                          className="  font-bold hover:text-primary text-[19px] md:text-[27px] mb-3 h-[40px] "
                        >
                          {item?.training_title}
                        </a>

                        <div className="h-[50px] overflow-hidden text-black font-normal">
                          {item?.short_detail}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {(!trainings || trainings?.length < 1) && (
                  <div className="text-base font-medium">
                    No any trainings found
                  </div>
                )}
              </div>
            </div>
            <div className="w-full md:basis-[15%]">
              <div className="py-1 px-4 rounded-[10px] border-[2px] border-gray-200 text-[#3d4145] font-normal">
                <h2 className="text-[24px] leading-[29px] pb-3">CATEGORIES</h2>
                <Categorylist categories={trainingCategories} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

export async function generateMetadata() {
  return {
    title: `Trainings | Technical sewa`,
  };
}
