import React, { useState } from "react";
import { MotionValue, motion, useScroll, useSpring } from "framer-motion";
import classes from "./Header.module.scss";

const logo: string = new URL("../../assets/images/logo.svg", import.meta.url)
  .href;

const menu: string = new URL("../../assets/images/menu.svg", import.meta.url)
  .href;

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenuHandler = (): void => {
    setShowMenu((prev) => !prev);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 800,
    damping: 100,
  });

  const navVariants = {
    init: { opacity: 0 },
    finit: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className={classes.headerWrapper}>
      <motion.div
        className={classes.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <a className={classes.logo} href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <motion.ul
            className={`${showMenu ? classes.show : ""}`}
            variants={navVariants}
            initial="init"
            animate="finit"
          >
            <motion.li variants={navVariants}>
              <a href="#greeting" onClick={showMenuHandler}>
                About
              </a>
            </motion.li>
            <motion.li variants={navVariants}>
              <a href="#offers" onClick={showMenuHandler}>
                Offer
              </a>
            </motion.li>
            <motion.li variants={navVariants}>
              <a href="#gallery" onClick={showMenuHandler}>
                Featured films
              </a>
            </motion.li>
            <motion.li variants={navVariants}>
              <a href="#reviews" onClick={showMenuHandler}>
                Feedbacks
              </a>
            </motion.li>
            <motion.li variants={navVariants}>
              <a href="#contact" onClick={showMenuHandler}>
                Contact
              </a>
            </motion.li>
          </motion.ul>
          <button onClick={showMenuHandler}>
            <img src={menu} alt="menu" />
          </button>
        </nav>
      </motion.div>
      <motion.div className={classes.progressBorder} style={{ scaleX }} />
    </div>
  );
};

export default Header;
