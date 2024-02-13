import { motion } from "framer-motion";

export default function Card3() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-4xl text-blue-100"
    >
      <h1>
        <span className="text-yellow-300">Friday</span>, <br /> 19th January
        2024
      </h1>
    </motion.div>
  );
}
