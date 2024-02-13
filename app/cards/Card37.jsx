import { motion } from "framer-motion";
import Image from "next/image";
import Emoji from "../Emoji";

export default function Card37() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-5xl font-bold "
    >
      Happy Valentines Day,{" "}
      <span className="text-yellow-300 font-extrabold"> Bestieeee !</span>{" "}
      <Emoji>💖</Emoji>
      <p className="text-sm absolute bottom-0 left-1/2 -translate-x-1/2">
        14 <sup>th</sup> Feb, 2024
      </p>
    </motion.div>
  );
}
