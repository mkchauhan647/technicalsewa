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
import ForSeo from "@/components/ForSeo";
import MedicalEquipment from "@/components/repair/MedicalEquipment";

export default async function Home() {
  const result = await axios.get(
    `${baseUrl}techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
  );

  const allBrands = result?.data?.brands;

  // dataa for ApplicationRepairData
  const applicationRepairData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Appliances Repair";
  });


  const popularBrandsData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Popular Brands Repair";
  });

  const warrantyProductsData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Warranty Repair Sewa";
  });

  const electiricianPlumbersData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Electrician & Plumber";
  });

  const medicalEquipmentData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Medical Equipment Repair";
  });

  const computerPrinterData = result?.data?.brands?.filter((val: any) => {
    return val.brand_name === "Computer/Printer Repair";
  });

  return (
    <>
    <ForSeo />
    <Nav />
    <main>
      <HeroSection />
      <Categories allBrands={allBrands} />
      <ApplicationRepair applicationRepairData={applicationRepairData} />
      <PopularBrands popularBrandsData={popularBrandsData} />
      <Warrantyproducts warrantyProductsData={warrantyProductsData} />
      <ElectricianPlumbers computerPrinterData={computerPrinterData} electiricianPlumbersData={electiricianPlumbersData} />
      <MedicalEquipment medicalEquipmentData={medicalEquipmentData}  />
      <WhyChooseUs />
      <FooterContact />
    </main>
    <Footer />
    </>
  );
}
