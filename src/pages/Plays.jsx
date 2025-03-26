// src/pages/Plays.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const playsData = [
  {
    id: 1,
    title: "The Classic Drama",
    posterUrl: "https://via.placeholder.com/200x300?text=Play+1",
    description: "An engaging performance of a timeless classic.",
  },
  {
    id: 2,
    title: "Modern Twist",
    posterUrl: "https://via.placeholder.com/200x300?text=Play+2",
    description: "A contemporary take on an old favorite.",
  },
  {
    id: 3,
    title: "Comedy Night",
    posterUrl: "https://via.placeholder.com/200x300?text=Play+3",
    description: "Laugh out loud with this hilarious performance.",
  },
  {
    id: 4,
    title: "Musical Extravaganza",
    posterUrl: "https://via.placeholder.com/200x300?text=Play+4",
    description: "A spectacular musical journey on stage.",
  },
];

function Plays() {
  return (
    <Container className="my-4">
      <h2>Plays in Mumbai</h2>
      <Row>
        {playsData.map((play) => (
          <Col key={play.id} md={3} sm={6} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={play.posterUrl} />
              <Card.Body>
                <Card.Title>{play.title}</Card.Title>
                <Card.Text>{play.description}</Card.Text>
                <Link to="/booking" className="btn btn-primary">
                  Book Now
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Plays;
