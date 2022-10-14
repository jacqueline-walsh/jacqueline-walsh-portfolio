import React from "react";
import { technicalSkills } from "../../data/technical";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-heading">About Me</h1>
      <h3 className="about-subheading">PROFILE</h3>
      <p className="about-paragraph">
        I was originally born in Yorkshire, United Kingdom and relocated to
        Jersey Channel Islangs in the late 80's where I began a career in
        Finance. In 2005 I moved to my current home in Galway, Ireland where I
        took a parental break to raising my two children.
      </p>
      <p className="about-paragraph">
        While taking a parental break I studied extensively the field of
        Software Development and after gaining many qualifications I returned to
        work in 2021 to work for Oracle in Dublin as a Member of the Technical
        Team.
      </p>
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
        When not working I enjoy photography, meeting freinds and working out at
        the local gym and taking myself into an unknown story from a book
      </p>
      <hr className="about-horizontal-rule" />
    </div>
  );
};

export default About;
