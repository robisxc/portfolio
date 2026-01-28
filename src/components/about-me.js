import React from "react";
import "../styles/about-me.css";
import illustration2 from "../assets/images/illustration2.png";
import { skillsData } from "../data/skillsData";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-top">
        <section className="about-section">
          <h1>About Me</h1>

          <p>
            I am a fourth-year student of Multimedia Design at VILNIUS TECH,
            interested in creative and innovative solutions.
            I pay particular attention to UX/UI design and website development.
            I am constantly improving my technical skills and learning new programming languages.
          </p>
        </section>

        <div className="illustration-wrapper">
          <img src={illustration2} alt="Illustration" />
        </div>
      </div>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-icons">
          {skillsData.map((skill) => (
            <div className="skill" key={skill.title}>
              <div className="icon-placeholder">
                <img src={skill.img} alt={skill.alt} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;