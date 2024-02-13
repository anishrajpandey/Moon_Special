import { motion } from "framer-motion";
import Image from "next/image";
import Emoji from "../Emoji";

export default function Card38() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-5xl  "
    >
      <h1>
        I just want to see you{" "}
        <span className="text-green-600  underline font-extrabold">Happy </span>{" "}
        and{" "}
        <span className="text-green-600  underline font-extrabold">
          Successful{" "}
        </span>{" "}
        in Life.
        {/* <span className="text-yellow-300 font-extrabold"> Bestieeee !</span>{" "} */}
        <Emoji>🥺</Emoji>
      </h1>
      <p className="text-sm absolute bottom-0 right-0">Sakiyo taa hehe </p>
    </motion.div>
  );
}
