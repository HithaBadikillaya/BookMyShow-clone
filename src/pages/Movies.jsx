// src/pages/Movies.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const moviesData = [
  {
    id: 1,
    title: "Marvel Avengers",
      posterUrl: "https://th.bing.com/th/id/OIP.kYCMhhg_70wNKu1LfOY-LAHaJY?pid=ImgDet&w=179&h=226&c=7&dpr=1.3",
      description: "Earth's mightiest heroes unite to face a new threat.",
      trailerUrl: "https://www.youtube.com/embed/eOrNdBpGMv8?si=88SOL7hD4iezDtUL", 
  },
  {
    id: 2,
    title: "Officer",
      posterUrl: "https://th.bing.com/th/id/OIP.pzzOmt-x72zv4mbb9q-i-wHaKX?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "An intense thriller following a dedicated officer.",
      trailerUrl: "https://www.youtube.com/embed/EoCPtpWmFtc?si=NIY3jLett-2t2VaN", 
  },
  {
    id: 3,
    title: "Mickey 17",
      posterUrl: "https://th.bing.com/th/id/OIP.PzadAlFg6monCnkUEWBPQwHaKX?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A sci-fi adventure on a distant planet.",
      trailerUrl: "https://www.youtube.com/embed/osYpGSz_0i4?si=XR6r8OndBO_dha_0", 
  }
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
      <h2>Trending Movies</h2>
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
