import React from "react";
import Typewriter from "typewriter-effect";
import "./style.css";

const TypewriterEffect = () => {
  return (
    <div className="typewriterEffect-container">
      <h3 className="typewriterEffect-header">
        Jacqueline <nobr>Walsh - </nobr>
      </h3>
      <Typewriter
        options={{
          strings: ["My Portfolio", "Developer", "Welcome"],
          autoStart: true,
          pauseFor: 1000,
          deleteSpeed: 500,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterEffect;
