import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FooterContact from "@/components/footer/FooterContact";
import ApplicationRepair from "@/components/repair/ApplicationRepair";
import Categories from "@/components/repair/Categories";
import ElectricianPlumbers from "@/components/repair/ElectricianPlumbers";
import PopularBrands from "@/components/repair/PopularBrands";
import Warrantyproducts from "@/components/repair/Warrantyproducts";
import { baseUrl } from "./otherItem/baseUrl";
import axios from "axios";

export default async function Home() {
  const result = await axios.get(
    `${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop1`
  );
  const allBrands = result?.data?.brands;
  console.log(allBrands);

  // dataa for ApplicationRepairData
  const applicationRepairData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Appliances Repair";
  });
  console.log(applicationRepairData);

  const popularBrandsData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Popular Brands";
  });
  console.log(popularBrandsData);

  const warrantyProductsData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Warranty Products";
  });
  console.log(warrantyProductsData);

  const electiricianPlumbersData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Electrician & Plumber";
  });
  console.log(electiricianPlumbersData);

  return (
    <main>
      <HeroSection />
      <Categories allBrands={allBrands} />
      <ApplicationRepair applicationRepairData={applicationRepairData} />
      <PopularBrands popularBrandsData={popularBrandsData} />
      <Warrantyproducts warrantyProductsData={warrantyProductsData} />
      <ElectricianPlumbers
        electiricianPlumbersData={electiricianPlumbersData}
      />
      <WhyChooseUs />
      <FooterContact />
    </main>
  );
}
