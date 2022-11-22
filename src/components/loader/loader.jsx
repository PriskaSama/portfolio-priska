import { motion } from "framer-motion";
import React from "react";
import { Audio, Hearts } from  "react-loader-spinner";

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
    // <motion.div
    //   className="w-40 h-40 bg-black/90"
    //   animate={{
    //     scale: [1, 2, 2, 1, 1],
    //     rotate: [0, 0, 180, 180, 0],
    //     borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    //   }}
    //   transition={{
    //     duration: 2,
    //     ease: "easeInOut",
    //     times: [0, 0.2, 0.5, 0.8, 1],
    //     repeat: Infinity,
    //     repeatDelay: 1
    //   }}
    // />
  );
};

