import { motion } from "framer-motion";
import Image from "next/image";

export default function Card4() {
  return (
    <motion.div
      className="grid grid-cols-2 h-full place-content-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <div className="col-span-1 h-full text-4xl font-extrabold flex items-center">
        One of the luckiest day of my life...
        {/* The way I love you is inexplicable. It’s so much more than just wanting
        to be with you. I need you, becaus without you, something will always be
        missing in this life, just out of reach. Because you make everything
        better, and everything makes sense */}
      </div>
      <div>
        <Image
          src={"/telegram.png"}
          width={700}
          height={700}
          alt="Hello"
          className=" -z-10 w-full h-72 rounded-xl overflow-hidden"
        />
      </div>

      {/* <div class="loader-wrapper">
        <div class="loader"></div>
      </div> */}
    </motion.div>
  );
}
