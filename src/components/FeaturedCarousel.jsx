import React from "react";

function FeaturedCarousel() {
  return (
    <div className="container my-4"> 
      <div
        id="featuredCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://pyxis.nymag.com/v1/imgs/744/00b/e7a1b3ec0132c5284126636a09c367ed43-13-movie-posters-infographic.1x.rsocial.w1200.jpg"
              className="d-block w-100"
              alt="Featured 1"
            />
          </div>
          
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.l2VQozQFI3pXq9mQpHx1DwAAAA?w=202&h=262&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="d-block w-100"
              alt="Featured 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.OTTQ8Zh2Ok8RvPBG8UIsIAHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="d-block w-100"
              alt="Featured 3"
            />
          </div>
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
    </div>
  );
}

export default FeaturedCarousel;
