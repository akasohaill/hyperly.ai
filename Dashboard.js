// Dashboard.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentCreation from './ContentCreation';
import Features from './FeatureSection';
import Testimonials from './TestimonialSection';
import Pricing from './PricingSection';


import './App.css'

const Dashboard = () => {
  return (
    <Container>

      <Row>
        <Col>
          <h2>Welcome to Hyperly Dashboard</h2>
        </Col>
      </Row>
      <ContentCreation />
      <Features />
      <Testimonials/>
      <Pricing />
     
      

    </Container>
  );
};

export default Dashboard;
