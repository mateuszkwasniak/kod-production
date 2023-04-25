import React, { useEffect, useState } from "react";
import classes from "./Camera.module.scss";
import {
  motion,
  useScroll,
  useAnimate,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";


const tape1: string = new URL(
  "../../assets/images/camera/tape.svg",
  import.meta.url
).href;
const tape2: string = new URL(
  "../../assets/images/camera/tape2.svg",
  import.meta.url
).href;
const box: string = new URL(
  "../../assets/images/camera/box.svg",
  import.meta.url
).href;
const light: string = new URL(
  "../../assets/images/camera/light.svg",
  import.meta.url
).href;

const Camera = () => {
  const [scope, animate] = useAnimate();
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll();
  const [rotation, setRotation] = useState<number>(0);

  useMotionValueEvent(scrollYProgress, "change", (): void => {
    setRotation((prev: number) => {
      return prev >= 1080 ? 0 : prev + 5;
    });
    animate("div", { y: [0, 5, 0] }, { duration: 1 });
    animate(`.${classes.light}`, { x: [0, 5, -2, 0] }, { duration: 1 });
    animate(`.${classes.tapeOne}`, { rotate: rotation }, { duration: 0.5 });
    animate(`.${classes.tapeTwo}`, { rotate: -rotation }, { duration: 0.5 });
  });

  return (
    <div className={classes.camera} ref={scope}>
      <div ref={scope}>
        <img src={box} alt="box" className={classes.box} />
        <motion.img src={tape1} alt="tape1" className={classes.tapeOne} />
        <motion.img src={tape2} alt="tape2" className={classes.tapeTwo} />
        <motion.img src={light} alt="light" className={classes.light} />
      </div>
    </div>
  );
};

export default Camera;
