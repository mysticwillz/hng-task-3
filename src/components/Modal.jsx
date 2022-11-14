import React, { useContext } from "react";
import x from "../assets/x.png";
import walletOne from "../assets/wallet-one.png";
import walletTwo from "../assets/wallet-two.png";
import { ModalContext } from "../context/ModalContext";

function Modal() {
  const { showModal, setShowModal } = useContext(ModalContext);
  return (
    <main className={showModal ? " modal   h-screen w-screen " : "hidden"}>
      <section className="w-[600px] h-[347px] rounded-[16px] bg-white ">
        <div className="w-full h-[78px] flex justify-between items-center border-b border-[#CFD8DC] p-4 ">
          <h1 className="font-bold text-[24px] leading-[29.98px] ">
            Connect wallet
          </h1>
          <img
            onClick={() => {
              setShowModal(false);
            }}
            src={x}
            alt="close"
            className="w-[24px] h-[24px] cursor-pointer "
          />
        </div>
        <p className="leading-[20px] pt-8 px-4">
          Choose your preferred wallet:
        </p>
        <img
          src={walletOne}
          alt="choose wallet"
          className="m-4 rounded-[12px] w-[357.3px] h-[45.3px] md:w-[536px] md:h-[68px] cursor-pointer transform hover:translate-y-[0.5%] hover:shadow-lg"
        />
        <img
          src={walletTwo}
          alt="choose wallet"
          className="m-4 cursor-pointer rounded-[12px]  w-[357.3px] h-[45.3px] transform hover:translate-y-[0.5%] md:w-[536px] md:h-[68px] hover:shadow-lg"
        />
      </section>
    </main>
  );
}

export default Modal;
