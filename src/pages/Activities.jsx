// src/pages/Activities.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const activitiesData = [
  {
    id: 1,
    title: "River Cruise",
    posterUrl: "https://via.placeholder.com/200x300?text=River+Cruise",
    description: "Enjoy a scenic cruise along Mumbai's coastline.",
    location: "Marine Drive",
    timings: "5:00 PM - 7:00 PM",
  },
  {
    id: 2,
    title: "Heritage Walk",
    posterUrl: "https://via.placeholder.com/200x300?text=Heritage+Walk",
    description: "Explore the rich history of Mumbai on foot.",
    location: "Colaba",
    timings: "10:00 AM - 1:00 PM",
  },
  {
    id: 3,
    title: "Food Tour",
    posterUrl: "https://via.placeholder.com/200x300?text=Food+Tour",
    description: "Taste the authentic flavors of Mumbai.",
    location: "Bandra",
    timings: "12:00 PM - 3:00 PM",
  },
  {
    id: 4,
    title: "Street Art Tour",
    posterUrl: "https://via.placeholder.com/200x300?text=Street+Art+Tour",
    description: "Discover vibrant street art and local culture.",
    location: "Versova",
    timings: "4:00 PM - 6:00 PM",
  },
];

function Activities() {
  return (
    <Container className="my-4">
      <h2>Activities in Mumbai</h2>
      <Row>
        {activitiesData.map((activity) => (
          <Col key={activity.id} md={3} sm={6} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={activity.posterUrl} />
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Text>{activity.description}</Card.Text>
                <Card.Text>
                  <strong>Location:</strong> {activity.location}
                </Card.Text>
                <Card.Text>
                  <strong>Timings:</strong> {activity.timings}
                </Card.Text>
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

export default Activities;
