// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            © {new Date().getFullYear()} BookMyShow Clone. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
