import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    if (value === "C") return setInput("");
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput(input + value);
  };
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];
  return (
    <div className="calculator">
      <input type="text" className="display" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
