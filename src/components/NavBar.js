import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const NavBar = (props) => {
  // const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let Nav = document.querySelector(".Navbar");

    const offset = window.scrollY;
    if (offset > Nav.offsetHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // const handleBurgerToggle = () => {
  //   setShowDropdown((showDropdown) => !showDropdown);
  // };

  const style = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  };

  return (
    <div
      style={style}
      className={`Navbar ${props.showDropdown && "Navbar__Pop"} ${
        scrolled && "scrolled"
      }`}
    >
      <div className="Navbar__Responsive">
        <div className="Navbar__Link-brand">
          <Link to="/">Osas Alohan</Link>
        </div>
        <div
          className="Navbar__Link Navbar__Link-toggle"
          onClick={props.handleBurgerToggle}
        >
          {props.showDropdown ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
      <nav
        className={`Navbar__Items Navbar__Items--right ${
          props.showDropdown && "Navbar__ToggleShow"
        }`}
      >
        <div className="Navbar__Link">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="Navbar__Link">
          <a href="#" target="_blank">
            Projects
          </a>
        </div>
        <div className="Navbar__Link">
          <a href="#" target="_blank">
            Contact
          </a>
        </div>
        <div className="Navbar__Link__Social">
          <div className="socials">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="socials">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
