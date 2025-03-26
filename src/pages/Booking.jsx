// src/pages/Booking.jsx
import React, { useState } from "react";

function Booking() {
  // State for seat selection
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Define seat rows (A-E) and columns (1-6)
  const rows = ["A", "B", "C", "D", "E"];
  const cols = [1, 2, 3, 4, 5, 6];

  // Toggle seat selection
  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  // States for booking form
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booked Successfully!
Selected Seats: ${selectedSeats.join(", ")}
Name: ${name}`
    );
  };

  return (
    <div className="container my-5">
      <div className="card shadow rounded p-4">
        <h2 className="text-center mb-4">Confirm Booking</h2>

        {/* Seat Selection Section */}
        <div className="mb-4">
          <h4 className="mb-3">Select Your Seats</h4>
          <div className="d-flex flex-column align-items-center">
            {rows.map((row) => (
              <div key={row} className="d-flex mb-2">
                {cols.map((col) => {
                  const seatId = `${row}${col}`;
                  const isSelected = selectedSeats.includes(seatId);
                  return (
                    <button
                      key={seatId}
                      className={`btn me-1 ${isSelected ? "btn-primary" : "btn-outline-primary"}`}
                      onClick={() => toggleSeat(seatId)}
                    >
                      {seatId}
                    </button>
                  );
                })}
              </div>
            ))}
            <p className="mt-3">
              <strong>Selected Seats:</strong>{" "}
              {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="form-control"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="expiry" className="form-label">
                Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                id="expiry"
                className="form-control"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="form-control"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-3">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
