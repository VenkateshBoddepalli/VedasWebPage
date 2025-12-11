import React from "react";
import Logo from "../Assets/Logo.PNG";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>
            {" "}
            RTC X Rd, Jawahar Nagar, Kavadiguda <br />
            Hyderabad, Telangana 500020 <br />
            India
          </span>
          <span>PH:+91&nbsp;&nbsp;9492868300</span>
          <span>Email: info@vedasflavourshub.com</span>
        </div>

       <footer className="fixed-footer">
  <h4>Welcome to Veda's Flavours Hub</h4>
  © 2025 Veda's Flavours Hub – Tiffins & Meals
</footer>

      </div>
    </div>
  );
};

export default Footer;
