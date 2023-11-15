import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import ChildService from "@/features/service/child-service/ChildService";
import { fetchServerClient, getSEOByPageURL } from "@/lib/api";
import React from "react";

const page = async () => {
  const data = await fetchServerClient(
    `/techsewa/masterconfig/publicmasterconfig/getSliderListpop`
  );

  return (
    <>
      <Nav />
      <ChildService data={data.brands} />
      <Footer />
    </>
  );
};

export default page;

export async function generateMetadata({ params }: any) {
  const slug = params.slug1;

  // fetch seo data for page based on slug
  const seoData = await getSEOByPageURL(
    `https://technicalsewa.com/service/${slug}/${params["child-service-slug"]}`
  );

  const seoExists = seoData?.content && !Array.isArray(seoData?.content);

  const seoContent = seoData?.content;
  if (seoExists) {
    return {
      title: `${
        seoExists ? seoContent?.page_title : `${slug} | Technical sewa`
      } `,
      description: `${seoContent?.description}`,
      keywords: `${seoContent?.key_words}`,
      openGraph: {
        title: `${
          seoExists ? seoContent?.og_title : `${slug} | Technical sewa`
        } `,
        ...(seoContent?.og_type ? {type: seoContent?.og_type}:{}),
        // type: seoContent?.og_type ?? "website",
        description: `${seoContent?.og_desc} `,
        url: seoContent?.og_url,
      },
    };
  }

  return {
    title: `${params.slug1} ${params["child-service-slug"]} | Technical sewa`,
  };
}
