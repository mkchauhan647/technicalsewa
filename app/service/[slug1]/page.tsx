import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import ServiceSlug1 from "@/components/pageHelperComponents.js/ServiceSlug1";
import { fetchServerClient, getSEOByPageURL } from "@/lib/api";
import React from "react";

const page = async ({ params }: any) => {
  const slug = params.slug1;

  const data = await fetchServerClient(
    `/techsewa/masterconfig/publicmasterconfig/getSliderListpop`
  );

   // fetch seo data for page based on slug
   const seoData = await getSEOByPageURL(`/service/${slug}`);

   const seoExists = seoData?.content && !Array.isArray(seoData?.content);
 
   const seoContent = seoData?.content;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://technicalsewa.com/service/${slug}`,
    },
    headline: seoContent?.key_words,
    description: seoContent?.description,
    image: seoContent?.image,
    author: {
      "@type": "Organization",
      name: "Technical Sewa",
      url: "https://technicalsewa.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Technical Sewa",
      logo: {
        "@type": "ImageObject",
        url: seoContent?.image,
      },
    },
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <ServiceSlug1 data={data.brands} />
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://technicalsewa.com/service/${slug}`,
    },
    headline: seoExists ? seoContent?.og_title : `${slug} | Technical sewa`,
    description: seoContent?.description,
    image: seoContent?.image,
    author: {
      "@type": "Organization",
      name: "Technical Sewa",
      url: "https://technicalsewa.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Technical Sewa",
      logo: {
        "@type": "ImageObject",
        url: seoContent?.image,
      },
    },
  };

  if (seoExists) {
    return {
      title: `${
        seoExists ? seoContent?.page_title : `${slug} | Technical sewa`
      } `,
      description: `${seoContent?.description}`,
      keywords: `${seoContent?.key_words}`,
      openGraph: {
        title: `${seoContent?.og_title} `,
        description: `${seoContent?.og_desc} `,
        url: seoContent?.og_url,
        image: seoContent.image || `/default-og-image.png`,
        type: seoContent.og_type,
      },
      link: [
        {
          rel: "apple-touch-icon",
          type: "image/x-icon",
          sizes: "180x180",
          href: `${seoContent.image}`,
        },
      ],
      other: {
        "application/ld+json": JSON.stringify(schemaData),
      },
    };
  }

  return {
    title: `${slug} | Technical sewa`,
  };
}
