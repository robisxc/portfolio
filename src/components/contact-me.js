import React, { useState } from "react";
import "../styles/contact-me.css";
import graphics from "../assets/images/graphics.png";
import { contactData } from "../data/contactData";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !subject.trim() || !message.trim()) {
      alert("Please fill in all required fields!");
      return;
    }

    const body = `Name: ${name}

    Message:
    ${message}
  `;

    window.location.href =
      `mailto:robert.subotovic@outlook.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-me">
      <h1>Contact Me!</h1>

      <div className="contact-container">
        <div className="form-section">
          <p>
            I look forward to hearing from you! Whether you are considering a project, have questions about my work, or simply want to discuss design solutions, please do not hesitate to contact me. Let's collaborate and bring your vision to life together!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Enter your name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="Enter your message subject" autoComplete="off" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Share your vision or questions here" autoComplete="off" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <img src={graphics} alt="You Can Find Me" className="contact-image" />
          <div className="contact-icons">
            {contactData.map((contact) => (
              <a
                key={contact.type}
                href={contact.href}
                className="contact-item"
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
              >
                <div className="icon-circle">
                  {contact.icon}
                </div>
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;