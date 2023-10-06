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
import Number from "@/components/Number";
import MidContent from "@/components/MidContent";

export default async function Home() {
  const result = await axios.get(
    `${baseUrl}techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
  );

  const allBrands = result?.data?.brands;

  // dataa for ApplicationRepairData
  const applicationRepairData = result?.data?.brands?.filter((val: any) => {
    // return val.brand_name === "Appliances Repair Sewa";
    return val.brand_id === "62";
  });

  const popularBrandsData = result?.data?.brands?.filter((val: any) => {
    // return val.brand_name === "Popular Brands Repair";
    return val.brand_id === "76";
  });

  const warrantyProductsData = result?.data?.brands?.filter((val: any) => {
    // return val.brand_name === "Warranty Repair Sewa";
    return val.brand_id === "61";
  });

  const electiricianPlumbersData = result?.data?.brands?.filter((val: any) => {
    // return val.brand_name === "Electrician & Plumber";
    return val.brand_id === "63";
  });

  const medicalEquipmentData = result?.data?.brands?.filter((val: any) => {
    // return val.brand_name === "Medical Equipment Repair";
    return val.brand_id === "67";
  });

  const computerPrinterData = result?.data?.brands?.filter((val: any) => {
    // return val.brand_name === "Computer/Printer Repair";
    return val.brand_id === "65";
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
        <ElectricianPlumbers
          computerPrinterData={computerPrinterData}
          electiricianPlumbersData={electiricianPlumbersData}
        />
        <MedicalEquipment medicalEquipmentData={medicalEquipmentData} />
        <Number />

        <WhyChooseUs />
        <MidContent />
        <FooterContact />
      </main>
      <Footer />
    </>
  );
}
