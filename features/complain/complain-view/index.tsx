"use client";
import { api } from "@/lib/api";
import React, { useEffect, useState } from "react";
import { Complain } from "./types";

export default function ComplainView({ complainId }: { complainId: number }) {
  const [complain, setComplainData] = useState<Complain | null>(null);
  const [loading, setLoading] = useState(true);
  const getComplainById = async (complainId: number) => {
    //
    const fdata = new FormData();
    fdata.append("complain_id", `${complainId}`);

    const { data: complainData } = await api.post(
      "/techsewa/publiccontrol/publicComplain/getcomplaindetails",
      fdata
    );
    
    setComplainData(complainData);
    setLoading(false);
  };
  useEffect(() => {
    getComplainById(complainId);
  }, [complainId]);

  if (loading)
    return (
      <div>
        <div className="flex justify-center items-center space-x-2">
          <span className="sr-only">Loading...</span>
          <div className="h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-5 h-5 bg-black rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  return (
    <div className="container mx-auto">
      <div className="py-4 space-x-4 space-y-4">
        <div className="gap-y-2 md:gap-y-4 md:grid md:grid-cols-2 md:gap-x-4">
          <div className="border border-opacity-20 border-primary">
            <div className="p-2 text-white bg-primary">Customer Info</div>
            <div className="py-2 md:grid md:grid-cols-2">
              <div className="">
                <div className="px-2">
                  Name: {complain?.cust_first_name} {complain?.cust_last_name}
                </div>
              </div>
              <div className="">
                <div className="px-2">Email: {complain?.email}</div>
              </div>
            </div>
            <div className="py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary">
              <div className="">
                <div className="px-2">Address: {complain?.cust_address}</div>
              </div>
              <div className="">
                <div className="px-2">
                  Mobile: {complain?.cust_phone_mobile}{" "}
                </div>
              </div>
            </div>
            <div className="py-2 md:grid md:grid-cols-2">
              <div className="">
                <div className="px-2">Remark: {complain?.customer_remarks}</div>
              </div>
            </div>
            <div className="py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary">
              <div className="flex">
                <div className="px-2">Warranty:</div>
                {complain?.cust_warranty && (
                  <img
                    src={complain?.cust_warranty}
                    alt=""
                    height={200}
                    width={400}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="border border-opacity-20 border-primary">
            <div className="p-2 text-white bg-primary">Product Information</div>
            <div className="py-2 md:grid md:grid-cols-2">
              <div className="">
                <div className="px-2">Id: {complain?.product_id}</div>
              </div>
              <div className="">
                <div className="px-2">Brand Name: {complain?.brand}</div>
              </div>
            </div>
            <div className="py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary">
              <div className="">
                <div className="px-2">Product: {complain?.product_name}</div>
              </div>
              <div className="">
                <div className="px-2">Model: {complain?.model}</div>
              </div>
            </div>
            <div className="py-2 md:grid md:grid-cols-2">
              <div className="">
                <div className="px-2">
                  Service Name: {complain?.service_category_name}
                </div>
              </div>
              <div className="">
                <div className="px-2">
                  Service Description: {complain?.service_type}
                </div>
              </div>
            </div>
          </div>

          <div className="border border-opacity-20 border-primary">
            <div className="p-2 text-white bg-primary">Tech Info</div>
            <div className="py-2 md:grid md:grid-cols-2">
              <div className="">
                <div className="px-2">Name: {complain?.tech_name}</div>
              </div>
              <div className="">
                <div className="px-2">Email: {complain?.tech_email}</div>
              </div>
            </div>
            <div className="py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary">
              <div className="">
                <div className="px-2">Address: {complain?.tech_address}</div>
              </div>
              <div className="">
                <div className="px-2">Mobile: {complain?.tech_mobile}</div>
              </div>
            </div>
            <div className="py-2 md:grid md:grid-cols-2">
              <div className="">
                <div className="px-2">Photo: {complain?.photo}</div>
              </div>
            </div>
            <div className="py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary">
              <div className="">
                <div className="px-2">
                  Tech Warranty: {complain?.tech_warranty}
                </div>
              </div>
            </div>
          </div>
          <div className="border border-opacity-20 border-primary">
            <div className="p-2 text-white bg-primary">Call Summary</div>
            <div className="space-y-">
              <div className="py-2 md:grid md:grid-cols-2">
                <div className="">
                  <div className="px-2">Status: {complain?.call_status}</div>
                </div>
                <div className="">
                  <div className="px-2">Dealer Name: {complain?.call_dealer_name}</div>
                </div>
              </div>
              <div className="py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary">
                <div className="">
                  <div className="px-2">Date: {complain?.call_purchase_dt}</div>
                </div>
                <div className="">
                  <div className="px-2">Time: {complain?.call_tm}</div>
                </div>
              </div>
              <div className="py-2 md:grid md:grid-cols-2">
                <div className="">
                  <div className="px-2">Serial No: {complain?.call_serial_no}</div>
                </div>
                <div className="">
                  <div className="px-2">Defect Code: {complain?.defect_code}</div>
                </div>
              </div>
              <div className="py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary">
                <div className="">
                  <div className="px-2">Repair Code: {complain?.repair_code}</div>
                </div>
                <div className="">
                  <div className="px-2">Symptom Code: {complain?.symptom_code}</div>
                </div>
              </div>
              <div className="py-2 md:grid md:grid-cols-2">
                <div className="">
                  <div className="px-2">Remark: {complain?.call_engineer_remark}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-opacity-20 border-primary">
            <div className="p-2 text-white bg-primary">Payment Info</div>
            <div className="flex"></div>
          </div>
        </div>

        <div className="mb-2">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <div className="reviews"></div>
        </div>

        {/* <div>rate technician form ..</div> */}
      </div>
    </div>
  );
}
