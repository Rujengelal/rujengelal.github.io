import React, { useContext } from "react";
import "./Skills.css";
import html5 from "../../img/html5.png";
import css3 from "../../img/css3.png";
import nodejs from "../../img/nodejs.png";
import javascript from "../../img/javascript.png";
import react from "../../img/react.png";
import { themeContext } from "../../Context";

function Skills() {
  const theme = useContext(themeContext);

  return (
    <div className="skills">
      <span
        style={{
          color: theme.state.darkMode ? "white" : "",
        }}
      >
        Technologies That I Use
      </span>
      <div className="s-techs">
        <img src={html5} alt="html5" />
        <img src={css3} alt="css3" />
        <img src={nodejs} alt="nodejs" />
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
      </div>
    </div>
  );
}

export default Skills;
