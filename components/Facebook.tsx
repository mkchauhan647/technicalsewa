"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";
const Facebook = () => {
  return (
    <div>
      <FacebookProvider appId="659173229438560" chatSupport>
        <CustomChat pageId="110229715470852" minimized={false} />
      </FacebookProvider>
    </div>
  );
};

export default Facebook;
