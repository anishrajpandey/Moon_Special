import { motion } from "framer-motion";

export default function Card9() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-4xl text-blue-100"
    >
      I am so lucky to have a friend like you 🥺
    </motion.div>
  );
}
