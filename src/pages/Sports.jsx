import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const sportsData = [
  {
    id: 1,
    title: "Cricket Match: Mumbai vs Delhi",
    posterUrl: "https://th.bing.com/th/id/OIP.njB_sZD0UydwNgbCRG_aHQHaKk?w=202&h=288&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Catch the thrilling showdown between Mumbai and Delhi as they battle for supremacy in the cricket arena.",
  },
  {
    id: 2,
    title: "Football League: Mumbai United",
    posterUrl: "https://uflnewshub.com/wp-content/uploads/2024/01/UFL_8_TEAM_KEYART_FOX_B.jpg",
    description: "Experience the passion and excitement of the football league with Mumbai United taking center stage.",
  },
  {
    id: 3,
    title: "Tennis Open: Indian Open",
    posterUrl: "https://th.bing.com/th/id/OIP.6h69R7Tfw6psrR6YuZvyIAHaKX?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Watch top tennis players battle it out in the high-stakes Indian Open tournament.",
  },
  {
    id: 4,
    title: "Badminton Championship",
    posterUrl: "https://www.insidesport.in/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-25-at-9.36.57-AM.jpeg",
    description: "Get ready for fast-paced action at the Badminton Championship featuring top players from around the world.",
  },
];

function Sports() {
  return (
    <Container className="my-4">
      <h2>Sports</h2>
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
