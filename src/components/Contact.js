import React from "react";
import Section from "./Section";

const Contact = (props) => (
  <Section
    backgroundColor={props.backgroundColor}
    color={props.color}
    showDropdown={props.showDropdown}
  >
    <div className="contact-container padding">
      <div className="contact">
        <h2>Contact Info</h2>
        <div>
          <p className="large-text">
            If you want to contact me via email, drop me a link at{" "}
            <a href="#" className="link">
              me@osasalohan.com
            </a>
          </p>
          <p className="large-text">
            On Twitter you can find me{" "}
            <a href="#" className="link">
              @osasalohan
            </a>
          </p>
          <p className="large-text">
            Or on LinkedIn, you can find me{" "}
            <a href="#" className="link">
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
