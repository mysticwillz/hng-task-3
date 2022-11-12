import React from "react";
import groupOne from "../assets/group-one.png";
import groupTwo from "../assets/group-two.png";
import groupThree from "../assets/group-three.png";
import groupFour from "../assets/group-four.png";
import groupFive from "../assets/group-five.png";
import groupSix from "../assets/group-six.png";
import groupSeven from "../assets/group-seven.png";
import groupEight from "../assets/group-eight.png";

function Main() {
  const data = [
    { card: groupOne },
    { card: groupTwo },
    { card: groupThree },
    { card: groupFour },
    { card: groupFive },
    { card: groupSix },
    { card: groupSeven },
    { card: groupEight },
  ];
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h2 className="font-bold leading-[59.95px] text-[48px] text-black text-center">
          Inspiration for your next adventure
        </h2>
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
    </>
  );
}

export default Main;
