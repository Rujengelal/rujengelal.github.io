import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Rujen</div>

        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link to="app" spy={true} smooth={true}>
              <li>Home</li>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
              <li>Skills</li>
            </Link>
            <Link to="portfolio" spy={true} smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true} className="button">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
