import React, { useState } from "react";
import "./Home.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import About from "./about";
import Popularq from "./popularq";
import Carousal from "./carousal";
import Profile from "./Profile";
import Buttonslayout from "../model/buttonslayout";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="custom-hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="custom-hero-text">
                <h6 className="custom-hero-subtitle">Education Quizz</h6>
                <h1 className="custom-hero-title">
                  Get the Fastest Advantage!
                </h1>
                <p className="custom-hero-description">
                  Prepare with us to enhance your chances of succeeding in your
                  next medical exam.
                </p>

                <button className="selectbutton" onClick={handleShowModal}>
                  Select exam
                  <FaArrowRightLong className="m-1" />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div className="custom-hero-image-container"></div>
            </Col>
          </Row>
        </Container>
      </div>

      <About />
      <Popularq />
      <Carousal />
      <Profile />

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Buttonslayout />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
