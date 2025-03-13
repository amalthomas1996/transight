import React from "react";
import "./AddDirver.css";
import { useNavigate } from "react-router-dom";

export default function AddDriver() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Driver added successfully!");
    navigate("/");
  };

  return (
    <div className="add-driver-container">
      <div className="form-card">
        <h2>Add New Driver</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter Name" required />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" placeholder="Enter Contact" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" required />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter Address" required></textarea>
          </div>

          <div className="form-group">
            <label>Vehicle Type</label>
            <select required>
              <option value="">Select Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
              <option value="Bus">Bus</option>
            </select>
          </div>

          <div className="form-group">
            <label>License Number</label>
            <input type="text" placeholder="Enter License No" required />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Save
            </button>
            <button
              type="button"
              className="close-btn"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
