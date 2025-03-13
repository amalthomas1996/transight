import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" />
        <span>Transight</span>
      </div>

      {/* Center: Search Bar */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Right: Notifications & Profile */}
      <div className="navbar-right">
        <button className="notification-btn">
          <span className="notification-badge">2</span> 🔔
        </button>
        <img src="/profile.png" alt="User" className="profile-pic" />
      </div>
    </nav>
  );
}
