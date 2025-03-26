import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  // Sample data for carousel and recommended cards
  const featured = [
    {
      title: "Blockbuster Premiere",
      image: "https://via.placeholder.com/1200x400.png?text=Featured+Movie",
      description: "Catch the world premiere of the summer blockbuster!",
    },
    {
      title: "Live Concert Extravaganza",
      image: "https://via.placeholder.com/1200x400.png?text=Live+Concert",
      description: "Experience the electrifying live concert of top artists.",
    },
    {
      title: "Stand-Up Comedy Night",
      image: "https://via.placeholder.com/1200x400.png?text=Comedy+Night",
      description: "Laugh out loud with the best comedians.",
    },
  ];

  const recommended = [
    {
      title: "Chhavi 2",
      posterUrl: "https://via.placeholder.com/200x300.png?text=Chhavi+2",
      releaseDate: "2025-05-12",
      rating: 4.5,
      description: "The thrilling sequel to the blockbuster Chhavi.",
      trailerUrl: "https://www.youtube.com/embed/trailer-for-chhavi2", // Unique trailer link
    },
    {
      title: "Marvel Avengers",
      posterUrl: "https://via.placeholder.com/200x300.png?text=Avengers",
      releaseDate: "2024-11-20",
      rating: 4.7,
      description: "Earth's mightiest heroes unite to face a new threat.",
      trailerUrl: "https://www.youtube.com/embed/trailer-for-avengers", // Unique trailer link
    },
    {
      title: "Mickey 17",
      posterUrl: "https://via.placeholder.com/200x300.png?text=Mickey+17",
      releaseDate: "2026-02-10",
      rating: 4.3,
      description: "A sci-fi adventure on a distant planet.",
      trailerUrl: "https://www.youtube.com/embed/trailer-for-mickey17", // Unique trailer link
    },
    {
      title: "Officer",
      posterUrl: "https://via.placeholder.com/200x300.png?text=Officer",
      releaseDate: "2025-08-01",
      rating: 4.1,
      description: "An intense thriller following a dedicated officer.",
      trailerUrl: "https://www.youtube.com/embed/trailer-for-officer", // Unique trailer link
    },
  ];

  // State for handling trailer modal
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  // Function to open the trailer modal
  const openTrailerModal = (url) => {
    setTrailerUrl(url);
    setShowTrailer(true);
  };

  // Function to close the trailer modal
  const closeTrailerModal = () => {
    setTrailerUrl("");
    setShowTrailer(false);
  };

  return (
    <>
      {/* Carousel Section */}
      <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {featured.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#featuredCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {featured.map((item, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img
                src={item.image}
                className="d-block w-100"
                alt={item.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h5 className="fw-bold">{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#featuredCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#featuredCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Recommended Cards Section */}
      <div className="container my-4">
        <h3 className="text-center mb-4">Recommended for You</h3>
        <div className="row">
          {recommended.map((movie, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="card shadow h-100">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center fw-bold">{movie.title}</h5>
                  <p className="card-text text-center">
                    <small>
                      Release: {movie.releaseDate} <br />Rating: {movie.rating}
                    </small>
                  </p>
                  <p className="card-text">{movie.description}</p>
                  <div className="d-flex justify-content-between mt-auto">
                    <Link to="/booking" className="btn btn-primary">
                      Book Now
                    </Link>
                    <button
                      className="btn btn-secondary"
                      onClick={() => openTrailerModal(movie.trailerUrl)}
                    >
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Trailer</h5>
                <button type="button" className="btn-close" onClick={closeTrailerModal}></button>
              </div>
              <div className="modal-body">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={trailerUrl}
                    title="Movie Trailer"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
