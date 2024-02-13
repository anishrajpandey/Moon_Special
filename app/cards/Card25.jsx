import { motion } from "framer-motion";
import Image from "next/image";

export default function Card25() {
  return (
    <motion.div
      className="grid grid-cols-3 h-full place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <div className="col-span-2 h-full text-xl md:text-4xl flex flex-col justify-center items-center">
        <h1>
          {" "}
          How <u>Interesting </u> can Life be, with the right person.
        </h1>
        {/* The way I love you is inexplicable. It’s so much more than just wanting
        to be with you. I need you, becaus without you, something will always be
        missing in this life, just out of reach. Because you make everything
        better, and everything makes sense */}
      </div>
      <div className="rounded-lg overflow-hidden relative object-contain pb-14 w-72 h-72 ">
        {/* <div className="h-52"> */}
        <Image
          src={"/vc2.jpg"}
          // width={200}
          // height={200}
          fill
          alt="Hello"
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
