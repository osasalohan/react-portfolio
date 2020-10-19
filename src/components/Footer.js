import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

const Footer = (props) => (
  <Section
    backgroundColor={props.backgroundColor}
    color={props.color}
    showDropdown={props.showDropdown}
  >
    <div>
      <div className="padding">
        <hr />
      </div>
      <div className="footer-links">
        <p className="large-text">
          <Link to="/blog">
            <strong>Blog</strong>
          </Link>
        </p>
        <p className="large-text">
          <a href="#" target="_blank">
            <strong>Projects</strong>
          </a>
        </p>
        <p className="large-text">
          <a href="#" target="_blank">
            <strong>Media</strong>
          </a>
        </p>
        <p className="large-text">
          <a href="#" target="_blank">
            <strong>Contact</strong>
          </a>
        </p>
      </div>
    </div>
  </Section>
);

export default Footer;
