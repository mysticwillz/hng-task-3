import React from "react";
import { Routes, Route } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";

import PlacesToLive from "./pages/PlacesToLive";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlacesToLive />} />
      </Routes>
    </div>
  );
}

export default App;
