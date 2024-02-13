import { motion } from "framer-motion";

export default function Card29() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-4xl text-blue-100"
    >
      I know, You deserve way more than just{" "}
      <span className="text-yellow-300 text-6xl italic">Thank You</span>
    </motion.div>
  );
}
