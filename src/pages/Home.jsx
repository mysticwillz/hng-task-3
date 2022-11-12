import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroFooter from "../components/HeroFooter";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Nft from "../components/Nft";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <HeroFooter />
      <Main />
      <Nft />

      <Footer />
    </>
  );
}

export default Home;
