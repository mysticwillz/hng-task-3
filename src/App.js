import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import PlacesToLive from "./pages/PlacesToLive";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlacesToLive />} />
      </Routes>
    </>
  );
}

export default App;
