import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import "../assets/faq.css";

const faqs = [
  {
    q: "What is Maidora?",
    a: "Maidora is an online platform that connects customers with trained and verified maids, cleaners, cooks, babysitters, and other household service providers. Users can book, manage, and track services easily through the website.",
  },
  {
    q: "How does Maidora work?",
    a: "Customers browse service categories, Select required service (Full-time, part-time, hourly), View maid profiles and pricing, Book instantly or schedule a visit, Service is delivered at your doorstep",
  },
  {
    q: "How do I book a maid?",
    a: "Fill in your service requirements on the Maidora website. Our system will match you with the best available helper.",
  },
  {
    q: "Can I replace a maid later?",
    a: "Yes, Maidora allows one free replacement if the assigned maid does not meet expectations.",
  },
  {
    q: "Is my personal data secure?",
    a: "Absolutely. Maidora follows strict data protection standards and does not share your personal details without permission.",
  },
  {
    q: "Is Maidora available in my city?",
    a: "Maidora is rapidly expanding. You can check availability during sign-up or while searching for services.",
  },
  {
    q: "How do I book a maid on Maidora?",
    a: "You can book through: Website booking form, “Contact & Request” page, Direct call",
  },
  {
    q: "Are the maids trained and verified?",
    a: "Yes. Every maid goes through: Background verification, Identity verification, Skill assessment, Behavioral evaluation",
  },
  {
    q: "Can I request a replacement maid?",
    a: "Yes. If you are not satisfied, you can request a free replacement within the allowed replacement period.",
  },
  {
    q: "What are the payment options?",
    a: "Customers can pay using: NetBanking, UPI, Credit/Debit",
  },
  {
    q: "What if the maid doesn't show up?",
    a: "You can raise a support ticket, and our team will immediately assign a replacement or reschedule your service.",
  },
  {
    q: "How can I register as a maid?",
    a: "You can apply online through the “Become a Maid” page or visit our nearest onboarding center.",
  },
  {
    q: "Do maids get monthly salaries or daily payment?",
    a: "Payment depends on job type: Monthly jobs → Monthly salary, Part-time → Weekly or monthly, Hourly → Per booking basis",
  },
  {
    q: "How do maids receive their payment?",
    a: "Payments are made through: Direct bank transfer, Cash (if agreed during contract)",
  },
  {
    q: "Does Maidora take commission?",
    a: "Payments are made through: Direct bank transfer, Cash (if agreed during contract)",
  },
  {
    q: "Does Maidora take commission?",
    a: "Maidora charges a small service/commission fee for platform maintenance, marketing, and customer support. It is for only Client and Agent",
  },
  {
    q: "Does Maidora take commission?",
    a: "Maidora charges a small service/commission fee for platform maintenance, marketing, and customer support. It is for only Client and Agent",
  },
  {
    q: "Can I earn by referring maids?",
    a: "Yes. Agents can earn commission for every successfully verified and hired maid.",
  },
  {
    q: "How do I become a partner?",
    a: "Fill the “Partner with Us” or “Become Certified Partner” form. Our team will connect with you.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach the support team by: Creating a support ticket on the Support page, Emailing our helpdesk, Calling the helpline",
  },
  {
    q: "How can I contact support?",
    a: "You can reach the support team by: Creating a support ticket on the Support page, Emailing our helpdesk, Calling the helpline",
  },
  {
    q: "How do I reset my password?",
    a: "Click Forgot Password, enter your register email, and follow instructions to set a new password.",
  },
  {
    q: "Can I delete my Maidora account?",
    a: "If you wish to delete your account, please send an email to us using your registered email address. Once we receive your request, our team will review and verify your details. Your account and associated data will be permanently removed within 24–48 hours, as per our Privacy Policy and after completing any necessary settlements.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. All fees are shown clearly before booking.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. All fees are shown clearly before booking.",
  },
  {
    q: "Do you offer refunds?",
    a: "Refunds are provided in cases such as: Service not delivered, Maid cancellation, Quality issues (after review)",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="faq-page-template">
      <section className="main-title">
        <h4>FAQ</h4>
        <h2>Maidora – Frequently Asked Questions (FAQ)</h2>
      </section>
      <section className="faq-wrapper">
        <div className="faq-container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subheading">
            Everything you need to know about Maidora’s services.
          </p>

          <div className="faq-box">
            {faqs.map((item, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">
                    {active === i ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <div className={`faq-answer ${active === i ? "show" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
