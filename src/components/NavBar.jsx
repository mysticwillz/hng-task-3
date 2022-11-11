import Group from "../assets/Group.png";

function NavBar() {
  return (
    <>
      <nav className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-5 px-4 ">
          <img src={Group} alt="logo" className="h-[36.37px] w-[233px]" />

          <ul className="flex items-center w-[476px] justify-between ">
            <li className="text-[20px] relative transition all duration-500 ease-in-out  leading-[24.98px] text-[#434343] font-normal capitalize ">
              <a href="">home</a>
            </li>
            <li className="text-[20px] leading-[24.98px] text-[#434343] font-normal capitalize ">
              <a href="">place to stay</a>
            </li>
            <li className="text-[20px]  leading-[24.98px] text-[#434343] font-normal ">
              <a href="">NFTs</a>
            </li>
            <li className="text-[20px]  leading-[24.98px] text-[#434343] font-normal capitalize ">
              <a href="">community</a>
            </li>
          </ul>

          <button className="h-[48px] w-[170px] text-white rounded-[10px] leading-[19.98px] nav-btn hover:bg-[#472e47] transition all duration-250  ease-in-out ">
            Connect wallet
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
