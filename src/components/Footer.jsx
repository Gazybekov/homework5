import React from "react";
import "./Footer.css";
import inst from "../assets/Group 27.svg";
import inst2 from "../assets/Group 28.svg";
import inst3 from "../assets/Group 29.svg";
import inst4 from "../assets/Group 30.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__links">
          <a
            target="_blank"
            className="footer__link"
            href={"https://instagram.com/gazybekov99?igshid=YmMyMTA2M2Y"}
          >
            <img src={inst} alt="" />
          </a>
          <a
            target="_blank
        "
            className="footer__link"
            href={"https://makers.courses/houses/KvEVKzaW7mTDQ4bkAiaR"}
          >
            <img src={inst2} alt="" />
          </a>
          <a
            target="_blank"
            className="footer__link"
            href={"https://twitter.com/russia_nc?s=21&t=Hwkx0kl54jXg3g8EVhQ6VQ"}
          >
            <img src={inst3} alt="" />
          </a>

          <a
            target="_blank"
            className="footer__link"
            href={"https://www.youtube.com/watch?v=Oi96WozulP0"}
          >
            <img src={inst4} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
