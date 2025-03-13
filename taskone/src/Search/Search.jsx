import React from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaSlidersH,
  FaDownload,
  FaChevronRight,
} from "react-icons/fa";
import "./Search.css";

export default function SearchBar() {
  return (
    <div className="search-container">
      {/* Top Search Section */}
      <div className="search-bar">
        {/* Search Input */}
        <div className="search-input">
          <FaSearch color="#630024" />
          <input type="text" placeholder="Search Vehicle/driver" />
        </div>

        {/* Date Inputs */}
        <div className="date-input">
          <FaCalendarAlt color="#630024" />
          <input type="date" placeholder="Date From" />
        </div>

        <span>To</span>

        <div className="date-input">
          <FaCalendarAlt color="#630024" />
          <input type="date" placeholder="Date To" />
        </div>

        {/* Go Button */}
        <button className="go-button">GO</button>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-btn edit-driver">Edit Driver Info</button>
          <button className="action-btn assign">Assign/Deassign</button>
          <button className="action-btn add">Add</button>
          <button className="action-btn assign-fence">Assign Fence</button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="bottom-btn">
          Overview <FaSlidersH className="icon" />
        </button>
        <button className="bottom-btn">
          Driver Score Card <FaDownload className="icon" />
        </button>
        <button className="bottom-btn">
          Trip History
          <FaChevronRight className="icon" />
        </button>
        <button className="bottom-btn">
          Analytics <FaChevronRight className="icon" />
        </button>
      </div>
    </div>
  );
}
