import React from "react";
import "./Footer.css"; // Add a separate CSS file for styling
import logo from "../../assets/images/Radiance-Solutions-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to={"/"} className="logo d-flex align-items-center justify-content-center">
            <img alt="Rediance Logo" src={logo} />
            <span className="ms-1 text">Radiance</span>
          </Link>
        </div>
        <div className="footer-text">
          &copy; 2024 Radiance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
