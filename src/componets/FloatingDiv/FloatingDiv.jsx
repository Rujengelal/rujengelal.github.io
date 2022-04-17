import React, { useContext } from "react";
import "./FloatingDiv.css";
import { themeContext } from "../../Context";

function FloatingDiv({ image, text }) {
  const theme = useContext(themeContext);

  return (
    <div className="floating_div">
      <img src={image} alt={text} />
      <span
        style={{
          color: theme.state.darkMode ? "var(--black)" : "",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default FloatingDiv;
