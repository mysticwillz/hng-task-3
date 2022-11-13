import React from "react";
import NavBar from "../components/NavBar";
import groupOne from "../assets/group-one.png";
import groupTwo from "../assets/group-two.png";
import groupThree from "../assets/group-three.png";
import groupFour from "../assets/group-four.png";
import groupFive from "../assets/group-five.png";
import groupSix from "../assets/group-six.png";
import groupSeven from "../assets/group-seven.png";
import groupEight from "../assets/group-eight.png";
import placeOne from "../assets/place-one.png";
import placeTwo from "../assets/place-two.png";
import placeThree from "../assets/place-three.png";
import placeFour from "../assets/place-four.png";
import placeFive from "../assets/place-five.png";
import placeSix from "../assets/place-six.png";
import placeSeven from "../assets/place-seven.png";
import placeEight from "../assets/place-eight.png";
import setting from "../assets/setting.jpg";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

import { ModalContext } from "../context/ModalContext";

function PlacesToLive() {
  const [showModal, setShowModal] = React.useState(false);
  const data = [
    { card: groupFive },
    { card: groupSix },
    { card: groupSeven },
    { card: groupEight },
    { card: groupOne },
    { card: groupTwo },
    { card: groupThree },
    { card: groupFour },
    { card: placeOne },
    { card: placeTwo },
    { card: placeThree },
    { card: placeFour },
    { card: placeFive },
    { card: placeSix },
    { card: placeSeven },
    { card: placeEight },
  ];

  const tags = [
    { tag: "Restaurant" },
    { tag: "Cottage " },
    { tag: "Castle" },
    { tag: "Fantast city" },
    { tag: "Beach" },

    { tag: "Carbins" },

    { tag: "Off - grid " },

    { tag: "Farm" },
  ];
  return (
    <>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <Modal />
        <NavBar />
      </ModalContext.Provider>

      <main className="max-w-7xl pb-[50px]  mx-auto">
        <section className="flex flex-col items-start max-w-7xl justify-between lg:flex-row px-[3rem] mt-[40px] mb-[30px] lg:items-center mx-auto">
          {tags.map((x) => {
            const { tag } = x;
            return (
              <ul
                className="  
              
              flex lg:items-center lg:justify-between lg:flex flex-col items-start justify-center relative  "
              >
                <li className="text-[20px] my-[10px] lg:my-0 relative transition all duration-250 ease-in-out  leading-[24.98px] text-[#434343] font-normal ">
                  <a href="">{tag}</a>
                </li>
              </ul>
            );
          })}
          <div className="flex justify-between items-center h-[48px] w-[161px] px-[10px] rounded-lg cursor-pointer border border-[#b4b4b4]  ">
            <p className="leading-[19.2px] ">Location</p>
            <img src={setting} alt="settings" className="w-[24px] h-[24px] " />
          </div>
        </section>
        <section className="flex flex-col mt-4 justify-center md:flex-wrap gap-4 items-center md:flex-row md:items-center md:justify-center">
          {data.map((x) => {
            const { card } = x;
            return (
              <div>
                <img
                  src={card}
                  alt="card"
                  className="w-[292px] h-[372px] transform hover:translate-y-[0.2%] transition all duration-150 cursor-pointer ease-in-out"
                />
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PlacesToLive;
