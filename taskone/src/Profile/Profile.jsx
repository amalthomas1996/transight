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
              Joined On: <strong>12 May 2020</strong>
            </p>
            <p>
              Added by: <strong>John Doe</strong>
            </p>
            <p>
              Address: <strong>Gurogaon, Lalitpur, Uttar Pradesh</strong>
            </p>
            <p>
              Contact No: <strong>05:30 Am, 12/06/2024</strong>
            </p>
            <p>
              Location: <strong>India</strong>
            </p>
            <p>
              Vehicle Type: <strong>Container Truck</strong>
            </p>
            <p>
              Current Status:
              <span className="status in-trip">
                <strong>
                  <span className="status in-trip">In Trip</span>
                </strong>
              </span>
            </p>
          </div>
          <div className="detail-card">
            <p>
              Experience: <strong>5 Years</strong>
            </p>
            <p>
              Previous Employer: <strong>Fedrick Max</strong>
            </p>
            <p>
              Number of Trips handled: <strong>12</strong>
            </p>
            <p>
              Licence Validity: <strong>12 May 2024</strong>
            </p>
            <p>
              Document:
              <a href="#" className="link">
                View Attachment
              </a>
            </p>
            <p>
              Alternative POC No: <strong>SK264GHSJSS</strong>
            </p>
            <p>
              Show in Map:
              <a href="#" className="link">
                View Location
              </a>
            </p>
          </div>
          <div className="detail-card">
            <p>
              Average Speed: <strong>35Km/h</strong>
            </p>
            <p>
              Escalations: <strong>Fedrick Max</strong>
            </p>
            <p>
              Alert Ratio: <strong>12</strong>
            </p>
            <p>
              Assigned Fence: <strong>MMC</strong>
            </p>
            <p>
              Manager/Owner: <strong>Max Philip</strong>
            </p>
            <p>
              Current/ Latest Trip: <strong>Uttar Pradesh</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
