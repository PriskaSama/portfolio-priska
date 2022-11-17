import Head from "next/head";
import Image from "next/image";
import favicon from "../public/favicon.ico";
import { motion } from "framer-motion";

import HomePage from "@pages/home";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Portfolio-Priska</title>
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <meta name="description" content="Generated by create next app" />
       <link rel="favicon" href="../public/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
