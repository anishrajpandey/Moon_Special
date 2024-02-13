import { motion } from "framer-motion";
import Image from "next/image";

export default function Card31() {
  return (
    <motion.div
      className="flex justify-between grid-cols-2 h-full place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <div className="col-span-1 h-full text-xl md:text-4xl flex flex-col justify-center items-center">
        <h1>
          {" "}
          <span className="text-red-500">But, </span> The Moon of BTM is{" "}
          <span className="text-yellow-300 underline"> more precious</span> to
          me.🌝🌖
        </h1>
        {/* The way I love you is inexplicable. It’s so much more than just wanting
        to be with you. I need you, becaus without you, something will always be
        missing in this life, just out of reach. Because you make everything
        better, and everything makes sense */}
      </div>
      <div className="rounded-lg overflow-hidden relative object-contain pb-14 p-5 w-72 h-72 ">
        <video src="/moon.mp4" height={500} width={200} autoPlay loop></video>
        {/* <div className="h-52"> */}
        {/* <Image
          src={"/photo3.jpg"}
          // width={200}
          // height={200}
          fill
          alt="Hello"
          className="object-contain"
        /> */}
      </div>
    </motion.div>
  );
}
