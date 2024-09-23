import React, { useState } from "react";
import "./popularq.css";
import { TiArrowRight } from "react-icons/ti";
import Buttonslayout from "../model/buttonslayout";

const Quiz = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="custom-quiz-section">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="custom-col-md-6">
              <h1 className="custom-font-outline">Quiz</h1>
              <h2 className="custom-quiz-subheading">Explore Popular Quiz</h2>
            </div>
            <div className="custom-col-md-6 d-flex justify-content-end">
              <button className="custom-about-button" onClick={handleShowModal}>
                More
                <TiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content">
            <div className="custom-modal-header">
              <button className="custom-modal-close" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="custom-modal-body">
              <Buttonslayout />
            </div>
            <div className="custom-modal-footer">
              <button
                className="custom-modal-close-btn"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
