import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h1 style={{ backgroundColor: "firebrick" }}>About</h1>
      <h2>About Me</h2>
      <p>
        <img src={image} alt="I made this" />
      </p>
    </div>
  );
}

export default About;
