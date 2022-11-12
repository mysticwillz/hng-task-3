import React from "react";
import Hero from "./components/Hero";
import HeroFooter from "./components/HeroFooter";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HeroFooter />
      <Main />
    </>
  );
}

export default App;
