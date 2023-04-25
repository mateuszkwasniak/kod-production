import React, { ChangeEvent, FormEvent, useState } from "react";
import Loader from "../loader/Loader";
import classes from "./Contact.module.scss";
import { motion } from "framer-motion";

const arrow: string = new URL("../../assets/images/arrow.svg", import.meta.url)
  .href;

const move = {
  hover: {
    scale: 1.02,
    x: "1rem",
    transition: { duration: 0.3 },
  },
};

type FormDataType = {
  sender_name: string;
  sender_email: string;
  sender_message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormDataType>({
    sender_name: "",
    sender_email: "",
    sender_message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const inputChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const formSubmitHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(false);
    setStatus(null);

    if (
      formData.sender_name === "" ||
      !formData.sender_email.includes("@") ||
      formData.sender_message === ""
    ) {
      setStatus("Please fill out all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setLoading(false);
        setStatus("Message sent successfully");
        setFormData({ sender_name: "", sender_email: "", sender_message: "" });
      } else {
        setLoading(false);
        setStatus("Something went wrong. Please try again later");
      }
    } catch (error) {
      setLoading(false);
      setStatus("Something went wrong. Please try again later");
    }
  };

  return (
    <div className={classes.contact} id="contact">
      <div className={classes.left}>
        Let's <br />
        get in <br />
        touch{" "}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className={classes.right}>
        <form onSubmit={formSubmitHandler}>
          <input
            placeholder="full name"
            type="text"
            maxLength={50}
            name="sender_name"
            value={formData.sender_name}
            autoComplete="off"
            onChange={inputChangeHandler}
          />
          <input
            placeholder="email"
            type="email"
            maxLength={50}
            name="sender_email"
            value={formData.sender_email}
            autoComplete="off"
            onChange={inputChangeHandler}
          />

          <textarea
            placeholder="message"
            name="sender_message"
            value={formData.sender_message}
            spellCheck="false"
            rows={3}
            cols={50}
            onChange={inputChangeHandler}
            maxLength={5000}
          />
          <div>
            {loading && <Loader />}
            {status && <span className={classes.status}>{status}</span>}
            <motion.button type="submit" whileHover="hover">
              send <motion.img variants={move} src={arrow} alt="send-arrow" />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
