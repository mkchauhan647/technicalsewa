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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Technical Sewa",
    address: "Kumaripati, Lalitpur, Near Bluebird Collage, Nepal",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "12",
      "reviewCount": "4"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.6701114",
      "longitude": "85.3198698"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      validFrom: "2022-01-01T00:00:00.000Z",
      validThrough: "2024-01-01T00:00:00.000Z",
      opens: "10:00",
      closes: "19:00",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sunday",
      ],
    },
    telephone: "9851201580",
    priceRange: "$",
    url: "www.technicalsewa.com",
  };

  return (
    <main>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <HeroSection data={configlist} allBrands={allBrands} />
      <Categories allBrands={allBrands} />
      <ServicesSLiders brands={Array.from(brands)} data={allBrands} />
      <Number />
      {/* <WhyChooseUs /> */}
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
    };
  }
}
