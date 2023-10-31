import React from "react";

export default function CustomerProfile({ profile }: { profile: any }) {
  return (
    <>
      <h2 className="text-2xl font-semibold">Customer Profile</h2>
      <div className="py-2 mt-4 space-y-2">
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Name: </strong>
          <span>
            {`${profile?.first_name} ${profile?.last_name}`}
          </span>
        </div>
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Email: </strong>
          <span>{profile?.email}</span>
        </div>
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Mobile: </strong>
          <span>{profile?.mobile_number}</span>
        </div>
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Address: </strong>
          <span>{profile?.address}</span>
        </div>
      </div>
    </>
  );
}
