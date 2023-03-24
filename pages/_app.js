import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";


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
