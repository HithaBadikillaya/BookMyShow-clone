// src/pages/Sports.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const sportsData = [
  {
    id: 1,
    title: "Cricket Match: Mumbai vs Delhi",
    posterUrl: "https://via.placeholder.com/200x300?text=Cricket",
    description: "Catch the thrilling showdown between Mumbai and Delhi as they battle for supremacy in the cricket arena.",
  },
  {
    id: 2,
    title: "Football League: Mumbai United",
    posterUrl: "https://via.placeholder.com/200x300?text=Football",
    description: "Experience the passion and excitement of the football league with Mumbai United taking center stage.",
  },
  {
    id: 3,
    title: "Tennis Open: Indian Open",
    posterUrl: "https://via.placeholder.com/200x300?text=Tennis",
    description: "Watch top tennis players battle it out in the high-stakes Indian Open tournament.",
  },
  {
    id: 4,
    title: "Badminton Championship",
    posterUrl: "https://via.placeholder.com/200x300?text=Badminton",
    description: "Get ready for fast-paced action at the Badminton Championship featuring top players from around the world.",
  },
];

function Sports() {
  return (
    <Container className="my-4">
      <h2>Sports in Mumbai</h2>
      <Row>
        {sportsData.map((sport) => (
          <Col key={sport.id} md={3} sm={6} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={sport.posterUrl} />
              <Card.Body>
                <Card.Title>{sport.title}</Card.Title>
                <Card.Text>{sport.description}</Card.Text>
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

export default Sports;
