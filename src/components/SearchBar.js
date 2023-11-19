import React, { useState } from 'react';

const searchBarContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end', // Align items to the bottom
};

const searchBarStyle = {
  padding: '8px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'row', // Change to row direction
  alignItems: 'center', // Center items vertically
  justifyContent: 'flex-end', // Align items to the right
  marginTop: '10px', // Add top margin for spacing
};

const inputStyle = {
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  marginLeft: '8px', // Add left margin for spacing between icon and input
};

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // Pass the term to the parent component for handling search
    handleSearch(term);
  };

  return (
    <div style={searchBarContainerStyle}>
      <div style={searchBarStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search by tags..."
          value={searchTerm}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </div>
    </div>
  );
};

export default SearchBar;
