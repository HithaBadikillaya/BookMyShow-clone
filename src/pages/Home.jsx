import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const featured = [
    {
      title: "Blockbuster Premiere",
      image: "https://pyxis.nymag.com/v1/imgs/744/00b/e7a1b3ec0132c5284126636a09c367ed43-13-movie-posters-infographic.1x.rsocial.w1200.jpg",
      description: "Catch the world premiere of the summer blockbuster!",
    },
    {
      title: "Live Concert Extravaganza",
      image: "https://th.bing.com/th/id/OIP.l2VQozQFI3pXq9mQpHx1DwAAAA?w=202&h=262&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "Experience the electrifying live concert of top artists.",
    },
    {
      title: "Stand-Up Comedy Night",
      image: "https://th.bing.com/th/id/OIP.OTTQ8Zh2Ok8RvPBG8UIsIAHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "Laugh out loud with the best comedians.",
    },
  ];

  const recommended = [
    {
      title: "Chhava",
      posterUrl: "https://www.filmibeat.com/img/2022/05/chhava-1652439802.jpeg",
      releaseDate: "2025-05-12",
      rating: 4.5,
      description: "The thrilling sequel to the blockbuster Chhavi.",
      trailerUrl: "https://www.youtube.com/embed/zewGwHyb274?si=1XcewXoBarCdNYpv", 
    },
    {
      title: "Marvel Avengers",
      posterUrl: "https://th.bing.com/th/id/OIP.kYCMhhg_70wNKu1LfOY-LAHaJY?pid=ImgDet&w=179&h=226&c=7&dpr=1.3",
      releaseDate: "2024-11-20",
      rating: 4.7,
      description: "Earth's mightiest heroes unite to face a new threat.",
      trailerUrl: "https://www.youtube.com/embed/eOrNdBpGMv8?si=88SOL7hD4iezDtUL", 
    },
    {
      title: "Mickey 17",
      posterUrl: "https://th.bing.com/th/id/OIP.PzadAlFg6monCnkUEWBPQwHaKX?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      releaseDate: "2026-02-10",
      rating: 4.3,
      description: "A sci-fi adventure on a distant planet.",
      trailerUrl: "https://www.youtube.com/embed/osYpGSz_0i4?si=XR6r8OndBO_dha_0", 
    },
    {
      title: "Officer",
      posterUrl: "https://th.bing.com/th/id/OIP.pzzOmt-x72zv4mbb9q-i-wHaKX?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      releaseDate: "2025-08-01",
      rating: 4.1,
      description: "An intense thriller following a dedicated officer.",
      trailerUrl: "https://www.youtube.com/embed/EoCPtpWmFtc?si=NIY3jLett-2t2VaN", 
    },
  ];

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
    <>
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
