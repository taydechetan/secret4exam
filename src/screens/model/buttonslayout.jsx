import React from "react";
import { Container } from "react-bootstrap";
import "./ButtonsLayout.css";

const Buttonslayout = () => {
  const exams = [
    "MRCS DHONS PART...",
    "MRCS PART A",
    "MRCGP PART 1",
    "MRCEM PRIMARY",
    "MRCEM INTERMEDIATE SBA",
    "MRCOG PART 1",
    "MRCOG PART 2",
    "MRCPCH PART 1...",
    "MRCP PART 1",
    "PLAB 1 Exam",
    "AMC CAT EXAM",
    "USMLE STEP 1",
    "QATAR (IFOM FOR DOCTORS)",
    "CANADA (MCCQE PART...)",
    "UAE (HAAD)",
  ];

  return (
    <Container className="exam-buttons-container">
      <div className="exam-row">
        {exams.map((exam, index) => (
          <div key={index} className="exam-btn-wrapper">
            <button className="exam-btn ms-3">{exam}</button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Buttonslayout;
