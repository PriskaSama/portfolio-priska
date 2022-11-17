import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import Aos from "aos";
import { NextUIProvider } from "@nextui-org/react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/router";
// import Hamburger from 'hamburger-react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  // const router = useRouter();
  return (
    // <AnimatePresence exitBeforeEnter>
    //   <motion.div key={router.route} initial="initialState" animate="animateState" exit="exitState" 
    //   transition={{
    //     duration: 0.75,
    //   }}
    //   variants={{
    //     initialState: {
          
    //     },
    //     animateState: {

    //     },
    //     exitState: {

    //     },
    //   }}
    //   className= "base-page-size">
      <Component {...pageProps} />
    //   </motion.div>
    // </AnimatePresence>
  );
}

export default MyApp;
