import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const eventsData = [
  {
    id: 1,
    title: "Music Fiesta",
    posterUrl: "https://th.bing.com/th/id/OIP.iNHs6-ywP4YwGvKf9aDICAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Enjoy an evening of electrifying performances.",
    location: "Mumbai Arena",
    timings: "7:00 PM - 10:00 PM",
  },
  {
    id: 2,
    title: "Art Exhibition",
    posterUrl: "https://th.bing.com/th/id/OIP.Or6IS9S6PZcvT7UCbf9Q4gHaKe?w=202&h=286&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Explore contemporary art from renowned artists.",
    location: "Gallery of Modern Art",
    timings: "10:00 AM - 5:00 PM",
  },
  {
    id: 3,
    title: "Food Carnival",
    posterUrl: "https://th.bing.com/th/id/OIP.4GGvI9Wb4CN1lpT-hMD9GQHaKY?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Taste a variety of cuisines and enjoy live performances.",
    location: "City Park",
    timings: "12:00 PM - 8:00 PM",
  },
  {
    id: 4,
    title: "Tech Conference",
    posterUrl: "https://th.bing.com/th/id/OIP.hn_q9qZLpGidBkHmwXOIFAHaJl?w=202&h=262&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
