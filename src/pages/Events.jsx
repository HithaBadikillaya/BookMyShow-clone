// src/pages/Events.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const eventsData = [
  {
    id: 1,
    title: "Music Fiesta",
    posterUrl: "https://via.placeholder.com/200x300?text=Music+Fiesta",
    description: "Enjoy an evening of electrifying performances.",
    location: "Mumbai Arena",
    timings: "7:00 PM - 10:00 PM",
  },
  {
    id: 2,
    title: "Art Exhibition",
    posterUrl: "https://via.placeholder.com/200x300?text=Art+Exhibition",
    description: "Explore contemporary art from renowned artists.",
    location: "Gallery of Modern Art",
    timings: "10:00 AM - 5:00 PM",
  },
  {
    id: 3,
    title: "Food Carnival",
    posterUrl: "https://via.placeholder.com/200x300?text=Food+Carnival",
    description: "Taste a variety of cuisines and enjoy live performances.",
    location: "City Park",
    timings: "12:00 PM - 8:00 PM",
  },
  {
    id: 4,
    title: "Tech Conference",
    posterUrl: "https://via.placeholder.com/200x300?text=Tech+Conference",
    description: "Join industry experts to discuss the future of technology.",
    location: "Convention Center",
    timings: "9:00 AM - 4:00 PM",
  },
];

function Events() {
  return (
    <Container className="my-4">
      <h2>Events in Mumbai</h2>
      <Row>
        {eventsData.map((event) => (
          <Col key={event.id} md={3} sm={6} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.posterUrl} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>
                  <strong>Location:</strong> {event.location}
                </Card.Text>
                <Card.Text>
                  <strong>Timings:</strong> {event.timings}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Events;
