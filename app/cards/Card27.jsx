import { motion } from "framer-motion";
import Emoji from "../Emoji";

export default function Card27() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-4xl text-blue-100"
    >
      who You can be Vulnerable with. <Emoji>🤍</Emoji>
    </motion.div>
  );
}
