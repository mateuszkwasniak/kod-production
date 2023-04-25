import React from "react";
import classes from "./Hero.module.scss";
import Counter from "./counter/Counter";
// import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const video: string =
  "https://res.cloudinary.com/devq23lwt/video/upload/v1682416159/2_wariant_qwifam.mp4?fbclid=IwAR19ZZeuI8aZksD0Uu4yk5mnTm1huHGlGIf2ZBR4oFYc9ludM32oUpt-npA";

const video2: string =
  "https://res.cloudinary.com/devq23lwt/video/upload/v1682416056/%D0%9C%D1%96%D0%B9_%D1%84%D1%96%D0%BB%D1%8C%D0%BC_174_svhhoh.mp4?fbclid=IwAR3nHhC7O_jbU2-Gj57oYil3VWKDHO6AkSiqO-x6ajkATX5WwjaXPyzbsv8";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <video muted autoPlay loop>
        <source src={video2} type="video/mp4" />
      </video>
      <motion.div
        className={classes.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <h1>SHOOT YOUR IDEA</h1>
        <span>Professional production for your business and life</span>
      </motion.div>
      <motion.div
        className={classes.numbers}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <div className={classes.info}>
          <Counter number={5} ms={250} />
          <span>years in industry</span>
        </div>
        <div className={classes.info}>
          <Counter number={100} ms={1} />
          <span>shot films</span>
        </div>
        <div className={classes.info}>
          <Counter number={30} ms={45} />
          <span>satisfied clients</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
