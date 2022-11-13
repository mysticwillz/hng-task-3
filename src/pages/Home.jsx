import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroFooter from "../components/HeroFooter";
import Main from "../components/Main";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Nft from "../components/Nft";
import { ModalContext } from "../context/ModalContext";
import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <Modal />
        <NavBar />
        <Hero />
        <HeroFooter />
        <Main />
        <Nft />
        <Footer />
      </ModalContext.Provider>
    </>
  );
}

export default Home;
