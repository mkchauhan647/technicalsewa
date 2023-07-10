import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FooterContact from "@/components/footer/FooterContact";
import ApplicationRepair from "@/components/repair/ApplicationRepair";
import Categories from "@/components/repair/Categories";
import ElectricianPlumbers from "@/components/repair/ElectricianPlumbers";
import PopularBrands from "@/components/repair/PopularBrands";
import Warrantyproducts from "@/components/repair/Warrantyproducts";

export default function Home() {
  const SliderData = fetch("https://smartcare.com.np/multiservice/masterconfig/publicmasterconfig/getSliderListpop1")
  console.log(SliderData)
  return (
    <main>
      <HeroSection />
      <Categories />
      <ApplicationRepair />
      <PopularBrands />
      <Warrantyproducts />
      <ElectricianPlumbers />
      <WhyChooseUs />
      <FooterContact />
    </main>
  );
}
