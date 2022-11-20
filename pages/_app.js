import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
// import { NextUIProvider } from "@nextui-org/react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/router";
// import Hamburger from 'hamburger-react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

    return (
        <Component {...pageProps} />
    );
  };

export default MyApp;
