import { motion } from "framer-motion";
import Image from "next/image";

export default function Card8() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-4xl text-blue-100"
    >
      To Usss <span className="text-7xl">🤝</span>
    </motion.div>
  );
}
