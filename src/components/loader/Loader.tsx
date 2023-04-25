import React from "react";
import { motion } from "framer-motion";
import classes from "./Loader.module.scss";

const loader: string = new URL(
  "../../assets/images/loader.svg",
  import.meta.url
).href;

const Loader = () => {
  return (
    <motion.div
      className={classes.loader}
      animate={{
        rotate: [0, 3600],
      }}
      transition={{ duration: 16, repeat: Infinity, type: "just" }}
    >
      <img src={loader} />
    </motion.div>
  );
};

export default Loader;
