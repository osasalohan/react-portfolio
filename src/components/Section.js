import React from "react";

const Section = (props) => (
  <div
    style={{
      backgroundColor: props.backgroundColor,
      color: props.color,
      display: props.showDropdown ? "none" : "block",
    }}
    className="section"
  >
    {props.children}
  </div>
);

export default Section;
