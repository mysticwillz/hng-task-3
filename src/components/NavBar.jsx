import GroupLogo from "../assets/GroupLogo.png";
import Sidebar from "./Sidebar";
import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { Link } from "react-router-dom";
import { scrollToSection } from "./ScrollTo";

function NavBar() {
  const [hideSideBar, setHideSideBar] = useState(true);
  const { setShowModal, community, Nfts } = useContext(ModalContext);

  return (
    <>
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-4 ">
          <img src={GroupLogo} alt="logo" className="h-[36.37px] w-[233px]" />

          <ul className=" hidden md:flex items-center w-[476px] justify-between relative ">
            <li className="text-[20px]  relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize ">
              <Link to="/">home</Link>
            </li>
            <li className="text-[20px]  relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize ">
              <Link to="/place-to-stay">place to stay</Link>
            </li>
            <li
              onClick={() => {
                scrollToSection(Nfts);
              }}
              className="text-[20px]  relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize "
            >
              <Link to="#Nfts">NFTs</Link>
            </li>
            <li
              onClick={() => {
                scrollToSection(community);
              }}
              className="text-[20px]  relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize "
            >
              <Link to="#community">community</Link>
            </li>
          </ul>

          <button
            onClick={() => {
              setShowModal(true);
            }}
            className=" hidden md:block  h-[48px] w-[170px] text-white rounded-[10px] leading-[19.98px] nav-btn   "
          >
            Connect wallet
          </button>
          <i
            className={
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
        <Sidebar
          setShowModal={setShowModal}
          hideSideBar={hideSideBar}
          setHideSideBar={setHideSideBar}
        />
      </nav>
    </>
  );
}

export default NavBar;
