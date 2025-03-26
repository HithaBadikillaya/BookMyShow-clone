// src/pages/Offers.jsx
import React from "react";
import { Link } from "react-router-dom";

function Offers() {
  // Array for offer cards
  const offersList = [
    {
      title: "Early Bird Discount",
      image: "https://via.placeholder.com/300x200.png?text=Early+Bird",
      description: "Get 20% off when you book your tickets 30 days in advance.",
      validTill: "2024-09-30",
    },
    {
      title: "Combo Offer",
      image: "https://via.placeholder.com/300x200.png?text=Combo+Offer",
      description: "Book 2 tickets and get 1 free—perfect for a night out!",
      validTill: "2024-10-15",
    },
    {
      title: "Student Special",
      image: "https://via.placeholder.com/300x200.png?text=Student+Special",
      description: "Enjoy an extra 15% discount with a valid student ID.",
      validTill: "2024-12-31",
    },
    {
      title: "Festival Fiesta",
      image: "https://via.placeholder.com/300x200.png?text=Festival+Fiesta",
      description: "Celebrate the season with amazing discounts on event tickets.",
      validTill: "2024-11-25",
    },
  ];

  // Array for promotional posters
  const posterList = [
    {
      title: "Mega Offer",
      image: "https://via.placeholder.com/400x250.png?text=Mega+Offer",
    },
    {
      title: "Super Savings",
      image: "https://via.placeholder.com/400x250.png?text=Super+Savings",
    },
    {
      title: "Unbeatable Deals",
      image: "https://via.placeholder.com/400x250.png?text=Unbeatable+Deals",
    },
  ];

  return (
    <div className="container my-4">
      {/* Full-Width Banner */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/1200x300.png?text=Exciting+Offers+Banner"
          alt="Offers Banner"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Promotional Posters Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Special Posters</h2>
        <div className="row">
          {posterList.map((poster, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow rounded border-0">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">
                    {poster.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offers Cards Section */}
      <h2 className="text-center mb-4">Exciting Offers</h2>
      <div className="row">
        {offersList.map((offer, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow rounded border-0">
              <img
                src={offer.image}
                alt={offer.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">
                  {offer.title}
                </h5>
                <p className="card-text">{offer.description}</p>
                <p className="card-text text-center">
                  <small className="text-muted">
                    Valid Till: {offer.validTill}
                  </small>
                </p>
                <Link to="/booking" className="btn btn-primary d-block">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
