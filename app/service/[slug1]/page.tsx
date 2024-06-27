import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import ServiceSlug1 from "@/components/pageHelperComponents.js/ServiceSlug1";
import { fetchServerClient, getSEOByPageURL } from "@/lib/api";
import React from "react";

const page = async () => {
  const data = await fetchServerClient(
    `/techsewa/masterconfig/publicmasterconfig/getSliderListpop`
  );

  return (
    <>
      <Nav />
      <ServiceSlug1 data={data.brands} />
      <Footer />
    </>
  );
};

export default page;

export async function generateMetadata({ params }: any) {
  const slug = params.slug1;

  // fetch seo data for page based on slug
  const seoData = await getSEOByPageURL(`/service/${slug}`);

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
        // ...(seoContent?.og_type ? {type: seoContent?.og_type}:{}),
        type: "website",
        description: `${seoContent?.og_desc} `,
        url: seoContent?.og_url,
      },
    };
  }

  return {
    title: `${slug} | Technical sewa`,
  };
}
