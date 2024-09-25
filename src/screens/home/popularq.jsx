// import React, { useState } from "react";
// import "./popularq.css";
// import { TiArrowRight } from "react-icons/ti";
// import Buttonslayout from "../model/buttonslayout";

// const Quiz = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   return (
//     <>
//       <div className="custom-quiz-section">
//         <div className="custom-container">
//           <div className="custom-row align-items-center">
//             <div className="custom-col-md-6">
//               <h1 className="custom-font-outline">Quiz</h1>
//               <h2 className="custom-quiz-subheading">Explore Popular Quiz</h2>
//             </div>
//             <div className="custom-col-md-6 d-flex justify-content-end">
//               <button className="custom-about-button" onClick={handleShowModal}>
//                 More
//                 <TiArrowRight />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <div className="custom-modal-overlay">
//           <div className="custom-modal-content">
//             <div className="custom-modal-header">
//               <button className="custom-modal-close" onClick={handleCloseModal}>
//                 &times;
//               </button>
//             </div>
//             <div className="custom-modal-body">
//               <Buttonslayout />
//             </div>
//             <div className="custom-modal-footer">
//               <button
//                 className="custom-modal-close-btn"
//                 onClick={handleCloseModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Quiz;

import React, { useState } from "react";
import "./popularq.css";
import { TiArrowRight } from "react-icons/ti";
import Buttonslayout from "../model/buttonslayout";
import { apiCallNew } from "../../networkcall/apiservises";
import ApiEndPoints from "../../networkcall/Apiendpoint";

const Quiz = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [error, setError] = useState("");

  const handleShowModal = () => {
    setShowModal(true);
    setLoading(true);

    const fetchQuizData = async () => {
      try {
        const response = await apiCallNew("get", null, ApiEndPoints.categorieslist); 
        if (response.status === 200) {
          setQuizData(response.data);
        } else {
          setError("Failed to fetch quiz data: " + response.statusText);
        }
      } catch (err) {
        setError("Error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData(); 
  };

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
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                quizData.map((quiz, index) => (
                  <div key={index}>
                    <h3>{quiz.title}</h3>
                    <p>{quiz.description}</p>
                  </div>
                ))
              )}
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
