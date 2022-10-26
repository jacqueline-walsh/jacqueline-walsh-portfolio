import React from "react";
import Profile from "../../components/profile";
import Logo from "../../components/logo";
import { technicalSkills } from "../../data/technical";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-heading">About Me</h1>
      <Profile />
      <hr className="about-horizontal-rule" />
      <h3 className="about-subheading">LINKS</h3>
      <p className="about-paragraph">
        Checkout my LinkedIn profile and Github repository links below to see
        some of the personal projects I have created. A full resume can be
        provided on request.
      </p>

      <div className="about-profile-links-container">
        <Logo
          logoLink="https://www.linkedin.com/in/jacquelinewalsh/"
          imageSrc="https://www.kindpng.com/picc/m/206-2062823_imagem-png-linkedin-transparent-png.png"
          alt="linkedIn link"
        />
        <Logo
          logoLink="https://github.com/jacqueline-walsh/"
          imageSrc="https://www.kindpng.com/picc/m/128-1280187_github-logo-png-github-transparent-png.png"
          alt="Github Logo link"
        />
      </div>
      <hr className="about-horizontal-rule" />
      <h3 className="about-subheading">EDUCATION</h3>
      <p className="about-paragraph">
        2021 - Software Engineering - National University in Galway, Ireland -
        1st Class honours
      </p>
      <p className="about-paragraph">
        2019 - Diploma Full Stack Development - Code Institute - 1st Class
        honours
      </p>
      <p className="about-paragraph">
        2018 - HDip Sicience in Computing (Software Development) - National
        College of Ireland - 1st Class honours
      </p>
      <p className="about-paragraph">
        2016 - BSc Digital Technology & Design (Coding Stream) - Dublin
        Institute of Technology - Distinction
      </p>

      <hr className="about-horizontal-rule" />
      <h3 className="about-subheading">TECHNICAL SKILLS</h3>
      {technicalSkills.map((technical) => {
        return (
          <div className="about-technical-container" key={technical.id}>
            <div className="about-techical-title">{technical.title}</div>
            <div className="about-technical-description">
              {technical.description}
            </div>
          </div>
        );
      })}
      <hr className="about-horizontal-rule" />
      <h3 className="about-subheading">INTERESTS</h3>
      <p className="about-paragraph">
        When not working I enjoy photography, meeting friends and working out at
        the local gym and taking myself into an unknown story from a book
      </p>
      <hr className="about-horizontal-rule" />
    </div>
  );
};

export default About;
