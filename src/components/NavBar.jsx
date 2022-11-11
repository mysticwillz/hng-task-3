import Group from "../assets/Group.png";
import Sidebar from "./Sidebar";
import { useState } from "react";

function NavBar() {
  const [hideSideBar, setHideSideBar] = useState(true);

  return (
    <>
      <nav className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-5 px-4 ">
          <img src={Group} alt="logo" className="h-[36.37px] w-[233px]" />

          <ul className=" hidden md:flex items-center w-[476px] justify-between relative ">
            <li className="text-[20px]  relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize ">
              <a href="">home</a>
            </li>
            <li className="text-[20px]  relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize ">
              <a href="">place to stay</a>
            </li>
            <li className="text-[20px]  relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize ">
              <a href="">NFTs</a>
            </li>
            <li className="text-[20px]  relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize ">
              <a href="">community</a>
            </li>
          </ul>

          <button className=" hidden md:block  h-[48px] w-[170px] text-white rounded-[10px] leading-[19.98px] nav-btn   ">
            Connect wallet
          </button>
          <i
            class={
              hideSideBar
                ? "fa fa-bars text-[2.5rem] hover:text-[2.54rem] md:hidden text-[#a02279]"
                : "hidden"
            }
            aria-hidden="true"
            onClick={() => {
              setHideSideBar(false);
            }}
          ></i>
        </div>
        <Sidebar hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
      </nav>
    </>
  );
}

export default NavBar;
