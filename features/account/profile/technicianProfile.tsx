import React from "react";

export default function TechnicianProfile({ profile }: { profile: any }) {
  return (
    <>
      <h2 className="text-2xl font-semibold">Technician Profile</h2>
      <div className="py-2 mt-4 space-y-2">
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Name: </strong>
          <span>{profile?.sc_name}</span>
        </div>
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Email: </strong>
          <span>{profile?.sc_email}</span>
        </div>
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Mobile: </strong>
          <span>{profile?.mobile}</span>
        </div>
        {profile?.sc_phone1 && (
          <div className="p-1 bg-gray-100 rounded-sm border">
            <strong>Phone: </strong>
            <span>{profile?.sc_phone1}</span>
          </div>
        )}
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Address: </strong>
          <span>{profile?.sc_address}</span>
        </div>
        <div className="p-1 bg-gray-100 rounded-sm border">
          <strong>Skill: </strong>
          <span>{profile?.skill}</span>
        </div>
      </div>
    </>
  );
}
