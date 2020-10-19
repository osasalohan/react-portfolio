import React from "react";
import NavBar from "./NavBar";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import ColorSchemes from "./ColorSchemes";
import Colors from "../constants/colors";

const Home = (props) => (
  <div>
    <NavBar
      backgroundColor={Colors[props.colorScheme].accent}
      color={Colors[props.colorScheme].primary}
      handleBurgerToggle={props.handleBurgerToggle}
      showDropdown={props.showDropdown}
    />
    <Introduction
      backgroundColor={Colors[props.colorScheme].accent}
      color={Colors[props.colorScheme].primary}
      showDropdown={props.showDropdown}
    />
    <Skills
      backgroundColor={Colors[props.colorScheme].primary}
      color={Colors[props.colorScheme].accent}
      showDropdown={props.showDropdown}
    />
    <Projects
      backgroundColor={Colors[props.colorScheme].accent}
      color={Colors[props.colorScheme].primary}
      showDropdown={props.showDropdown}
    />
    <Contact
      backgroundColor={Colors[props.colorScheme].primary}
      color={Colors[props.colorScheme].accent}
      showDropdown={props.showDropdown}
    />
    <ColorSchemes
      backgroundColor={Colors[props.colorScheme].accent}
      color={Colors[props.colorScheme].primary}
      changeColorScheme={props.changeColorScheme}
      showDropdown={props.showDropdown}
    />
  </div>
);

export default Home;
