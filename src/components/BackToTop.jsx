import React from "react";
import { AiOutlineToTop } from "react-icons/ai";
import { useState, useEffect } from "react";

function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showBackToTop && (
        <AiOutlineToTop
          onClick={scrollTop}
          className="fixed right-[10px] w-[80px] h-[50px] bottom-[30px] cursor-pointer"
        />
      )}
    </div>
  );
}

export default BackToTop;
