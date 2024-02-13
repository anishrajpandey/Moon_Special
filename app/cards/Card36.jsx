import { motion } from "framer-motion";
import Image from "next/image";

export default function Card36() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-5xl "
    >
      Wishing you a ...{" "}
    </motion.div>
  );
}
