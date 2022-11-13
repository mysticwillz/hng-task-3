import React from "react";
import Group from "../assets/Group.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import cc from "../assets/cc.png";
export default function Footer() {
  return (
    <footer className="w-full sm:h-[322px] bg-[#1d1d1e] mx-auto flex items-center    justify-center">
      <section className="flex flex-col py-[20px] px-2 sm:justify-between w-full sm:px-[90px] items-center   mx-auto  sm:flex-row text-white">
        <div className="flex flex-col justify-between  ">
          <img src={Group} alt="footer" className="w-[233px]   h-[50px]" />
          <div className="flex mt-[60px] items-center  mb-[40px] cursor-pointer">
            <img
              src={facebook}
              alt="footer"
              className="w-[  18px] cursor-pointer h-[ 18px]"
            />
            <img
              src={instagram}
              alt="footer"
              className="w-[  18px] h-[ 18px] px-3 cursor-pointer"
            />
            <img
              src={twitter}
              alt="footer"
              className="w-[  18px] cursor-pointer h-[ 18px]"
            />
          </div>
          <img
            src={cc}
            alt="footer"
            className="w-[139px] mb-6 sm:mb-0 h-[18px]
            cursor-pointer"
          />
        </div>

        <div className="flex justify-around items-center   sm:items-start  w-[75%] ">
          <div className="flex  sm:mt-0 flex-col justify-center gap-4">
            <h3 className="leading-[22.48px] text-[15px] md:text-[18px] font-bold ">
              Community
            </h3>
            <div>
              <p className="text-[11px] md:text-sm leading-[35px]  whitespace-nowrap cursor-pointer">
                NFT
              </p>
              <p className="text-[11px] md:text-sm leading-[35px] mt-2 whitespace-nowrap cursor-pointer">
                Tokens
              </p>
              <p className="text-[11px] md:text-sm leading-[35px] mt-2 whitespace-nowrap cursor-pointer">
                Landlords
              </p>
              <p className="text-[11px] md:text-sm leading-[35px] mt-2 whitespace-nowrap cursor-pointer">
                Discord
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="leading-[22.48px] text-[15px] md:text-[18px] font-bold ">
              Places
            </h3>
            <div>
              <p className="text-[11px] md:text-sm  leading-[35px] whitespace-nowrap cursor-pointer">
                Castle
              </p>
              <p className="text-[11px] md:text-sm mt-2 leading-[35px] whitespace-nowrap cursor-pointer">
                Farm
              </p>
              <p className="text-[11px] md:text-sm mt-2 leading-[35px] whitespace-nowrap cursor-pointer">
                Beach
              </p>
              <p className="text-[11px] md:text-sm mt-2 leading-[35px] whitespace-nowrap cursor-pointer">
                Learn more
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="leading-[22.48px] text-[15px] md:text-[18px] font-bold ">
              About us
            </h3>
            <div>
              <p className=" text-[11px]  md:text-sm leading-[35px] whitespace-nowrap cursor-pointer">
                Road map
              </p>
              <p className=" text-[11px] mt-2 md:text-sm leading-[35px] cursor-pointer">
                Creators
              </p>
              <p className=" text-[11px] mt-2 md:text-sm leading-[35px] cursor-pointer">
                Career
              </p>
              <p className=" text-[11px] mt-2 md:text-sm leading-[35px] cursor-pointer">
                Contact us
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
