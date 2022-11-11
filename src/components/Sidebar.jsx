import React from "react";
function Sidebar({ hideSideBar, setHideSideBar }) {
  return (
    <div
      className={
        hideSideBar
          ? "w-[60%] bg-gray-200 hide transition all  duration-500 ease-in h-full  absolute right-0 top-5 flex  flex-col justify-around items-center "
          : "w-[60%] bg-gray-200  transition all show  duration-500 ease-in h-full absolute right-0 top-5 flex  flex-col justify-around items-center "
      }
    >
      <i
        class="fa fa-times   
        text-[2.5rem] hover:text-[2.54rem] text-[#a02279]  cursor-pointer"
        aria-hidden="true"
        onClick={() => {
          setHideSideBar(true);
        }}
      ></i>
      <ul className=" flex flex-col items-center w-[476px] justify-between relative ">
        <li className="text-[20px]  relative transition all duration-250 ease-in-out leading-[24.98px]  text-[#434343] font-normal capitalize ">
          <a href="">home</a>
        </li>
        <li className="text-[20px]  relative transition all duration-250 ease-in-out mt-8 leading-[24.98px] text-[#434343] font-normal capitalize ">
          <a href="">place to stay</a>
        </li>
        <li className="text-[20px]  relative transition all duration-250 ease-in-out mt-8 leading-[24.98px] text-[#434343] font-normal ">
          <a href="">NFTs</a>
        </li>
        <li className="text-[20px]  relative transition all duration-250 ease-in-out mt-8 leading-[24.98px] text-[#434343] font-normal capitalize ">
          <a href="">community</a>
        </li>
      </ul>

      <button className="  h-[48px] w-[170px] mb-8 text-white rounded-[10px] leading-[19.98px] nav-btn hover:shadow-lg  transition all duration-250  ease-in-out ">
        Connect wallet
      </button>
    </div>
  );
}

export default Sidebar;
