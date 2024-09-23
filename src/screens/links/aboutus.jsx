import React from "react";
import "./Aboutus.css";
// import about from "../../../Assets/image/about (1).jpg";
const Aboutus = () => {
  return (
    <div className="A">
      <div class="FAQ-imagesection">
        <div class="blackbackFaq"></div>
        <div class="text-content">
          <h6
            style={{
              backgroundColor: "rgba(255, 255, 255, .09)",
              padding: "10px 13px",
            }}
          >
            Home / Aboutus
          </h6>
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="about-container">
        <div className="row">
          <div className="about-text-section col-md-6">
            <h1 class="font-effect-outline">ABOUT</h1>
            <h3 className="about-subtitle">
              We're passionate about helping our users succeed
            </h3>
            <p className="about-description">
              Discover everything about our identity, our principles, and our
              unwavering commitment to passionately assist our users in
              achieving success in their medical exams.
            </p>
            <button className="about-button">Learn More</button>
          </div>

          <div className="about-image-section col-md-6">
            <img
              // src={about}
              src="https://www.secrets4exams.com/images/pages/about.jpg"
              alt="Medical professionals"
              className="about-image2"
            />
            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
