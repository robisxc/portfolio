import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" /></svg>}
      </div>

      <Link to="/" className="logo">
        <img src={logo} alt="rdesign" />
      </Link>

      <nav className="nav-desktop">
        <ul className="nav-links">
          <li>
            <NavLink to="/about-me" className={({ isActive }) => isActive ? "active-link" : ""}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>
              Services
            </NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/contact-me" className="contact-desktop">
        <button className="contact-button">Contact Me!</button>
      </Link>

      {menuOpen && (
        <nav className="nav-menu">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/about-me"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Services
              </NavLink>
            </li>
          </ul>
          <Link to="/contact-me" onClick={() => setMenuOpen(false)}>
            <button className="contact-button">Contact Me!</button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;