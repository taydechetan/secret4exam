import React from "react";
import "./pricingplans.css";
import { FaCheck } from "react-icons/fa6";

const PricingPlans = () => {
  const plans = [
    {
      duration: "4 Months",
      price: "$50",
      features: [
        "Pathology qbank",
        "PAST PAPER QUESTION",
        "MRCS PREVIOUS EXAMS 3",
        "MRCS PREVIOUS EXAMS 2 original",
        "MRCS PREVIOUS EXAMS 1 original-1",
        "PRINCIPLE OF SURGERY",
        "Physiology qbank",
        "Anatomy qbank",
      ],
    },
    {
      duration: "8 Months",
      price: "$100",
      features: [
        "Pathology qbank",
        "PAST PAPER QUESTION",
        "MRCS PREVIOUS EXAMS 3",
        "MRCS PREVIOUS EXAMS 2 original",
        "MRCS PREVIOUS EXAMS 1 original-1",
        "PRINCIPLE OF SURGERY",
        "Physiology qbank",
        "Anatomy qbank",
      ],
    },
    {
      duration: "12 Months",
      price: "$120",
      features: [
        "Pathology qbank",
        "PAST PAPER QUESTION",
        "MRCS PREVIOUS EXAMS 3",
        "MRCS PREVIOUS EXAMS 2 original",
        "MRCS PREVIOUS EXAMS 1 original-1",
        "PRINCIPLE OF SURGERY",
        "Physiology qbank",
        "Anatomy qbank",
      ],
    },
  ];

  return (
    <div className="container pricing-plans">
      {plans.map((plan, index) => (
        <div className="plan" key={index}>
          <h3>{plan.duration}</h3>
          <p className="price">{plan.price}</p>
          <button className="buy-button">Buy</button>
          <div className="features">
            <p>
              <strong>Include Exams:</strong>
            </p>
            <hr />
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <FaCheck /> {feature}
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
