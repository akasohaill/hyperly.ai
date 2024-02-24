import React from 'react';
import './Styles/Testimonial.css'

const TestimonialSection = () => {
  return (
    <div className="testimonials-section">
      <h2>What Our Users Say</h2>
      <div className="testimonial">
        <p>"Hyperly.ai has transformed how we engage with our prospects. Highly recommended!"</p>
        <span>- John Doe, Sales Manager at XYZ Corp</span>
      </div>
      <div className="testimonial">
        <p>"The personalized content creation tools provided by Hyperly.ai are top-notch."</p>
        <span>- Jane Smith, CEO of ABC Inc</span>
      </div>
      {/* Add more testimonials as needed */}
    </div>
  );
};

export default TestimonialSection;
