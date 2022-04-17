import React, { useContext } from "react";
import "./Toggle.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { themeContext } from "../../Context";
function Toggle() {
  const theme = useContext(themeContext);
  return (
    <div className="toggle" onClick={() => theme.dispatch({ type: "toggle" })}>
      <BsMoon />
      <BsSun />
      <div
        className="t-button"
        style={
          theme.state.darkMode
            ? {
                right: "0px ",
              }
            : {
                left: "0px",
              }
        }
      ></div>
    </div>
  );
}

export default Toggle;
