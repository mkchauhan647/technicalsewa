"use client";
import { api } from "@/lib/api";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditProfile() {
  const { push } = useRouter();
  const { user } = useAuthStore();
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const isTechnician = user?.type === "Technician";
  useEffect(() => {
    if (!user) return;
    setFormData({
      ...(isTechnician
        ? {
            id: user?.id,
            name: user.name,
            skill: user?.skill ?? "",
            ctzn: user?.ctzn ?? "",
            certificate: user?.certificate ?? "",
            contract: user?.contract ?? "",
          }
        : {
            firstname: user.name?.split(" ")[0],
            lastname: user.name?.split(" ")?.[1],
            cust_id: user.id,
          }),
      email: user?.email,
      phone: user?.phone ?? "",
      mobile: user?.mobile ?? "",
      address: user?.address ?? "",
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
      if (user?.type === "Technician") {
        await api.post("/techsewa/publiccontrol/updateTechnician", fdata);
      } else {
        await api.post("/techsewa/publiccontrol/updateCustomer", fdata);
      }
      toast("Profile data updated!");
      push("/profile");
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
              {isTechnician ? (
                <>
                  <div className="col-span-6">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      name="name"
                      placeholder="Name"
                      className="py-2 pl-1 mt-1 w-full text-gray-700 rounded-sm border-b border-gray-200 shadow-sm outline-none placeholder:text-gray-600"
                      value={formData?.name}
                      onChange={handleChangeField}
                    />
                  </div>
                </>
              ) : (
                <>
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
                      placeholder="First Name"
                      className="py-2 pl-1 mt-1 w-full text-gray-700 rounded-sm border-b border-gray-200 shadow-sm outline-none placeholder:text-gray-600"
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
                      className="py-2 pl-1 mt-1 w-full text-gray-700 rounded-sm border-b border-gray-200 shadow-sm outline-none placeholder:text-gray-600"
                      onChange={handleChangeField}
                      value={formData?.lastname}
                    />
                  </div>
                </>
              )}

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
                  className="py-2 pl-1 mt-1 w-full text-gray-700 rounded-sm border-b border-gray-200 shadow-sm outline-none placeholder:text-gray-600"
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
                  className="py-2 pl-1 mt-1 w-full text-gray-700 rounded-sm border-b border-gray-200 shadow-sm outline-none placeholder:text-gray-600"
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
                  className="py-2 pl-1 mt-1 w-full text-gray-700 rounded-sm border-b border-gray-200 shadow-sm outline-none placeholder:text-gray-600"
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
                  className="py-2 pl-1 mt-1 w-full text-gray-700 rounded-sm border-b border-gray-200 shadow-sm outline-none placeholder:text-gray-600"
                  onChange={handleChangeField}
                  value={formData?.address}
                />
              </div>

              {isTechnician && (
                <>
                  <div className="col-span-6">
                    <label
                      htmlFor="skill"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Skill
                    </label>

                    <input
                      id="skill"
                      name="skill"
                      className="py-2 pl-1 mt-1 w-full text-gray-700 rounded-sm border-b border-gray-200 shadow-sm outline-none placeholder:text-gray-600"
                      onChange={handleChangeField}
                      value={formData?.skill}
                    />
                  </div>
                </>
              )}

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
