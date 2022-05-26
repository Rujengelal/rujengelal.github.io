import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Resume from "../../Rujen-Gelal-cv (2).pdf";
import { themeContext } from "../../Context";

function Intro() {
  const theme = useContext(themeContext);

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              color: theme.state.darkMode ? "white" : "",
            }}
          >
            Hi! I am
          </span>
          <span>Rujen Gelal</span>
        </div>
        <a href={Resume} download>
          <button className="button i-button">Download CV</button>
        </a>
        <div className="i-icons">
          <a target="_blank" href="https://github.com/Rujengelal">
            <img src={Github} alt="Github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rujen-gelal-98904b203/"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          {/* <a href="#">
            <img src={Instagram} alt="Github" />
          </a> */}
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={boy} alt="me" />
        <div style={{ left: "-25%" }}>
          <FloatingDiv image={crown} text="Web Developer" />
        </div>
        <div style={{ bottom: "2rem", right: "0%" }}>
          <FloatingDiv image={crown} text="AI Enthusiast" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
