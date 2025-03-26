// src/components/MovieCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ title, posterUrl, releaseDate, rating, description }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Pass the movie title to the booking page
    navigate("/booking", { state: { movieName: title } });
  };

  return (
    <div className="card shadow h-100">
      <img src={posterUrl} alt={title} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        {/* Movie title: centered and bold */}
        <h5 className="card-title text-center fw-bold">{title}</h5>

        {/* Additional movie details */}
        <p className="text-center mb-1">
          <strong>Release Date:</strong> {releaseDate}
        </p>
        <p className="text-center mb-1">
          <strong>Rating:</strong> {rating}
        </p>
        <p className="text-center">{description}</p>

        {/* Book Now button at the bottom */}
        <button className="btn btn-primary mt-auto" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
