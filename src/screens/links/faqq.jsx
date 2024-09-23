import React, { useState } from "react";
import "./Faq.css";
const Faqq = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const faqs = [
    { question: "How do I log in?", answer: "You can log in by..." },
    {
      question: "What do I do if I've forgotten my password?",
      answer:
        "Click LOGIN in the top menu bar of the website, then click the 'Forgotten password?' link, which will generate an automatic email. If you don’t receive a new password, please check your junk/spam folders.",
    },
    {
      question: "I've not received a password reset email, what do I do?",
      answer:
        "Click LOGIN in the top menu bar of the website, then enter your email address and password. The password field is case sensitive. Once complete, click 'Start Studying' and you'll be taken straight into your subscription.",
    },
    {
      question:
        "Why am I getting a message saying 'Invalid Credentials' when I try to log in?",
      answer:
        "Your email and password must match exactly with the details you registered with us. The password field is case sensitive, and symbols such as @ may appear on different keys depending on the computer you are using. If you have copied and pasted the password, please double check it does not add an additional space at the beginning or end. If you would like to reset your password, please click the 'Forgotten password?' link in the menu bar.",
    },
    {
      question: "How do I change my password to something more memorable?",
      answer:
        "Check that the email address you've entered is the one linked to your Pastest account. If you don't receive a reset password email, please check your junk/spam folders. It may also be the case that your account has been blocked due to too many failed login attempts. Contact us if you do not receive a reset password email.",
    },
    {
      question: "How do I change my email address?",
      answer: "Go to account settings and...",
    },
  ];

  const toggleAccordion = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="FAQ">
      <div class="FAQ-imagesection">
        <div class="blackbackFaq"></div>
        <div class="text-content">
          <h3>Home / FAQ</h3>
          <h1>FAQ</h1>
        </div>
      </div>
      <div className="containerre faq-accordion">
        <h1 className="text-center mb-5 mt-3">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              style={{
                backgroundColor: clickedIndex === index ? "#782a8c" : "#37af6c",
                color: "white",
              }}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="icon">{clickedIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className={`faq-answer ${clickedIndex === index ? "open" : ""}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqq;
