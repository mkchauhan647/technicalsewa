import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FooterContact from "@/components/footer/FooterContact";
import Categories from "@/components/repair/Categories";
import Number from "@/components/Number";
import MidContent from "@/features/home/MidContent";
import MidContent2 from "@/features/home/MidContent2";
import { fetchServerClient, getSEOByPageURL } from "@/lib/api";
import ServicesSLiders from "@/features/home/servicesSliders";
import ClientsSlider from "@/features/home/clients";
import Head from "next/head";

export default async function Home() {
  const result = await fetchServerClient(
    `techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
  );
  let allBrands = result?.brands;

  // allBrands?.sort((a: any, b: any) => +a?.brand_id - +b?.brand_id);
  allBrands?.sort((a: any, b: any) => +a?.ordering - +b?.ordering);

  const brands: { [key: string]: any }[] = [];

  allBrands.forEach((b: any) => {
    const brandExists = brands.findIndex((i) => i?.id === +b?.brand_id) !== -1;
    if (!brandExists) {
      brands.push({
        id: +b?.brand_id,
        name: b?.brand_name,
        order: +(b?.ordering || 0),
      });
    }
  });

  brands?.sort((a: any, b: any) => a?.order - b?.order);
  // ===============================

  // getConfiglist
  const configlist = await fetch(
    `https://www.technicalsewa.com/techsewa/masterconfig/publicmasterconfig/getConfigList`
  ).then((res) => res.json());

  return (
    <main>
      <HeroSection data={configlist} allBrands={allBrands} />
      <Categories allBrands={allBrands} />
      <ServicesSLiders brands={Array.from(brands)} data={allBrands} />
      <Number />
      <WhyChooseUs />
      <MidContent />
      <FooterContact />
      <MidContent2 />
      <ClientsSlider clients={configlist} />
    </main>
  );
}

export async function generateMetadata() {
  // fetch seo data for page based on slug
  const seoData = await getSEOByPageURL(`www.technicalsewa.com`);
  const seoExists = seoData?.content && !Array.isArray(seoData?.content);

  const seoContent = seoData?.content;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "technicalsewa",
    url: "www.technicalsewa.com",
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "Technical Sewa",
    },
  };


  if (seoExists) {
    return {
      title: `${seoContent?.page_title} `,
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
      schemaData,
    };
  }
}
