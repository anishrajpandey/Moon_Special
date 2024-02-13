import { motion } from "framer-motion";

export default function Card35() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-5xl font-bold  text-yellow-300"
    >
      Why are you So Perfect, just the way you are ? 🥺💖
    </motion.div>
  );
}
