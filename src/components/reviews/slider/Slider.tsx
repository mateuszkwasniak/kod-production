import React, { useState, useEffect } from "react";
import classes from "./Slider.module.scss";

const quotation: string = new URL(
  "../../../assets/images/quotation.svg",
  import.meta.url
).href;

type SliderPropsType = {
  reviews: {
    text: string;
    author: string;
  }[];
};

const Slider = ({ reviews }: SliderPropsType) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const nextSlide = (): void => {
      setCurrentSlide((prev) => {
        if (prev < reviews.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    };
    let interval: NodeJS.Timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className={classes.slider}>
      <img src={quotation} alt="review" />
      <div className={classes.reviewsWrapper}>
        {reviews.map((review, idx) => {
          return (
            <article
              key={review.author}
              className={`${classes.review} ${
                idx === currentSlide ? classes.display : null
              }`}
            >
              <p>{review.text}</p>
              <h4>{review.author}</h4>
            </article>
          );
        })}
      </div>
      <div className={classes.dots}>
        {reviews.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`${classes.dot} ${
                idx === currentSlide ? classes.active : null
              }`}
              onClick={() => setCurrentSlide(idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
