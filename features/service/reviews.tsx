"use client";
import { baseUrl } from "@/public/baseUrl";
import axios from "axios";
import { useEffect, useState } from "react";

interface ReviewItem {
  complain_id: string;
  review: string;
  rating: string;
  tech_name: string;
  tech_id: string;
  cust_id: string;
  customer_name: string;
  customer_image: string;
  tech_image: string;
}

export default function ServiceReviews({ productId }: { productId: number }) {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const getReviews = async () => {
    const formData = new FormData();
    formData.append("page", `${page}`);
    formData.append("product", `${productId}`);
    const { data } = await axios.post(
      `${baseUrl}/techsewa/publicControl/PublicComplain/getRatingDetails`,
      formData
    );
    setReviews(data?.list as ReviewItem[]);
  };
  useEffect(() => {
    getReviews();
  }, [productId, page]);

  return (
    <div className="max-w-[1280px] mx-auto pb-10">
      <h2 className="mb-2 text-2xl font-bold">Reviews</h2>
      <div className="flex flex-col">
        <div className="space-y-2">
          {reviews?.map((review, index) => (
            <div
              key={index}
              className="flex p-1 mb-2 space-x-2 border border-primary"
            >
              <div className="flex flex-col items-center">
                <img
                  className="object-cover w-14 h-14 rounded-full"
                  src={review.customer_image ?? "/assets/user.jpg"}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col flex-grow space-y-1">
                <h3 className="text-xl font-semibold">{review.customer_name}</h3>
                <h3 className="text-base">{review.review}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
