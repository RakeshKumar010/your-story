import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const About = () => {
  return (
    <div className="aboutMain p-top">
      <div className="about">
        <h1 className="aboutH1">About</h1>
        <p className="aboutPara">
          Hi, Welcome 👋 <br /> Your Story is an platform where world listen
          your stories, Some stories deserves world attention so therefore we
          came up with shareherestory where you can read and publish your own
          stories
        </p>
        <a
          href="https://www.linkedin.com/in/rakesh-kumar-146238220/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedAbout"
        >
          Follow On LinkedIn
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default About;
