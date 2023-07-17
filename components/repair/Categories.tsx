import React from "react";
import { baseUrl } from "../../public/baseUrl";
import CategoryCard from "./CategoryCard";
import axios from "axios";

const Categories = async ({ allBrands }: any) => {
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

  const data: any = await fetch(
    `${baseUrl}techsewa/masterconfig/publicmasterconfig/getServiceList`
  ).then((res) => {
    return res.json();
  });

  return (
    <div className="pt-[40px] pb-[40px]  flex justify-center items-center flex-wrap gap-5 ">
      {data?.brands?.slice(0, 12).map((category: any) => (
        <CategoryCard
          id={category.brand_id}
          allBrands={allBrands}
          key={category.imageUrl}
          imageUrl={category.image_url.replace(
            "https://smartcare.com.np/multiservice/",
            "https://smartcare.com.np/techsewa/"
          )}
          brandName={category.brand_name}
          imgAlt={category.alt}
        />
      ))}
    </div>
  );
};

export default Categories;
