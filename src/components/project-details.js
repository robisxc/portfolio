import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/project-details.css";
import { projectsData } from "../data/projectsData";

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const project = projectsData[slug];

    const images = useMemo(() => project?.images ?? [], [project]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((i) => i + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((i) => i - 1);
        }
    };

    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    const imageWidth = isMobile ? 400 : 900;
    const gap = isMobile ? 24 : 40;

    if (!project) {
        return (
            <div className="page-container">
                <button className="close-btn" onClick={() => navigate("/projects")}>
                    Uždaryti
                </button>
                <h1 className="page-title">Projektas nerastas</h1>
            </div>
        );
    }

    return (
        <>
            <button className="close-btn" onClick={() => navigate("/projects")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                    />
                </svg>
            </button>

            <div className="page-container">
                <h1 className="page-title">{project.title}</h1>

                {project.descriptions.map((text, i) => (
                    <p className="page-description" key={i}>
                        {text}
                    </p>
                ))}

                <div className="carousel-controls">
                    <button
                        className="carousel-btn prev"
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
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
                        onClick={nextSlide}
                        disabled={currentIndex === images.length - 1}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="carousel-container">
                    <div className="carousel">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentIndex * (imageWidth + gap)}px)`
                            }}
                        >
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`slide ${index + 1}`}
                                    className="carousel-image"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;