import React from "react";
import Slider from "./slider/Slider";
import classes from "./Reviews.module.scss";
import reviews from "../../assets/reviews";

const Reviews = () => {
  return (
    <div className={classes.reviews} id="reviews">
      <Slider reviews={reviews} />
    </div>
  );
};

export default Reviews;
