import React from "react";
import { Hearts } from  "react-loader-spinner";

export const Loader = () => {
  return (
      <div className="bg-black h-screen flex justify-center items-center">
        <Hearts 
          height="300"
          width="300"
          color="#ff3ea5"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          />
        </div>
  );
};

