import React from 'react';
import './Styles/Pricing.css'

const PricingSection = () => {
  return (
    <div className="pricing-section">
      <h2>Choose Your Plan</h2>
      <div className="plan">
        <h3>Basic</h3>
        <p>$19/month</p>
        <ul>
          <li>Personalized content creation</li>
          <li>Basic engagement tools</li>
          {/* Add more features based on the plan */}
        </ul>
        <button>Select Plan</button>
      </div>
      <div className="plan">
        <h3>Premium</h3>
        <p>$39/month</p>
        <ul>
          <li>Advanced content creation</li>
          <li>Advanced engagement tools</li>
          {/* Add more features based on the plan */}
        </ul>
        <button>Select Plan</button>
      </div>
      {/* Add more plans as needed */}
    </div>
  );
};

export default PricingSection;
