import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import AboutMe from './components/about-me';
import Projects from './components/projects';
import ProjectDetails from "./components/project-details";
import Services from "./components/services";
import ContactMe from "./components/contact-me";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="app">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact-me" element={<ContactMe />} />
              </Routes>
              <Footer />
            </div>
          }
        />

        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;