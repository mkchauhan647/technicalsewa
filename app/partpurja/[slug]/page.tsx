import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import PartPurjaSlug1 from "@/components/pageHelperComponents.js/PartPurjaSlug1";
import { getSEOByPageURL } from "@/lib/api";
import { baseUrl } from "@/public/baseUrl";
import React, { useEffect } from "react";

async function getData(id: string) {
  const formData = new FormData();
  formData.append("id", id);

  const res = await fetch(
    `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getfeaturedDetailsbyid`,
    {
      method: "POST",
      body: formData,
      headers: {
        "Cache-Control": `max-age=${2 * 60}`, // max 2 min cache
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

const page = async ({ params }: any) => {
  const slug = `${params.slug}`;
  let data = await getData(slug?.toLowerCase());

  return (
    <>
      <Nav />
      <PartPurjaSlug1 slug={slug} data={data} />
      <Footer />
    </>
  );
};

export default page;

export async function generateMetadata({ params }: any) {
  const trainingSlug = params.slug;

  // fetch seo data for page based on slug
  const seoData = await getSEOByPageURL(
    `https://technicalsewa.com/part-purja/${trainingSlug}`
  );

  const seoExists = seoData?.content && !Array.isArray(seoData?.content);

  const seoContent = seoData?.content;

  if (seoExists) {
    return {
      title: `${
        seoExists ? seoContent?.page_title : "Part Purja | Technical sewa"
      } `,
      description: `${seoContent?.description}`,
      keywords: `${seoContent?.key_words}`,
      openGraph: {
        title: `${
          seoExists ? seoContent?.og_title : "art Purja | Technical sewa"
        } `,
        type: `${seoContent?.og_type}`,
        description: `${seoContent?.og_desc} `,
        url: seoContent?.og_url,
      },
    };
  }

  return {
    title: `${trainingSlug} - Part Purja | Technical sewa`,
  };
}
