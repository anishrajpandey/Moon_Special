"use client";
import MoonBackground from "./MoonBackground";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import Card5 from "./cards/Card5";
import Card6 from "./cards/Card6";
import Card7 from "./cards/Card7";
import Card8 from "./cards/Card8";
import Card9 from "./cards/Card9";
import Card10 from "./cards/Card10";
import Card11 from "./cards/Card11";
import Card12 from "./cards/Card12";
import Card13 from "./cards/Card13";
import Card14 from "./cards/Card14";
import Card15 from "./cards/Card15";
import Card16 from "./cards/Card16";
import Card17 from "./cards/Card17";
import Card18 from "./cards/Card18";
import Card19 from "./cards/Card19";
import Card20 from "./cards/Card20";
import Card21 from "./cards/Card21";
import Card22 from "./cards/Card22";
import Card23 from "./cards/Card23";
import Card24 from "./cards/Card24";
import Card25 from "./cards/Card25";
import Card26 from "./cards/Card26";
import Card27 from "./cards/Card27";
import Card28 from "./cards/Card28";
import Card29 from "./cards/Card29";
import Card30 from "./cards/Card30";
import Card31 from "./cards/Card31";
import Card32 from "./cards/Card32";
import Card33 from "./cards/Card33";
import Card34 from "./cards/Card34";
import Card35 from "./cards/Card35";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Card36 from "./cards/Card36";
import Card37 from "./cards/Card37";
import Card38 from "./cards/Card38";

export default function Home() {
  const audioRef = useRef();
  const [Count, setCount] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // const cards =
  let cards = [
    {
      cardID: 1,
      card: <Card1 />,
      isVisible: true,
    },
    { cardID: 2, card: <Card2 />, isVisible: false },
    { cardID: 3, card: <Card3 />, isVisible: false },
    { cardID: 4, card: <Card4 />, isVisible: false },
    { cardID: 5, card: <Card5 />, isVisible: false },
    { cardID: 6, card: <Card6 />, isVisible: false },
    { cardID: 7, card: <Card7 />, isVisible: false },
    { cardID: 8, card: <Card8 />, isVisible: false },
    { cardID: 9, card: <Card9 />, isVisible: false },
    { cardID: 10, card: <Card10 />, isVisible: false },
    { cardID: 11, card: <Card11 />, isVisible: false },
    { cardID: 12, card: <Card12 />, isVisible: false },
    { cardID: 13, card: <Card13 />, isVisible: false },
    { cardID: 14, card: <Card14 />, isVisible: false },
    { cardID: 15, card: <Card15 />, isVisible: false },
    { cardID: 16, card: <Card16 />, isVisible: false },
    { cardID: 17, card: <Card17 />, isVisible: false },
    { cardID: 18, card: <Card18 />, isVisible: false },
    { cardID: 19, card: <Card19 />, isVisible: false },
    { cardID: 20, card: <Card20 />, isVisible: false },
    { cardID: 21, card: <Card21 />, isVisible: false },
    { cardID: 22, card: <Card22 />, isVisible: false },
    { cardID: 23, card: <Card23 />, isVisible: false },
    { cardID: 24, card: <Card24 />, isVisible: false },
    { cardID: 25, card: <Card25 />, isVisible: false },
    { cardID: 26, card: <Card26 />, isVisible: false },
    { cardID: 27, card: <Card27 />, isVisible: false },
    { cardID: 28, card: <Card28 />, isVisible: false },
    { cardID: 29, card: <Card29 />, isVisible: false },
    { cardID: 30, card: <Card30 />, isVisible: false },
    { cardID: 31, card: <Card31 />, isVisible: false },
    { cardID: 32, card: <Card32 />, isVisible: false },
    { cardID: 33, card: <Card33 />, isVisible: false },
    { cardID: 34, card: <Card34 />, isVisible: false },
    { cardID: 35, card: <Card35 />, isVisible: false },
    { cardID: 36, card: <Card36 />, isVisible: false },
    { cardID: 37, card: <Card37 />, isVisible: false },
    { cardID: 38, card: <Card38 />, isVisible: false },
    // { cardID: 19, card: <Card8 />, isVisible: false },
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
  const handlePreviousCard = () => {
    setCount((count) => count - 1);
    // setCards((prev) => [...prev]);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsButtonDisabled(false);
      // audioRef.current.play();
    }, 3000);
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden relative grid ">
      <div className="absolute top-2 right-2 opacity-20 hover:opacity-100 transition-all">
        <audio ref={audioRef} src="/audio.mp3" controls={true} autoPlay />
      </div>
      <div className="">
        <MoonBackground />
        {/* </Suspense> */}
      </div>
      <section className="text-white w-screen md:w-[52vw] h-[62vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-45 p-4 md:p-8 rounded-lg outline-orange-400  text-2xl  z-10">
        <div className="relative w-full h-full">
          {/* <AnimatePresence> */}
          {/* {cards.map(({ isVisible, cardID, card }) => {
              if (!isVisible) return;
              // setVisibleCardID(cardID);
              VisibleCardID = cardID;
              return ( */}

          {VisibleCard.card}
          {Count === 1 && (
            <motion.div
              className="grid grid-cols-3 h-full place-content-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {isButtonDisabled ? (
                <p className="text-lg my-2 absolute bottom-2 ">
                  {" "}
                  Will you wait for the website to load?
                </p>
              ) : (
                <p className="text-lg my-2 absolute bottom-2 ">
                  {" "}
                  {/* Will you wait for the website to load? */}
                  Hehe, Thanks for waiting 🤭 You may click Next
                </p>
              )}
            </motion.div>
          )}

          {/* );
            })} */}
          {VisibleCard.cardID}
          {/* </AnimatePresence> */}

          <button
            disabled={VisibleCard.cardID === 1 || isButtonDisabled}
            class="bg-blue-500 disabled:hidden
             absolute left-1 bottom-0 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex gap-1 items-center"
            type="button"
            onClick={() => {
              handlePreviousCard();
            }}
          >
            Previous
          </button>
          {/* ------------------------------- */}

          <button
            disabled={VisibleCard.cardID === cards.length || isButtonDisabled}
            class="bg-pink-500 disabled:hidden
             absolute right-1 bottom-0 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex gap-1 items-center"
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
