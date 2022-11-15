import "tailwindcss/tailwind.css"
import { useEffect } from "react";
import Aos from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
};

export default MyApp;
