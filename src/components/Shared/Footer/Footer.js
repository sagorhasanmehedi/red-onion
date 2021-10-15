import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
const Footer = () => {
  return (
    <div className=" footer-parent">
      <div className="footer-all-item row g-5">
        <div className="col-lg-3  COL-1">
          <img src={logo} alt="" srcset="" />
          <p>Made by Mehedi Hasan © 2021</p>
        </div>
        <div className="col-lg-3  all-col">
          <h5 className="footer-heading">
            {" "}
            Free Generators Privacy Policy Generator
          </h5>
          <a href=""> Terms & Conditions Generator </a>
          <a href=""> Cookies Policy Generator </a>
          <a href=""> Return & Refund Policy Generator </a>
          <a href=""> EULA Generator</a>
          <a href="">Disclaimer Generator</a>
          <a href=""> Terms of Service Generator </a>
          <a href=""> Terms of Use Generator</a>
        </div>
        <div className="col-lg-3 all-col">
          <h5 className="footer-heading"> Download Free Templates</h5>
          <a href="">App Privacy Policy Template</a>
          <a href="">CCPA Privacy Policy Template</a>
          <a href="">GDPR Privacy Policy Template</a>
          <a href="">Terms & Conditions Template</a>
          <a href="">End-User License (EULA) Template</a>
          <a href="">Terms of Service Template</a>
          <a href="">Disclaimer Template</a>
          <a href="">Cookies Policy Template</a>
          <a href="">Terms of Use Template</a>
          <a href="">Return and Refund Template</a>{" "}
        </div>
        <div className="col-lg-3 all-col">
          <h5 className="footer-heading"> Company</h5>
          <a href="">How It Works</a>
          <a href="">Reviews</a>
          <a href="">About</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
          <a href="">Help</a>
          <a href="">Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
