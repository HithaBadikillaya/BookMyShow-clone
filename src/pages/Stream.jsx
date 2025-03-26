// src/pages/Stream.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const streamsData = [
  {
    id: 1,
    title: 'Killing Eye',
    posterUrl: 'https://th.bing.com/th/id/OIP.pcq5Jfmm9zn7By__PTaluQAAAA?rs=1&pid=ImgDetMain',
    description: 'A thrilling psychological drama that keeps you on the edge of your seat.',
    details: {
      releaseDate: '2023-11-10',
      genre: 'Thriller, Drama',
      duration: '1h 45m',
    },
  },
  {
    id: 2,
    title: '1899',
    posterUrl: 'https://th.bing.com/th/id/OIP.IB5V3WDJgs2UI2O4d6w9KQHaNJ?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'A mysterious voyage that unravels hidden secrets in the past.',
    details: {
      releaseDate: '2023-09-15',
      genre: 'Mystery, Historical',
      duration: '2h 10m',
    },
  },
  {
    id: 3,
    title: 'Wednesday',
    posterUrl: 'https://th.bing.com/th/id/OIP.7ACltNCPixH2HYZPZ64cDwHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'A dark and quirky series that explores the life of a peculiar teen.',
    details: {
      releaseDate: '2022-10-12',
      genre: 'Comedy, Horror',
      duration: '45m per episode',
    },
  },
  {
    id: 4,
    title: 'Loki',
    posterUrl: 'https://th.bing.com/th/id/OIP.Ge3VkFpxtIoER_6LeRcfXwHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'Follow the mischievous Loki on his chaotic adventures through time.',
    details: {
      releaseDate: '2021-06-09',
      genre: 'Fantasy, Action',
      duration: '50m per episode',
    },
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
                <Card.Text>
                  <strong>Release Date:</strong> {stream.details.releaseDate}<br />
                  <strong>Genre:</strong> {stream.details.genre}<br />
                  <strong>Duration:</strong> {stream.details.duration}
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

export default Stream;
