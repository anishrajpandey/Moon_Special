import { motion } from "framer-motion";

const Card2 = () => {
  return (
    <motion.div
      className="grid place-content-center h-full text-xl md:text-4xl"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {" "}
      Lets start. Shall we?
      <p className="text-xl text-orange-500">
        {" "}
        Drag to rotate the 3D moon in the Background.{" "}
      </p>
      {/* <div class="loader-wrapper">
        <div class="loader"></div>
      </div> */}
    </motion.div>
  );
};

export default Card2;
