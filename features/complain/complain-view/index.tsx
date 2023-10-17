"use client";
import { api } from "@/lib/api";
import React, { useEffect, useState } from "react";

export default function ComplainView({ complainId }: { complainId: number }) {
  const [complainData, setComplainData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const getComplainById = async (complainId: number) => {
    //
    const fdata = new FormData();
    fdata.append("id", `${complainId}`);

    const { data: complainData } = await api.post(
      "/techsewa/publiccontrol/getComplain",
      fdata
    );
    setComplainData(complainData);
    setLoading(false);
  };
  useEffect(() => {
    getComplainById(complainId);
  }, [complainId]);
  console.log("complain ? ", complainData);
  return (
    <div className="container mx-auto">
      <div className="py-4 space-x-4 space-y-4">
        <div className="md:grid md:grid-cols-2">
          <div className="">
            <div className="px-2 text-white bg-primary">Customer Info</div>
            <div className="flex">
              <div className="md:col-span-6">
                <div className="px-2">Name: Pankanj</div>
              </div>
              <div className="md:col-span-6">
                <div className="px-2">Email: Pankanj</div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2 text-white bg-primary">Product Information</div>
            <div className="flex">
              <div className="md:col-span-6">
                <div className="px-2">Name: Pankanj</div>
              </div>
              <div className="md:col-span-6">
                <div className="px-2">Email: Pankanj</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {"dksjkd"}
      ComplainView
    </div>
  );
}
