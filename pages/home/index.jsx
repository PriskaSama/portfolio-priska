import Layout from "@src/components/layouts/layout";
import { ParticlesAnime } from "@src/components/tools/particles";
import { Loader } from "@src/components/loader/loader";

//  use state
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <Layout />
      <ParticlesAnime />
    </>
  );
};

export default HomePage;
