import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Section from "./Section";

const BlogList = (props) => {
  let match = useRouteMatch();

  return (
    <Section
      backgroundColor={props.backgroundColor}
      color={props.color}
      showDropdown={props.showDropdown}
    >
      <div>
        <div className="blog padding">
          <div>
            <time>01/10/2020</time>
            <h1>The Blog Will Go Here</h1>
          </div>
          <Link to={`${match.url}/the-blog-will-go-here`} className="link">
            Read More
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default BlogList;
