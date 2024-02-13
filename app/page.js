"use client";

import Image from "next/image";
import MoonBackground from "./MoonBackground";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import Card5 from "./cards/Card5";
import Card6 from "./cards/Card6";
import Card7 from "./cards/Card7";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [Count, setCount] = useState(1);
  // const cards =
  let cards = [
    { cardID: 1, card: <Card1 />, isVisible: true },
    { cardID: 2, card: <Card2 />, isVisible: false },
    { cardID: 3, card: <Card3 />, isVisible: false },
    { cardID: 4, card: <Card4 />, isVisible: false },
    { cardID: 5, card: <Card5 />, isVisible: false },
    { cardID: 6, card: <Card6 />, isVisible: false },
    { cardID: 7, card: <Card7 />, isVisible: false },
  ];
  useEffect(() => {
    setVisibleCard(cards[Count - 1]);
  }, [Count]);
  const [VisibleCard, setVisibleCard] = useState({
    cardID: 1,
    card: <Card1 />,
    isVisible: true,
  });

  const handleNextCard = () => {
    setCount((count) => count + 1);
    // setCards((prev) => [...prev]);
  };

  return (
    <main className="h-screen w-screen overflow-hidden relative grid ">
      <div className="">
        <MoonBackground />
      </div>
      <section className="text-white min-w-[52vw] h-[62vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-45 p-12 rounded-lg outline-orange-400  text-2xl  z-10">
        <div className="relative w-full h-full">
          <AnimatePresence>
            {/* {cards.map(({ isVisible, cardID, card }) => {
              if (!isVisible) return;
              // setVisibleCardID(cardID);
              VisibleCardID = cardID;
              return ( */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {VisibleCard.card}
            </motion.div>
            {/* );
            })} */}
          </AnimatePresence>

          {/* ------------------------------- */}

          <button
            disabled={VisibleCard.cardID === cards.length}
            class="bg-pink-500 disabled:hidden
             absolute right-1 bottom-0 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex gap-1 items-center"
            type="button"
            onClick={() => {
              handleNextCard();
            }}
          >
            Next
            {/* <svg
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
            </svg> */}
          </button>
        </div>
      </section>
    </main>
  );
}
