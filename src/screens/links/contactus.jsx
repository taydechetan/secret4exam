import React from "react";
import "./Contactus.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";
import { AiTwotoneMail } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import Profile from "../home/Profile";

const inputStyle = {
  border: "none",
  borderRadius: "0",
  margin: "10px 0 20px 20px",
  background: "#ececec",
  padding: "20px",
  height: "50px",
  width: "50px",
  fontsize: "20px",
  width: "calc(100% - 40px)",
};

const iconStyle = {
  padding: "10px",
  backgroundColor: "#782a8c",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px",
  color: "#fff",
};

const textareaStyle = {
  ...inputStyle,
  height: "100px",
  marginBottom: "30px",
};

const onChange = () => {};

const Contact = () => {
  return (
    <>
      <Container>
        <div className="Contactpage">
          <div class="contACTimagesection">
            <div class="blackbackCONTACT"></div>
            <div class="text-content">
              <h3>Home /Contactus</h3>
              <h1>Contactus</h1>
            </div>
          </div>
        </div>
        <Row className="my-4">
          <Col md={4}>
            <h5>Get in touch with us</h5>
            <h1>Ask for your query</h1>
            <div className="contact-info">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <p style={iconStyle}>
                    <CiLocationOn />
                  </p>
                </div>
                <div className="d-flex flex-column">
                  <h6>Address</h6>
                  <span>UAE</span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div style={iconStyle}>
                  <SiWhatsapp />
                </div>

                <div>
                  <a>Call Anytime:</a>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div style={iconStyle}>
                  <AiTwotoneMail />
                </div>
                <div className="d-flex flex-column">
                  <h6>Email</h6>
                  mailto:<span>info@secrets4exams.com</span>
                </div>
              </div>
            </div>
          </Col>

          <Col md={8}>
            <h4>Contact us</h4>
            <Form className="border">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      style={inputStyle}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      style={inputStyle}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      placeholder="Phone No."
                      style={inputStyle}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      style={inputStyle}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  style={textareaStyle}
                />
              </Form.Group>

              <div className="ms-3">
                <ReCAPTCHA
                  sitekey="6Leqz0oqAAAAACwLISiUw7LV3xhNHMNB3gmt7REq"
                  onChange={onChange}
                />
              </div>

              <button type="submit" className="btncont ms-3 mb-3 mt-2">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Profile />
    </>
  );
};

export default Contact;
