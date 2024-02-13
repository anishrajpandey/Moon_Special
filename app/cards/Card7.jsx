import { motion } from "framer-motion";
import Image from "next/image";

export default function Card6() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-4xl text-blue-100"
    >
      From US <Image src={"/usa.svg"} width={40} height={40} alt="usa" />
    </motion.div>
  );
}
