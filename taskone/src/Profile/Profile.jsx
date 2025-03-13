import React from "react";
import "./Profile.css";
import profileImage from "../assets/profile1.jpeg";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <span>RANK : #1</span>
        <span>LUCAS PAUL</span>
        <span>KL 17 S 826</span>
      </div>
      <div className="profile-content">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-details">
          <div className="detail-card">
            <p>
              <strong>Joined On:</strong> 12 May 2020
            </p>
            <p>
              <strong>Added by:</strong> John Doe
            </p>
            <p>
              <strong>Address:</strong> Gurogaon, Lalitpur, Uttar Pradesh
            </p>
            <p>
              <strong>Contact No:</strong> 05:30 Am, 12/06/2024
            </p>
            <p>
              <strong>Location:</strong> India
            </p>
            <p>
              <strong>Vehicle Type:</strong> Container Truck
            </p>
            <p>
              <strong>Current Status:</strong>{" "}
              <span className="status in-trip">In Trip</span>
            </p>
          </div>
          <div className="detail-card">
            <p>
              <strong>Experience:</strong> 5 Years
            </p>
            <p>
              <strong>Previous Employer:</strong> Fedrick Max
            </p>
            <p>
              <strong>Number of Trips handled:</strong> 12
            </p>
            <p>
              <strong>Licence Validity:</strong> 12 May 2024
            </p>
            <p>
              <strong>Document:</strong>{" "}
              <a href="#" className="link">
                View Attachment
              </a>
            </p>
            <p>
              <strong>Alternative POC No:</strong> SK264GHSJSS
            </p>
            <p>
              <strong>Show in Map:</strong>{" "}
              <a href="#" className="link">
                View Location
              </a>
            </p>
          </div>
          <div className="detail-card">
            <p>
              <strong>Average Speed:</strong>{" "}
              <span className="value">35Km/h</span>
            </p>
            <p>
              <strong>Escalations:</strong> Fedrick Max
            </p>
            <p>
              <strong>Alert Ratio:</strong> 12
            </p>
            <p>
              <strong>Assigned Fence:</strong> MMC
            </p>
            <p>
              <strong>Manager/Owner:</strong> Max Philip
            </p>
            <p>
              <strong>Current/ Latest Trip:</strong> Uttar Pradesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
