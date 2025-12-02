import React from "react";
import "../assets/pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      features: [
        "Up to 10 Leads",
        "Email Support",
        "Basic Dashboard Access",
        "Standard Verification"
      ],
      highlight: false,
    },
    {
      name: "Standard",
      price: "₹1,999",
      period: "/month",
      features: [
        "Up to 50 Leads",
        "Priority Email Support",
        "Full Dashboard Access",
        "Advanced Verification",
      ],
      highlight: true,
    },
    {
      name: "Advanced",
      price: "₹3,999",
      period: "/month",
      features: [
        "Up to 150 Leads",
        "Priority Phone Support",
        "Analytics & Insights",
        "Faster Lead Distribution",
      ],
      highlight: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Leads",
        "Dedicated Account Manager",
        "Custom Integrations",
        "API Access",
        "White-Label Solutions",
      ],
      highlight: false,
    }
  ];

  return (
    <div className="pricing-section">
      <h2 className="pricing-header">Agent Pricing Plans</h2>
      <p className="pricing-subtext">
        Transparent, flexible, and designed to grow with you.
      </p>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div key={i} className={`price-card ${plan.highlight ? "highlight" : ""}`}>
            <h3>{plan.name}</h3>
            <p className="price">
              {plan.price} <span>{plan.period}</span>
            </p>

            <ul className="features">
              {plan.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>

            <button className="select-btn">
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
