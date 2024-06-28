import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = async ({ allBrands, data }: any) => {

  return (
    <div className="pt-[40px] pb-[40px]  flex justify-around md:justify-center items-center flex-wrap  ">
      <div className="lg:!container md:max-w-[1140px] mx-auto flex justify-around items-center flex-wrap gap-5 md:gap-4 rightbordre">
        {data?.filter((category: any) => category.image_url !== null)
        .map((category: any) => (
          <CategoryCard
            id={category.brand_id}
            allBrands={allBrands}
            key={category?.imageUrl}
            imageUrl={category?.image_url?.replace(
              "https://www.technicalsewa.com/multiservice/",
              "https://www.technicalsewa.com/techsewa/"
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
