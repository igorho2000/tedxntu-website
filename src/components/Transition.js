import React from "react";
import "./Transition.css";

export default function Transition() {
  return (
    <div
      className="transition"
      style={{ animation: "disappear 0.3s linear 2s forwards" }}
    >
      <img src="./nav/no-dot.png" alt="transition logo" />
      <span></span>
    </div>
  );
}
