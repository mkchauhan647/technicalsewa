/* eslint-disable @next/next/no-img-element */
"use client";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React from "react";

export default function UserProfile() {
  const { push } = useRouter();
  const { user } = useAuthStore();
  const handleEditClick = () => push("/profile/edit");
  const handleChangePassClick = () => push("/account/change-password");
  return (
    <div className="container py-4 mx-auto md:max-w-6xl">
      <div className="flex mb-2 space-x-3 space-y-2 max-md:flex-col max-md:!space-y-4 max-md:px-2">
        <div className="p-4 rounded-sm border max-md:mt-3 md:w-3/4 max-sm:order-2 border-primary">
          <h2 className="text-2xl font-semibold">Customer Profile</h2>
          <div className="py-2 mt-4 space-y-2">
            <div className="p-1 bg-gray-100 rounded-sm border">
              <strong>Name: </strong>
              <span>{user?.name}</span>
            </div>
            <div className="p-1 bg-gray-100 rounded-sm border">
              <strong>Email: </strong>
              <span>{user?.email}</span>
            </div>
            <div className="p-1 bg-gray-100 rounded-sm border">
              <strong>Mobile: </strong>
              <span>{user?.mobile}</span>
            </div>
            <div className="p-1 bg-gray-100 rounded-sm border">
              <strong>Address: </strong>
              <span>{user?.address}</span>
            </div>
          </div>
        </div>
        <div className="mb-3 space-y-3 md:w-1/4 max-sm:order-1 max-md:!mx-auto">
          <div className="overflow-hidden w-32 h-32 rounded-sm">
            <img className="w-full h-full" src={user?.photo} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-medium">{user?.name}</h2>
            <p>{user?.mobile}</p>
          </div>
        </div>
      </div>
      {/* action btns */}
      <div className="flex mb-4 space-x-1">
        <button
          className="px-4 py-2 font-bold text-white rounded shadow transition-all duration-150 ease-linear outline-none bg-primary hover:shadow-md focus:outline-none sm:mr-2"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 font-bold rounded border transition-all duration-100 border-primary hover:text-white hover:!bg-primary"
          onClick={handleChangePassClick}
        >
          Change Password
        </button>
      </div>
      <div></div>
    </div>
  );
}
