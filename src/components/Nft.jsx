import React from "react";

import mmm from "../assets/mmm.png";

function Nft() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center  bg-[#a02279]">
      <section className="flex flex-col justify-center mt-8 md:mt-0 items-center p-4 md:flex-row md:justify-between  ">
        <div className=" w-full md:w-[40%] flex flex-col justify-center items-center md:items-start mb-7 md:mb-0  gap-8">
          <h1 className="text-[48px] font-bold text-white  leading-[59.95px] ">
            Metabnb NFTs
          </h1>
          <p className="leading-[35px] text-[18px] text-white ">
            Discover our NFT gift cards collection. Loyal <br /> customers gets
            amazing gift cards which are <br /> traded as NFTs. These NFTs gives
            our customer <br />
            access to loads of our exclusive services.
          </p>
          <button className="h-[48px] w-[156px] bg-white rounded-lg transition all duration-250 ease-in-out hover:bg-[#e0dcdf]  leading-[19.2px] text-[#a02279] ">
            Learn more
          </button>
        </div>
        <div className=" w-full md:w-[50%]">
          <img src={mmm} alt="heading " className="w-[704px] h-[574.85px] " />
        </div>
      </section>
    </main>
  );
}

export default Nft;
