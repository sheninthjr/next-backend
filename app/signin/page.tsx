import { ProfileForm } from "@/components/forms/ProfileForm";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-white">
        <ProfileForm />
      </div>
    </div>
  );
};

export default page;
