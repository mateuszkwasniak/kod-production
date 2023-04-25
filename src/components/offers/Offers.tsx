import React from "react";
import classes from "./Offers.module.scss";
import offers from "../../assets/offers";
import { motion } from "framer-motion";

const divider: string = new URL(
  "../../assets/images/divider.svg",
  import.meta.url
).href;

const wheel: string = new URL("../../assets/images/wheel.svg", import.meta.url)
  .href;

const Offers = () => {
  return (
    <div className={classes.offers} id="offers">
      <h2>What I Do</h2>
      <ul>
        {offers.map((offer) => (
          <div key={offer}>
            <p>{offer}</p>
            <img src={divider} alt="divider" />
          </div>
        ))}
      </ul>
      <img />
      <img src={wheel} alt="wheel" className={classes.wheel} />
    </div>
  );
};

export default Offers;
