import Navbar from "./componets/Navbar/Navbar";
import "./App.css";
import Intro from "./componets/Intro/Intro";
import Portfolio from "./componets/Portfolio/Portfolio";
import Contact from "./componets/Contact/Contact";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Skills from "./componets/Skills/Skills";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  return (
    <div
      className="App"
      style={
        theme.state.darkMode
          ? {
              background: "black",
              color: "white",
            }
          : {}
      }
    >
      <ToastContainer hideProgressBar />
      <Navbar />
      <Intro />
      <Skills />

      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
