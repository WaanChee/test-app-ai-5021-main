import React from "react";
import "../js/toggler.js";
import "../css/styles-about.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title display-1">About Us</h1>
      </header>
      <div className="about-content">
        <div className="about-image">
          <img
            src={require("../img/company.png")}
            alt="Company meeting"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="about-details">
          <h2 className="about-subtitle">#1 Value-for-Money Coding School</h2>
          <p className="about-description">
            Job or 100% Free. We pride ourselves on helping complete beginners
            become full-stack software developers in just 3 months. Land a job
            in tech, earn a promotion, start freelancing, or simply automate the
            boring tasks in your life. Join us and gain the skills to build
            real-world tech solutions. Your future starts today.
          </p>
          <h3 className="about-mission">
            We Help You Transform Your Life with Tech
          </h3>
          <p className="about-vision">
            Empowering you with hands-on, real-world knowledge, our mission is
            to guide you toward success in the tech industry.
          </p>
          <div className="about-cta">
            <button className="btn btn-primary btn-lg">Learn More</button>
            <button className="btn btn-outline-secondary btn-lg">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
