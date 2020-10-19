import React from "react";
import Section from "./Section";
import CustomButton from "./CustomButton";

const Skills = (props) => (
  <Section
    backgroundColor={props.backgroundColor}
    color={props.color}
    showDropdown={props.showDropdown}
  >
    <div className="skills-container">
      <h2>Skills & Accomplishments</h2>
      <div className="container">
        <div className="skills padding">
          <p>
            <strong>Development</strong> - Proficient in HTML, CSS, Javascript,
            React, React Native, Node, Express, MongoDB and Python.
          </p>
          <p>
            <strong>Communication</strong> - Effective communicator in a
            professional setting
          </p>
          <p>
            <strong>Time Management</strong> - Strong ability to manage multiple
            projects at once and meet set deadlines
          </p>
        </div>
        <div className="skills padding">
          <p>
            <strong>Accomplishments</strong>
          </p>
          <ul>
            <li>
              <p>
                Unilever Ice Cream Innovation Accelerator Competition Finalist.
              </p>
            </li>
            <li>
              <p>
                Awarded Petroleum Technology Development Fund Postgraduate
                Scholarship 2018-2019.
              </p>
            </li>
            <li>
              <p>
                Recognised for voluntary service to National Drug Law
                Enforcement Agency for sensitization of students to the dangers
                of drug abuse.
              </p>
            </li>
          </ul>
        </div>
        <div className="skills padding">
          <p>
            <strong>Education</strong>
          </p>
          <ul>
            <li>
              <p>The Web Development Bootcamp</p>
            </li>
            <li>
              <p>The Advanced Web Development Bootcamp</p>
            </li>
            <li>
              <p>The React Native Bootcamp</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <p className="large-text">
          If you are looking for more information or want to see a full resume
          of my jobs and careers, click the button down below to download a PDF
          of all of my career experiences.
        </p>
      </div>
      <div className="content-block">
        <CustomButton
          backgroundColor={props.color}
          color={props.backgroundColor}
          className="large-button"
          href="https://www.google.com"
        >
          Download PDF of Resume
        </CustomButton>
      </div>
    </div>
  </Section>
);

export default Skills;
