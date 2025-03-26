// src/pages/Stream.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const streamsData = [
  {
    id: 1,
    title: 'Stream 1',
    posterUrl: 'https://via.placeholder.com/200x300?text=Stream+1',
    description: 'Short details about stream 1.',
  },
  {
    id: 2,
    title: 'Stream 2',
    posterUrl: 'https://via.placeholder.com/200x300?text=Stream+2',
    description: 'Short details about stream 2.',
  },
  {
    id: 3,
    title: 'Stream 3',
    posterUrl: 'https://via.placeholder.com/200x300?text=Stream+3',
    description: 'Short details about stream 3.',
  },
  {
    id: 4,
    title: 'Stream 4',
    posterUrl: 'https://via.placeholder.com/200x300?text=Stream+4',
    description: 'Short details about stream 4.',
  },
];

function Stream() {
  return (
    <Container className="my-4">
      <h2>Stream on BookMyShow</h2>
      <Row>
        {streamsData.map((stream) => (
          <Col key={stream.id} md={3} sm={6} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={stream.posterUrl} />
              <Card.Body>
                <Card.Title>{stream.title}</Card.Title>
                <Card.Text>{stream.description}</Card.Text>
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

export default Stream;
