import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/home";
import "./style.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <Link to="/jacqueline-walsh-portfolio" element={<Home />}>
            <img
              className="navbar-logo"
              src="https://jacqueline-walsh-portfolio.s3-eu-west-1.amazonaws.com/profile.png"
              alt="Jacqueline Walsh Logo"
            />
            <h5>
              Jacqueline Walsh
              <span className="navbar-heading-display"> - My Portfolio</span>
            </h5>
          </Link>
        </div>
        <ul className={click ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <Link
              to="/jacqueline-walsh-portfolio"
              className="navbar-links"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item" onClick={handleClick}>
            <Link to="/about" activeclassname="active" className="navbar-links">
              About
            </Link>
          </li>
          <li className="navbar-item" onClick={handleClick}>
            <Link
              to="/portfolio"
              activeclassname="active"
              className="navbar-links"
            >
              Portfolio
            </Link>
          </li>
          <li className="navbar-item" onClick={handleClick}>
            <Link
              to="/testimonials"
              activeclassname="active"
              className="navbar-links"
            >
              Testimonials
            </Link>
          </li>
          <li className="navbar-item" onClick={handleClick}>
            <Link
              to="/contact"
              activeclassname="active"
              className="navbar-links"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
