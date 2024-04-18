import FormHander from "@/components/FormHandler";
import MyImage from "@/components/MyImage";
import React from "react";

const page = () => {
  return (
    <div className="flex mx-10 mt-3">
      <MyImage />
      <div className="mx-3">
        <FormHander />
      </div>
    </div>
  );
};

export default page;
