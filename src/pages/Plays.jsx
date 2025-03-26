import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const playsData = [
  {
    id: 1,
    title: "Hamilton",
    posterUrl: "https://th.bing.com/th/id/OIP.TpZrnn0WAbSdEBOquCltxgHaLc?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "An engaging performance of a timeless classic.",
  },
  {
    id: 2,
    title: "Modern Twist",
    posterUrl: "https://th.bing.com/th/id/OIP.zApr_Il9PnLu144pHvFZ6wHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "A contemporary take on an old favorite.",
  },
  {
    id: 3,
    title: "Sea bird",
    posterUrl: "https://th.bing.com/th/id/OIP.XX3oNKh70Tmp1pZvxi6dowHaKf?w=202&h=286&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Laugh out loud with this hilarious performance.",
  },
  {
    id: 4,
    title: "Man of la mancha",
    posterUrl: "https://th.bing.com/th/id/OIP.njB_sZD0UydwNgbCRG_aHQHaKk?w=202&h=288&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "A spectacular musical journey on stage.",
  },
];

function Plays() {
  return (
    <Container className="my-4">
      <h2>Popular Plays</h2>
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
