import React, { useState } from 'react';
import './Header.css'; // Add custom styles here

function Header({ grouping, sorting, onGroupingChange, onSortingChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="display-button">
        {/* Button to trigger dropdown */}
        <button onClick={toggleDropdown} className="dropdown-trigger">
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"/></svg>
          Display 
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
       

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="grouping">
              <label className="text-label">Grouping </label>
              <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="sorting">
              <label className="text-label">Ordering </label>
              <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
