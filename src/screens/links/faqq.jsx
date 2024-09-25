import React, { useState, useEffect } from "react";
import "./Faq.css";
import ApiEndPoints from "../../networkcall/Apiendpoint";
import { apiCallNew } from "../../networkcall/apiservises";


const Faqq = () => {
  const [faqs, setFaqs] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await apiCallNew("get", null, ApiEndPoints.Faqq);
        if (response.status === 200) {
          setFaqs(response.data);
        } else {
          setError("Failed to fetch FAQs: " + response.statusText);
        }
      } catch (error) {
        setError("Failed to fetch FAQs: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const toggleAccordion = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="FAQ">
      <div className="FAQ-imagesection">
        <div className="blackbackFaq"></div>
        <div className="text-content">
          <h3>Home / FAQ</h3>
          <h1>FAQ</h1>
        </div>
      </div>
      <div className="containerre faq-accordion">
        <h1 className="text-center mb-5 mt-3">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div
              className="faq-question"
              style={{
                backgroundColor: clickedIndex === index ? "#782a8c" : "#37af6c",
                color: "white",
              }}
              onClick={() => toggleAccordion(index)}
            >
              {faq.title}
              <span className="icon">{clickedIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className={`faq-answer ${clickedIndex === index ? "open" : ""}`}
            >
              <div dangerouslySetInnerHTML={{ __html: faq.details }} />{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqq;
