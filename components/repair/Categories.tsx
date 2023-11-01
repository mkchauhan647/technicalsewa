import React from "react";
import { baseUrl } from "../../public/baseUrl";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { apiClient } from "@/lib/catchfn";
const Categories = async ({ allBrands }: any) => {
  //
  //grid grid-cols-3 md:grid-cols-8
  // const [data, setData] = useState<any>([]);
  // const fetching = async () => {
  //   await axios
  //     .get(`${baseUrl}techsewa/masterconfig/publicmasterconfig/getServiceList`)
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // };

  // useEffect(() => {
  //   fetching();
  // }, []);

  const data: any = await axios
    .get(`${baseUrl}/techsewa/masterconfig/publicmasterconfig/getServiceList`, {
      headers: {
        "Cache-Control": `no-cache`,
      },
    })
    .then((res) => {
      return res.data;
    });

  return (
    <div className="pt-[40px] pb-[40px]  flex justify-around md:justify-center items-center flex-wrap  ">
      <div className="lg:!container md:max-w-[1140px] mx-auto flex justify-around items-center flex-wrap gap-5 md:gap-4 rightbordre">
        {data?.brands?.map((category: any) => (
          <CategoryCard
            id={category.brand_id}
            allBrands={allBrands}
            key={category?.imageUrl}
            imageUrl={category?.image_url?.replace(
              "https://smartcare.com.np/multiservice/",
              "https://smartcare.com.np/techsewa/"
            )}
            brandName={category.brand_name}
            imgAlt={category?.imageUrl || category.alt2 || category.brand_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
