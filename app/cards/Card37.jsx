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
    </motion.div>
  );
}
