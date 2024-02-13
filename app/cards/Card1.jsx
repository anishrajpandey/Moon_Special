import { motion } from "framer-motion";
import Image from "next/image";

const Card1 = () => {
  return (
    <motion.div
      className="grid grid-cols-3 h-full place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="col-span-2 h-full text-6xl font-extrabold">
        Hey Moon 🌙 !
        {/* The way I love you is inexplicable. It’s so much more than just wanting
        to be with you. I need you, becaus without you, something will always be
        missing in this life, just out of reach. Because you make everything
        better, and everything makes sense */}
      </div>

      <Image
        src={"/hello.gif"}
        width={250}
        height={250}
        alt="Hello"
        className="absolute right-0"
      />
      {/* <div class="loader-wrapper">
        <div class="loader"></div>
      </div> */}
    </motion.div>
  );
};

export default Card1;
