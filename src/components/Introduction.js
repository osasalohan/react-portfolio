import React from "react";
import sampleImage from "../nick-wessaert-unsplash.jpg";

const Introduction = (props) => (
  <div
    style={{
      backgroundColor: props.backgroundColor,
      color: props.color,
      display: props.showDropdown ? "none" : "flex",
    }}
    className="center"
  >
    <div className="text-container">
      <h2>Hi, I'm Osas</h2>
      <h4>
        I am a software developer who likes to make web and mobile apps using
        React, React Native and Node.
      </h4>
      <h4>
        I also like to take pictures from time to time, write about tech and
        stuff that interests me, as well as share different projects I’m working
        on.
      </h4>
    </div>
    <div className="img-container">
      <img src={sampleImage} alt="Osas Alohan" />
    </div>
  </div>
);

export default Introduction;
