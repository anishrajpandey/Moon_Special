import { motion } from "framer-motion";

export default function Card17() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-4xl text-blue-100"
    >
      ... that She is worth every Gem 💎
      <h1>in the world</h1>
    </motion.div>
  );
}
