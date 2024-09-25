import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about-container">
      <div className="row">
        <div className="about-image-section col-md-6">
          <img
            src="https://www.secrets4exams.com/images/pages/about.jpg"
            alt="Medical professionals"
            className="about-image"
          />
        </div>
        <div className="about-text-section col-md-6">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple"></link>
          <h1 class="font-effect-outline">ABOUT</h1>
          <h3 className="about-subtitle">
            We're passionate about helping our users succeed
          </h3>
          <p className="about-description">
            Discover everything about our identity, our principles, and our
            unwavering commitment to passionately assist our users in achieving
            success in their medical exams.
          </p>

          <Link to="/aboutus">
            <button className="about-button">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
