import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>

      {/* Center: Search Bar */}
      <div className="search-container1">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Right: Notifications & Profile */}
      <div className="navbar-right">
        <button className="notification-btn">
          <span className="notification-badge">2</span> 🔔
        </button>
        <img src={profile} alt="User" className="profile-pic" />
      </div>
    </nav>
  );
}
