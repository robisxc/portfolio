import React from "react";
import { Link } from 'react-router-dom';
import "../styles/home.css";
import photo from "../assets/images/profile_photo.jpg";
import illustration1 from "../assets/images/illustration1.png";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line-esu">I am</span>
          <span className="space-desktop"> </span>
          <br className="break-mobile" />

          <span className="line-name">Robert&nbsp;Subotovič,</span>
          <br className="break-desktop" />

          <span className="line-role highlight-blue">UX/UI Designer</span>
        </h1>
        <p>I enjoy creating visually appealing designs that help express different ideas on the internet. Feel free to browse through my latest work. Let's create something amazing together!</p>
        <div className="buttons">
          <Link to="/projects" className="work-button">
            My Projects
          </Link>
          <a href="/docs/Robert_Subotovic_CV.pdf" className="cv-link" target="_blank" rel="noreferrer">CV<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h14v-6q0-.425.288-.712T20 12t.713.288T21 13v6q0 .825-.587 1.413T19 21zM19 6.4L10.4 15q-.275.275-.7.275T9 15t-.275-.7t.275-.7L17.6 5H15q-.425 0-.712-.288T14 4t.288-.712T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10t-.712-.288T19 9z" /></svg>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={photo} alt="Robert Subotovič" />
      </div>
      <div className="illustration-container">
        <img src={illustration1} alt="Illustration" />
      </div>
    </section>
  );
}

export default Home;