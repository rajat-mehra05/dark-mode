import { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  const handleChange = (e) => {
    e.preventDefault();

    if (color === "black" && bgColor === "white") {
      setColor("white");
      setBgColor("black");
    } else {
      setColor("black");
      setBgColor("white");
    }
  };

  const darkMode = {
    color: color,
    backgroundColor: bgColor,
    height: "150px",
    width: "450px",
    paddingLeft: "1rem"
  };

  return (
    <>
      <div style={darkMode}>
        <h1> This is text </h1>
        <br />
        <button onClick={handleChange}>
          {" "}
          {color === "black" && bgColor === "white"
            ? "Dark Mode"
            : "Light Mode"}{" "}
        </button>
      </div>
    </>
  );
}
