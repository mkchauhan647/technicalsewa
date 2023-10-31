/* eslint-disable @next/next/no-img-element */
"use client";
import { api } from "@/lib/api";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TechnicianProfile from "./technicianProfile";
import CustomerProfile from "./customerProfile";
import Loader from "@/features/loader";

export default function UserProfile() {
  const { push } = useRouter();
  const { user } = useAuthStore();
  const [profile, setProfile] = useState<any>({});
  const handleEditClick = () => push("/profile/edit");
  const handleChangePassClick = () => push("/account/change-password");
  const [loading, setLoading] = useState(true);
  const isTechnician = user?.type === "Technician";
  const getProfile = async () => {
    const fdata = new FormData();
    if (isTechnician) fdata.append("tech_id", `${user?.id}`);
    else fdata.append("id", `${user?.id}`);
    const { data } = await api.post(
      `/techsewa/publiccontrol/${
        isTechnician ? "getTechnicianProfile" : "getCustomerProfile"
      }`,
      fdata
    );
    setProfile(data);
    setLoading(false);
  };
  useEffect(() => {
    if (user) getProfile();
  }, [user]);

  return (
    <div className="container py-4 mx-auto md:max-w-6xl">
      <div className="flex mb-2 space-x-3 space-y-2 max-md:flex-col max-md:!space-y-4 max-md:px-2">
        <div className="p-4 rounded-sm border max-md:mt-3 md:w-3/4 max-sm:order-2 border-primary">
          {loading ? (
            <Loader />
          ) : isTechnician ? (
            <TechnicianProfile profile={profile} />
          ) : (
            <CustomerProfile profile={profile} />
          )}
        </div>
        <div className="mb-3 space-y-3 md:w-1/4 max-sm:order-1 max-md:!mx-auto">
          <div className="overflow-hidden w-32 h-32 rounded-sm">
            <img className="w-full h-full" src={profile?.photo} alt="" />
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
          disabled={loading}
          className="px-4 py-2 font-bold text-white rounded shadow transition-all duration-150 ease-linear outline-none bg-primary hover:shadow-md focus:outline-none sm:mr-2 disabled:opacity-60"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          disabled={loading}
          className="px-4 py-2 font-bold rounded border transition-all duration-100 border-primary hover:text-white hover:!bg-primary disabled:opacity-60"
          onClick={handleChangePassClick}
        >
          Change Password
        </button>
      </div>
      <div></div>
    </div>
  );
}
