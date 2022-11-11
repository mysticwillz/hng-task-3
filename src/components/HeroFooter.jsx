import React from "react";
import footOne from "../assets/foot-1.png";
import footTwo from "../assets/foot-2.png";
import footThree from "../assets/foot-3.png";

function HeroFooter() {
  return (
    <div className="w-full my-[40px] bg-[#a02279] h-[70px] flex items-center justify-around">
      <img
        src={footOne}
        alt="footer"
        className="md:w-[222px] w-[111px] h-[25px] md:h-[50px]"
      />
      <img
        src={footTwo}
        alt="footer"
        className="md:w-[214.14px] w-[107.07px] h-[18.78px] md:h-[37.56px] "
      />
      <img
        src={footThree}
        alt="footer"
        className=" w-[99.16px] h-[20.395px] md:w-[198.32px] md:h-[40.79px] "
      />
    </div>
  );
}

export default HeroFooter;
