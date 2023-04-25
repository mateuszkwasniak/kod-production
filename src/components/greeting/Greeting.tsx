import React, { useRef, useEffect } from "react";
import classes from "./Greeting.module.scss";
import { motion, useInView } from "framer-motion";

const img: string = new URL("../../assets/images/bogdan.png", import.meta.url)
  .href;

const Greeting = () => {
  const ref = useRef(null);
  const isInView: boolean = useInView(ref, { once: true, margin: "-35%" });

  return (
    <div className={classes.greeting} ref={ref} id="greeting">
      <motion.div
        className={classes.left}
        style={{ opacity: isInView ? 1 : 0 }}
      >
        <img src={img} alt="This is Bohdan" />
      </motion.div>
      <motion.div
        className={classes.right}
        style={{
          transform: isInView ? "translateX(0)" : "translateX(20rem)",
          opacity: isInView ? 1 : 0,
        }}
      >
        <h2>
          My name is
          <br />
          Bohdan Kod
        </h2>
        <p>
          I’m a professional filmmaker, experienced in film production,
          producing for businesses, brands & influencers.
        </p>
        <p>Technical adviser for video equipment and video studios creation.</p>
      </motion.div>
    </div>
  );
};

export default Greeting;
