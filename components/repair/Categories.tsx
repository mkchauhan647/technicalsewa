
'use client'; 
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
// import { fetchServerClient } from "@/lib/api";

const Categories = ({ allBrands }: any) => {
  const [data, setData] = useState([]);
  const [brands, setBrands] = useState(allBrands);

  console.log("allbrands", allBrands);

  useEffect(() => {

    const fetchData = async () => {
      console.log("data", data);
      if (data.length > 0) {
        return;
      }
      try {
        const res = await axios.get(
          "https://www.technicalsewa.com/techsewa/masterconfig/publicmasterconfig/getServiceList"
        );
        const filteredData = res?.data?.brands.filter(
          (b: any) => b?.brand_id !== "78"
        );
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchBrands = async () => {
      console.log("brands", allBrands);
      if (!brands && allBrands === undefined) {
        try {
          const response = await axios.get(
            `https://www.technicalsewa.com/techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
          );
          const result = response?.data;
          let fetchNewBrands = result?.brands;
          fetchNewBrands?.sort((a: any, b: any) => +a?.ordering - +b?.ordering);
          setBrands(fetchNewBrands);
        } catch (error) {
          console.error("Error fetching brands:", error);
        }
      }
    };

    fetchData();
    fetchBrands();
  }, [brands]);

  return (
    <div className="pt-[40px] pb-[40px] flex justify-around md:justify-center items-center flex-wrap">
      <div className="lg:!container md:max-w-[1140px] mx-auto flex justify-around items-center flex-wrap gap-5 md:gap-4 rightbordre">
        {data
          ?.filter((category: any) => category.image_url !== null)
          .map((category: any) => (
            <CategoryCard
              id={category.brand_id}
              allBrands={brands}
              key={category?.imageUrl}
              imageUrl={category?.image_url?.replace(
                "https://www.technicalsewa.com/multiservice/",
                "https://www.technicalsewa.com/techsewa/"
              )}
              brandName={category.brand_name}
              imgAlt={
                category?.imageUrl || category.alt2 || category.brand_name
              }
            />
          ))}
      </div>
    </div>
  );
};

export default Categories;







// import React from "react";
// import CategoryCard from "./CategoryCard";
// import axios from "axios";
// import { fetchServerClient } from "@/lib/api";

// const Categories = async ({ allBrands }: any) => {

//   const data = await axios
//   .get(
//     "https://www.technicalsewa.com/techsewa/masterconfig/publicmasterconfig/getServiceList"
//   )
//   .then((res) => {
//     //set others brands and removing E-Commerce since it doesn't have image associated with it.
//     return res?.data?.brands.filter((b: any) => b?.brand_id !== "78");
//   });
  
//   // fetch allBrands.
//   if (allBrands === undefined) {
//     const result = await fetchServerClient(
//       `techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
//     );
//     let fetchNewBrands = result?.brands;

//     // allBrands?.sort((a: any, b: any) => +a?.brand_id - +b?.brand_id);
//     fetchNewBrands?.sort((a: any, b: any) => +a?.ordering - +b?.ordering);
//     allBrands = fetchNewBrands;
//   }

//   return (
//     <div className="pt-[40px] pb-[40px]  flex justify-around md:justify-center items-center flex-wrap  ">
//       <div className="lg:!container md:max-w-[1140px] mx-auto flex justify-around items-center flex-wrap gap-5 md:gap-4 rightbordre">
//         {data
//           ?.filter((category: any) => category.image_url !== null)
//           .map((category: any) => (
//             <CategoryCard
//               id={category.brand_id}
//               allBrands={allBrands}
//               key={category?.imageUrl}
//               imageUrl={category?.image_url?.replace(
//                 "https://www.technicalsewa.com/multiservice/",
//                 "https://www.technicalsewa.com/techsewa/"
//               )}
//               brandName={category.brand_name}
//               imgAlt={
//                 category?.imageUrl || category.alt2 || category.brand_name
//               }
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
