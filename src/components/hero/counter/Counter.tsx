import React, { useState, useEffect } from "react";
import classes from "./Counter.module.scss";

type CounterPropsType = {
  number: number;
  ms: number;
};

const Counter = ({ number, ms }: CounterPropsType) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (value < number) {
      interval = setInterval(() => {
        setValue((prev) => prev + 1);
      }, ms);
    }

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return <div className={classes.counter}>+{value}</div>;
};

export default Counter;
