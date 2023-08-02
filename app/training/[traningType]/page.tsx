import Nav from "@/components/Nav";
import { SEOBase } from "@/components/SEOBase";
import Footer from "@/components/footer/Footer";
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
  let trainingId = params.traningType;
  const data = await getData(trainingId);

  const pageTitle = `${data?.training_title} - Training`;
  return (
    <>
      <Head>
        <SEOBase title={pageTitle} />
        {/* Open Graph tags */}
        <meta property="og:title" content={`${data?.meta_title}`} />
        <meta
          property="og:description"
          content="This is the OG description for the page."
        />
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
      <div className="max-w-[1280px] py-8  mx-auto">
        {/* fridge training  */}
        <div>
          <div className="pb-8">
            <h2 className="mb-2 text-3xl font-bold">{data?.training_title}</h2>
            {data?.detail && (
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: data?.detail }}
              ></p>
            )}
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
