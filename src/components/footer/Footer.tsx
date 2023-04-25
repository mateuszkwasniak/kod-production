import React from "react";
import classes from "./Footer.module.scss";

const logo_black: string = new URL(
  "../../assets/images/logo-black.svg",
  import.meta.url
).href;

const fb: string = new URL("../../assets/images/fb.svg", import.meta.url).href;
const insta: string = new URL("../../assets/images/insta.svg", import.meta.url)
  .href;

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={logo_black} alt="logo" className={classes.logo} />
      <div>
        <div>
          <a href="https://www.facebook.com" target="_blank">
            <img src={fb} alt="fb" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={insta} alt="insta" />
          </a>
        </div>
        <span>+48 575 208 733</span>
      </div>
    </div>
  );
};

export default Footer;
