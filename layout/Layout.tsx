"use client";
import React, { useState } from "react";
import BannerModal from "@/components/Modal/BannerModal";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open the modal

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main>{children}</main>
      {isModalOpen && <BannerModal onClose={closeModal} />}
    </>
  );
};

export default Layout;
