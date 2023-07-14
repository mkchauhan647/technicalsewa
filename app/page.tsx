import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FooterContact from "@/components/footer/FooterContact";
import ApplicationRepair from "@/components/repair/ApplicationRepair";
import Categories from "@/components/repair/Categories";
import ElectricianPlumbers from "@/components/repair/ElectricianPlumbers";
import PopularBrands from "@/components/repair/PopularBrands";
import Warrantyproducts from "@/components/repair/Warrantyproducts";
import { baseUrl } from "../public/baseUrl";
import axios from "axios";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  const result = await axios.get(
    `${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop1`
  );
  const allBrands = result?.data?.brands;

  // dataa for ApplicationRepairData
  const applicationRepairData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Appliances Repair";
  });

  const popularBrandsData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Popular Brands";
  });

  const warrantyProductsData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Warranty Products";
  });

  const electiricianPlumbersData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Electrician & Plumber";
  });

  return (
    <>
    <Nav />
    <main>
      <HeroSection />
      <Categories allBrands={allBrands} />
      <ApplicationRepair applicationRepairData={applicationRepairData} />
      <PopularBrands popularBrandsData={popularBrandsData} />
      <Warrantyproducts warrantyProductsData={warrantyProductsData} />
      <ElectricianPlumbers electiricianPlumbersData={electiricianPlumbersData} />
      <WhyChooseUs />
      <FooterContact />
    </main>
    <Footer />
    </>
  );
}
