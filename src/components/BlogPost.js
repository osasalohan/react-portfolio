import React from "react";
import Section from "./Section";

const BlogPost = (props) => (
  <Section
    backgroundColor={props.backgroundColor}
    color={props.color}
    showDropdown={props.showDropdown}
  >
    <div className="blog-post">
      <div>
        <time>October 1</time> - Written By Osas Alohan
      </div>
      <h1>The Blog Will Go Here</h1>
      <div>
        <p>
          This is where my blog posts will go and what they'll look like as soon
          as I get around to writing them. Yes, they will be a bit lengthier
          than this little write-up here and hopefully much more insightful.
          They will most likely also include fancy and esoteric words like
          acroamatic and well, esoteric.
        </p>
        <p>
          Perhaps by now you've figured out that the only reason this faux post
          is still going on is so I can see what a longer post will look like
          and adjust my styling accordingly. If you haven't then I probably
          should let you know that the only reason this faux post is still going
          on is so that I can see what a longer post looks like and adjust my
          styling accordingly.
        </p>
        <p>
          Yes, I probably could've used dummy text to achieve the same result.
          But if you really think about it, I actually did.
        </p>
      </div>
    </div>
  </Section>
);

export default BlogPost;
