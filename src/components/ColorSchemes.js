import React from "react";
import Section from "./Section";
import CustomButton from "./CustomButton";

const ColorSchemes = (props) => {
  const changeColorScheme = (e) => {
    props.changeColorScheme(e.target.id);
  };

  return (
    <Section
      backgroundColor={props.backgroundColor}
      color={props.color}
      showDropdown={props.showDropdown}
    >
      <div className="color-scheme padding">
        <div>
          <h2>Choose A Color Scheme</h2>
        </div>
        <div className="scheme-buttons">
          <CustomButton
            backgroundColor={props.color}
            color={props.backgroundColor}
            id="achromatic"
            onClick={changeColorScheme}
          >
            Achromatic
          </CustomButton>
          <CustomButton
            backgroundColor={props.color}
            color={props.backgroundColor}
            id="cerulean"
            onClick={changeColorScheme}
          >
            Cerulean
          </CustomButton>
          <CustomButton
            backgroundColor={props.color}
            color={props.backgroundColor}
            id="vibrant"
            onClick={changeColorScheme}
          >
            Vibrant
          </CustomButton>
        </div>
      </div>
    </Section>
  );
};

export default ColorSchemes;
