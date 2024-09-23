import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center">
            <img
              src="https://www.secrets4exams.com/images/logo/1688115011app_img2.png"
              alt="download"
              className="download-image img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="head">
              Download our mobile app for easy course access.
            </h2>
            <h6 className="head">
              New updated Qbank for pre and post graduates in healthcare.
            </h6>
            <div className="image-social">
              <a href="#">
                <img
                  src="https://www.secrets4exams.com/images/logo/1688116112google_store%20(1).png"
                  alt="Google Play"
                  className="social-image"
                />
              </a>
              <a href="#">
                <img
                  src="https://www.secrets4exams.com/images/logo/1688115011apple_store.png"
                  alt="Apple Store"
                  className="social-image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
