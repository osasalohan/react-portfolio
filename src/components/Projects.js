import React from "react";
import Section from "./Section";
import CustomButton from "./CustomButton";

const Projects = (props) => (
  <Section
    backgroundColor={props.backgroundColor}
    color={props.color}
    showDropdown={props.showDropdown}
  >
    <div className="projects-container">
      <div className="content-block">
        <h2>Here is a sample of my current projects</h2>
      </div>
      <div className="container">
        <div className="project">
          <h4>Inspire Idaho</h4>
          <p>
            I am currently the Lead Mentor for the App Development portion of
            Inspire Idaho, a non-profit program for adults to learn how to code
            mobile apps using Swift and Xcode. Check out the site here!
          </p>
          <CustomButton
            backgroundColor={props.color}
            color={props.backgroundColor}
          >
            Inspire Idaho
          </CustomButton>
        </div>
        <div className="project">
          <h4>Sage RPG</h4>
          <p>
            Sage RPG is a tabletop role playing game management tool for
            Dungeon/Game Masters to keep track of their campaigns. You can check
            it out by going to my projects, or hitting the button.
          </p>
          <CustomButton
            backgroundColor={props.color}
            color={props.backgroundColor}
          >
            Sage RPG
          </CustomButton>
        </div>
        <div className="project">
          <h4>Watch Wash</h4>
          <p>
            An Independant watchOS app for keeping track of your handwashing and
            running a timer. Sadly, I couldn’t release it, so instead I made it
            open source. Github link below.
          </p>
          <CustomButton
            backgroundColor={props.color}
            color={props.backgroundColor}
          >
            WatchWash Github
          </CustomButton>
        </div>
        <div className="project">
          <h4>Scan Speak</h4>
          <p>
            My WWDC 2020 Swift Student Submission. Scan Speak was designed to
            let you scan a series of text using your camera and have it speak
            back to you. You can check it out on GitHub.
          </p>
          <CustomButton
            backgroundColor={props.color}
            color={props.backgroundColor}
          >
            Scan Speak Github
          </CustomButton>
        </div>
      </div>
      <div className="padding">
        <hr />
      </div>
    </div>
  </Section>
);

export default Projects;
