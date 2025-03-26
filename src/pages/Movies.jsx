// src/pages/Movies.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const moviesData = [
  {
    id: 1,
    title: "Movie Title 1",
    posterUrl: "https://via.placeholder.com/200x300?text=Movie+1",
    description: "Short description or details for movie 1.",
    trailerUrl: "https://www.youtube.com/embed/trailer-for-movie1",
  },
  {
    id: 2,
    title: "Movie Title 2",
    posterUrl: "https://via.placeholder.com/200x300?text=Movie+2",
    description: "Short description or details for movie 2.",
    trailerUrl: "https://www.youtube.com/embed/trailer-for-movie2",
  },
  {
    id: 3,
    title: "Movie Title 3",
    posterUrl: "https://via.placeholder.com/200x300?text=Movie+3",
    description: "Short description or details for movie 3.",
    trailerUrl: "https://www.youtube.com/embed/trailer-for-movie3",
  },
  {
    id: 4,
    title: "Movie Title 4",
    posterUrl: "https://via.placeholder.com/200x300?text=Movie+4",
    description: "Short description or details for movie 4.",
    trailerUrl: "https://www.youtube.com/embed/trailer-for-movie4",
  },
];

function Movies() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const openTrailerModal = (url) => {
    setTrailerUrl(url);
    setShowTrailer(true);
  };

  const closeTrailerModal = () => {
    setTrailerUrl("");
    setShowTrailer(false);
  };

  return (
    <Container className="my-4">
      <h2>Movies in Mumbai</h2>
      <Row>
        {moviesData.map((movie) => (
          <Col key={movie.id} md={3} sm={6} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={movie.posterUrl} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Link to="/booking" className="btn btn-primary">
                    Book Now
                  </Link>
                  <Button
                    variant="secondary"
                    onClick={() => openTrailerModal(movie.trailerUrl)}
                  >
                    Watch Trailer
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Trailer Modal */}
      <Modal show={showTrailer} onHide={closeTrailerModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              src={trailerUrl}
              title="Movie Trailer"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Movies;
