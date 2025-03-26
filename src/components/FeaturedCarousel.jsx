import React from "react";

function FeaturedCarousel() {
  return (
    <div className="container my-4"> {/* Add container and some margin */}
      <div
        id="featuredCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <img
              src="https://via.placeholder.com/1200x300.png?text=Featured+Movie+1"
              className="d-block w-100"
              alt="Featured 1"
            />
          </div>
          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1200x300.png?text=Featured+Movie+2"
              className="d-block w-100"
              alt="Featured 2"
            />
          </div>
          {/* Carousel Item 3 */}
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1200x300.png?text=Featured+Movie+3"
              className="d-block w-100"
              alt="Featured 3"
            />
          </div>
        </div>

        {/* Carousel Controls */}
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
    </div>
  );
}

export default FeaturedCarousel;
