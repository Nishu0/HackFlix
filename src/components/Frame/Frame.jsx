import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./style.css";

export const Frame = ({ className, vector = "/img/vector-3.png", href }) => {
  let url = "https://forms.gle/DbFPpGt2rdYbdvB29";
  return (
    <div className={`frame ${className}`}>
      <img className="vector" alt="Vector" src={vector} />
      <div className="nav">
        <a href=""><Link to="about" smooth={true} className="navbar-button">ABOUT</Link></a>
        <a href=""><Link to="mentors" smooth={true} className="navbar-button">MENTORS</Link></a>
        <a href=""><Link to="sponsors" smooth={true} className="navbar-button">SPONSORS</Link></a>
        <a href=""><Link to="venue" smooth={true} className="navbar-button">VENUE</Link></a>
        <a href=""><Link to="contact" smooth={true} className="navbar-button">CONTACT</Link></a>
        <div className="span" />
        <a href=""><Link to="team" smooth={true} className="navbar-button">TEAM</Link></a>
        <a className="register-wrapper" href={url} rel="noopener noreferrer" target="_blank">
          <div className="register">REGISTER</div>
        </a>
      </div>
    </div>
  );
};

Frame.propTypes = {
  vector: PropTypes.string,
  href: PropTypes.string,
};
