"use client";
import { api } from "@/lib/api";
import useAuthStore from "@/store/useAuthStore";
import React, { useEffect, useState } from "react";

export default function EditProfile() {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user) return;
    setFormData({
      firstname: user.name?.split(" ")[0],
      lastname: user.name?.split(" ")?.[1],
      email: user?.email,
      phone: user?.phone,
      mobile: user?.mobile,
      address: user?.address,
      cust_id: user.id,
    });
  }, [user]);
  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fdata = new FormData();
      for (const key of Object.keys(formData)) {
        fdata.append(key, formData[key]);
      }
      await api.post("/techsewa/publiccontrol/updateCustomer", fdata);
      alert("Profile data updated!");
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container py-4 mx-auto md:max-w-5xl">
      <div className="flex mb-2 space-x-3 space-y-2 max-md:flex-col max-md:!space-y-4 max-md:px-2">
        <div className="p-4 rounded-sm border max-md:mt-3 max-sm:order-2 border-primary">
          <h2 className="text-2xl font-semibold">Update Profile</h2>
          <div className="mt-4">
            <form
              onSubmit={handleUpdateProfile}
              className="grid grid-cols-6 gap-6 mt-8"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="firstname"
                  className="mt-1 w-full text-sm text-gray-700 bg-white rounded-md border-gray-200 shadow-sm"
                  value={formData?.firstname}
                  onChange={handleChangeField}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="lastname"
                  className="mt-1 w-full text-sm text-gray-700 bg-white rounded-md border-gray-200 shadow-sm"
                  onChange={handleChangeField}
                  value={formData?.lastname}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full text-sm text-gray-700 bg-white rounded-md border-gray-200 shadow-sm"
                  onChange={handleChangeField}
                  value={formData?.email}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  type="number"
                  id="Phone"
                  name="phone"
                  className="mt-1 w-full text-sm text-gray-700 bg-white rounded-md border-gray-200 shadow-sm"
                  onChange={handleChangeField}
                  value={formData?.phone}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="Mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile
                </label>

                <input
                  type="number"
                  id="Mobile"
                  name="mobile"
                  className="mt-1 w-full text-sm text-gray-700 bg-white rounded-md border-gray-200 shadow-sm"
                  onChange={handleChangeField}
                  value={formData?.mobile}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="Address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>

                <input
                  id="Address"
                  name="address"
                  className="mt-1 w-full text-sm text-gray-700 bg-white rounded-md border-gray-200 shadow-sm"
                  onChange={handleChangeField}
                  value={formData?.address}
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="px-4 py-2 font-bold rounded border transition-all duration-100 border-primary hover:text-white hover:!bg-primary"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
