import { motion } from "framer-motion";

export default function Card28() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid place-content-center h-full text-xl md:text-xl text-blue-100"
    >
      <h1>
        Moon,{" "}
        <span className="text-yellow-200">
          Thank You for Being who you are.
        </span>{" "}
      </h1>
      <h1>
        Moon,{" "}
        <span className="text-yellow-200">
          Thank You for Treating me the way you do.{" "}
        </span>{" "}
      </h1>
      <h1>
        Moon,{" "}
        <span className="text-yellow-200">Thank You for Trusting me. </span>{" "}
      </h1>
      <h1>
        Moon,{" "}
        <span className="text-yellow-200">
          Thank You for being in my life.{" "}
        </span>{" "}
      </h1>
      <h1>You are indeed a precious friend nobody wants to lose. </h1>
      <h1 className="text-yellow-200">Neither do I. </h1>
    </motion.div>
  );
}
