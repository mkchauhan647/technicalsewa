import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FooterContact from "@/components/footer/FooterContact";
import Categories from "@/components/repair/Categories";

import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import Number from "@/components/Number";
import MidContent from "@/features/home/MidContent";
import MidContent2 from "@/features/home/MidContent2";
import { fetchServerClient, getSEOByPageURL } from "@/lib/api";
import ServicesSLiders from "@/features/home/servicesSliders";
import ClientsSlider from "@/features/home/clients";

export default async function Home() {
  const result = await fetchServerClient(
    `/techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
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

  return (
    <>
      {/* <Nav /> */}
      <main>
        <HeroSection />
        <Categories allBrands={allBrands} />
        <ServicesSLiders brands={Array.from(brands)} data={allBrands} />

        {/*
        <MedicalEquipment medicalEquipmentData={medicalEquipmentData} /> 
        <ElectricianPlumbers
          computerPrinterData={computerPrinterData}
          electiricianPlumbersData={electiricianPlumbersData}
        />
        */}

        <Number />
        <WhyChooseUs />
        <MidContent />
        <FooterContact />
        <MidContent2 />
        <ClientsSlider />
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata() {
  // fetch seo data for page based on slug
  const seoData = await getSEOByPageURL(`https://technicalsewa.com`);

  const seoExists = seoData?.content && !Array.isArray(seoData?.content);

  const seoContent = seoData?.content;

  if (seoExists) {
    return {
      title: `${seoExists ? seoContent?.page_title : "Technical sewa"} `,
      description: `${seoContent?.description}`,
      keywords: `${seoContent?.key_words}`,
      openGraph: {
        title: `${seoExists ? seoContent?.page_title : "Technical sewa"} `,
        description: `${seoContent?.description} `,
        url: seoContent?.page_url,
        type: "website",
      },
    };
  }

  return {
    title: `Technical sewa`,
    description:
      "Welcome to Technical Sewa, a one-stop-shop for all of electronic repair needs. We specialize in repairing a wide range of appliances. ",
    keywords:
      "technicalsewa, Technicalsewa and solution, Appliances Repair, popular Brands, Warranty Products, Electrician & Plumber, Air-Purifier/Humidifier, Mobiles & Tabs, cctv Repair Service, Computer/Printer, Medical Equipment, Drone Repair, Carpenter Service, Cleaning & Pest Control",
    openGraph: {
      title: "Training | Technical sewa",
      description:
        "Welcome to Technical Sewa, a one-stop-shop for all of electronic repair needs. We specialize in repairing a wide range of appliances. ",
      url: "https://technicalsewa.com",
      type: "website",
    },
  };
}
