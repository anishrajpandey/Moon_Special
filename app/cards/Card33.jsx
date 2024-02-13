import { motion } from "framer-motion";
import Image from "next/image";

export default function Card33() {
  return (
    <motion.div
      className="flex justify-between  h-full place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <div className="rounded-lg overflow-hidden relative object-contain pb-14 p-5 w-72 h-72 ">
        {/* <div className="h-52"> */}
        <Image
          src={"/photo2.jpg"}
          // width={200}
          // height={200}
          fill
          alt="Hello"
          className="rounded-xl overflow-hidden object-contain"
        />
      </div>
      <div className=" text-x text-center   md:text-4xl flex justify-center items-center">
        <h1>A Breathtaking Innocence... </h1>
        {/* The way I love you is inexplicable. It’s so much more than just wanting
        to be with you. I need you, becaus without you, something will always be
        missing in this life, just out of reach. Because you make everything
        better, and everything makes sense */}
      </div>
    </motion.div>
  );
}
