import React from "react";
import hero from "../assets/hero-images.png";
import { useState } from "react";

function Hero() {
  const [formData, setFormData] = useState("");
  return (
    <main className="flex flex-col gap-4 md:mt-[80px] mb-[30px] px-4 items-center justify-center md:flex-row md:justify-between md:items-center max-w-7xl mx-auto ">
      <div className=" w-full md:w-40% mb-[10px] md:mb-0">
        <h1 className="md:after:whitespace-nowrap text-[56px] leading-[78.4px] font-normal text-[#434343]">
          Rent a <span className="font-bold hero-text"> Place</span> away from
          <br />
          <span className="font-bold hero-text">Home </span>
          in the
          <span className="font-bold hero-text"> Metaverse</span>
        </h1>
        <p className="text-[24px] leading-[35px] md:whitespace-nowrap text-[#434343]">
          we provide you access to luxury and affordable houses <br /> in the
          metaverse, get a chance to turn your <br /> imagination to reality at
          your comfort zone
        </p>
        <form className="flex items-center mt-[30px]">
          <input
            type="text"
            value={formData}
            onChange={(e) => {
              setFormData(e.target.value);
            }}
            id="text"
            placeholder="Search for location"
            className="w-[390px] h-[54px] px-4 focus:border outline-0  rounded-l-[8px] border bg-[#f7f7f7] leading-[18.2px] text-sm text-[#d1d1d1]  border-[#a3a3a3] "
          />
          <button className="rounded-r-[8px] h-[54px] w-[230px] leading-[19.2px] text-white nav-btn bg-[#a02279]">
            Search
          </button>
        </form>
      </div>
      <img src={hero} alt="hero" className="w-full md:pl-4 md:w-[45%]" />
    </main>
  );
}

export default Hero;
