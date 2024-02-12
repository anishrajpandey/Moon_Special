"use client";

import Image from "next/image";
import MoonBackground from "./MoonBackground";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import { useState } from "react";
import { motion } from "framer-motion";

// import VaraText from "./VaraText";
// import {  }
// import { Heart } from "react-lucide";
export default function Home() {
  // const cards =
  const [cards, setCards] = useState([<Card1 key={1} />, <Card2 key={2} />]);
  const [isVisible, setIsVisible] = useState(true);
  const handleNextCard = () => {
    setIsVisible(!isVisible);
  };
  return (
    <main className="h-screen w-screen overflow-hidden relative grid ">
      <div className="">
        <MoonBackground />
      </div>
      <section className="text-white h-[62vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-45 p-12 rounded-lg outline-orange-400  text-2xl  z-10">
        <div className="relative w-full h-full">
          <motion.div
            animate={{ opacity: isVisible ? 1 : 0 }}
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ scale: isVisible ? 1 : 0 }}

            transition={{ duration: 0.5 }}
          >
            <Card1 />
          </motion.div>

          {/* {cards[0]} */}
          <button
            class="bg-pink-500 absolute right-1 bottom-0 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex gap-1 items-center"
            type="button"
            onClick={() => {
              handleNextCard();
            }}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
