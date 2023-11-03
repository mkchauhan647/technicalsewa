"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";
import useComplainStore from "@/store/useComplainInquiryStore";
import useComplainFormStore from "@/store/useComplainInquiryStore";
import axios from "axios";

export default function ComplainFormFinalStep({
  onBack,
}: {
  onBack: () => void;
}) {
  const [complain, setComplain] = useState<any>({});
  const { user } = useAuthStore();
  const { inquiryData } = useComplainFormStore();
  const [selectedWarrantyFile, setSelectedWarrantyFile] = useState<File>();

  const userInfo: any = {
    name: user?.name,
    email: user?.email,
    address: user?.address,
    mobile: user?.mobile,
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const { location, ...data } = inquiryData!;
    const input = {
      ...data,
      ...complain,
      lat: location?.lat,
      long: location?.long,
    };
    const fdata = new FormData();
    for (const key in input) {
      fdata.append(key, input[key]);
    }
    selectedWarrantyFile && fdata.append("cust_warranty", selectedWarrantyFile);
    axios.post("https://smartcare.com.np/techsewa/publicControl/logComplain");
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    const input: any = {};
    input[name] = value;
    setComplain({ ...complain, ...input });
  };

  return (
    <div className="flex max-w-[1280px] m-auto  justify-center items-center  ">
      <div className="w-full max-w-2xl my-4 p-4 shadow-md rounded-md bg-[#f5f5f5] ">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#203EB2] text-xl font-bold">Complain Inquiry</h1>
          <h3>Fill the following details to complete!</h3>
        </div>
        <form className="mx-auto my-4" onSubmit={handleSubmitForm}>
          <div className="space-y-2">
            {Object.keys(userInfo).map((k: any) => (
              <div
                key={k}
                className="flex px-2 py-1 space-x-2 rounded-sm border border-primary"
              >
                <div className="font-medium capitalize">{k}: </div>
                <div className="">{userInfo[k]}</div>
              </div>
            ))}
            <div>
              <label
                htmlFor="warrantyFile"
                className="block font-medium text-gray-700 text"
              >
                Warranty File
              </label>

              <input
                type="file"
                id="warrantyFile"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm max-sm:text-sm"
                onChange={(e) => setSelectedWarrantyFile(e.target.files?.[0])}
              />
            </div>
            <div>
              <label
                htmlFor="complain"
                className="block font-medium text-gray-700 text"
              >
                Complain Detail
              </label>

              <textarea
                name="customer_remarks"
                id="complain"
                placeholder="Explain the issue in detail"
                className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm max-sm:text-sm"
                onChange={handleChange}
                rows={4}
              ></textarea>
            </div>

            <div className="flex mt-3 space-x-2">
              <button
                onClick={onBack}
                className="inline-block px-12 py-2 text-sm font-medium rounded border transition-all border-primary hover:scale-105 hover:text-indigo-600 focus:outline-none focus:ring"
              >
                Back
              </button>
              <button
                type="submit"
                className="inline-block px-12 py-2 text-sm font-medium text-white rounded border transition-all bg-primary hover:scale-105 focus:outline-none focus:ring"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
