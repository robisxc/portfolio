import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/projects.css";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const projectsList = Object.entries(projectsData).map(([slug, p]) => ({
    slug,
    title: p.title,
    category: p.categories,
    image: p.images?.[0],
    description: p.descriptions?.[0]
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    if (currentIndex < projectsList.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      
      <div className="projects-controls">
        <button
          className="carousel-btn prev"
          onClick={prevProject}
          disabled={currentIndex === 0}
          aria-label="Ankstesnis projektas"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
            />
          </svg>
        </button>

        <button
          className="carousel-btn next"
          onClick={nextProject}
          disabled={currentIndex === projectsList.length - 1}
          aria-label="Kitas projektas"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
            />
          </svg>
        </button>
      </div>

      <div className="projects-carousel">
        <div
          className="projects-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projectsList.map((project) => (
            <div className="projects-slide" key={project.slug}>
              <div className="project-card-horizontal">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image-horizontal"
                />

                <div className="project-details-horizontal">
                  <div className="project-categories-horizontal">
                    {project.category.map((cat, i) => (
                      <span className="category-horizontal" key={i}>
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h2>{project.title}</h2>
                  <p className="project-card-description">{project.description}</p>

                  <Link to={`/projects/${project.slug}`}>
                    <button className="read-more-horizontal">
                      See More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;