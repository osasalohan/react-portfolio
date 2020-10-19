import React from "react";

const CustomButton = (props) => (
  <button
    style={{ backgroundColor: props.backgroundColor, color: props.color }}
    className={`button ${props.className}`}
    id={props.id}
    href={props.href}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default CustomButton;
