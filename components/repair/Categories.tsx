import React from "react";
import { baseUrl } from "../../app/otherItem/baseUrl";
import CategoryCard from "./CategoryCard";

const Categories = async () => {
  const categoryData = await fetch(
    `${baseUrl}techsewa/masterconfig/publicmasterconfig/getServiceList`
  );
  const data = await categoryData.json();
  
  return (
    <div  className='pt-[40px] pb-[40px] flex justify-center items-center flex-wrap gap-5 '>
      {data.brands.slice(0, 12).map((category: any) => (
        <CategoryCard
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
