import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Ensure correct import path

const menuContainerStyle = {
  backgroundColor: '#F8F9FA',
  padding: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '20vh',
  gap: '1rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

const buttonsRowContainerStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: '8px',
};

const buttonStyle = {
  padding: '0.5rem',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s, border 0.3s',
  marginRight: '5px',
};

const selectedButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#ff4081',
  color: 'white',
  fontWeight: 'bold',
  border: '2px solid #ff4081',
};

const popularAndFiltersButtonStyle = {
  ...buttonStyle,
  padding: '12px 18px',
  borderRadius: '5px',
  fontWeight: 'bold',
  border: '1px solid #000',
  backgroundColor: 'transparent',
};

const searchBarContainerStyle = {
  margin: 'auto',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
  border: "red",
  borderRadius: '5px',
};

const searchInputStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  border: '2px solid #ccc',
  borderRadius: '5px',
  width: '100%',
  marginRight: '8px',
};

const searchButtonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const searchButtonHoverStyle = {
  backgroundColor: '#0056b3',
};

const menuItems = [
  'All',
  'Animation',
  'Branding',
  'Illustration',
  'Mobile',
  'Print',
  'Product Design',
  'Typography',
  'Web Design',
];

const highlight = (text, highlightWords) => {
  const parts = text.split(new RegExp(`(${highlightWords.join('|')})`, 'gi'));
  return (
    <>
      {parts.map((part, index) => (
        highlightWords.includes(part.toLowerCase()) && !menuItems.includes(part) ? (
          <span key={index} style={{ backgroundColor: '#ff005b', color: 'white', fontWeight: 'bold' }}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      ))}
    </>
  );
};

function Menu() {
  const [activeButton, setActiveButton] = useState(null);
  const [viewMode, setViewMode] = useState('popularity');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isSearchButtonHovered, setIsSearchButtonHovered] = useState(false);

  const handleButtonClick = (button) => {
    setActiveButton(button);

    if (button === 'Popular' || button === 'New' || button === 'Net Worthy') {
      setViewMode(button.toLowerCase());
    } else if (button === 'Filters') {
      console.log('Show random filters');
      setActiveButton(null);
    } else {
      console.log(`Show content for category: ${button}`);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setActiveButton(null);
  };

  return (
    <div style={menuContainerStyle}>
      <div style={buttonsRowContainerStyle}>
        <button
          style={activeButton === 'Popular' ? selectedButtonStyle : hoveredButton === 'Popular' ? { ...popularAndFiltersButtonStyle, border: '2px solid black' } : popularAndFiltersButtonStyle}
          onClick={() => handleButtonClick('Popular')}
          onMouseEnter={() => setHoveredButton('Popular')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {highlight('Popular', ['Popular'])}
        </button>
        <button
          style={activeButton === 'New' ? selectedButtonStyle : hoveredButton === 'New' ? { ...popularAndFiltersButtonStyle, border: '2px solid black' } : popularAndFiltersButtonStyle}
          onClick={() => handleButtonClick('New')}
          onMouseEnter={() => setHoveredButton('New')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {highlight('New', ['New'])}
        </button>
        <button
          style={activeButton === 'Net Worthy' ? selectedButtonStyle : hoveredButton === 'Net Worthy' ? { ...popularAndFiltersButtonStyle, border: '2px solid black' } : popularAndFiltersButtonStyle}
          onClick={() => handleButtonClick('Net Worthy')}
          onMouseEnter={() => setHoveredButton('Net Worthy')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {highlight('Net Worthy', ['Net Worthy'])}
        </button>
        <button
          style={activeButton === 'Filters' ? selectedButtonStyle : hoveredButton === 'Filters' ? { ...popularAndFiltersButtonStyle, border: '2px solid black' } : popularAndFiltersButtonStyle}
          onClick={() => handleButtonClick('Filters')}
          onMouseEnter={() => setHoveredButton('Filters')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {highlight('Filters', ['Filters'])}
        </button>
        {menuItems.map((item, index, array) => (
          <React.Fragment key={index}>
            <button
              style={activeButton === item ? selectedButtonStyle : hoveredButton === item ? { ...buttonStyle, border: '2px solid black' } :
                (item === 'Filters' || item === 'Popular' || item === 'New' || item === 'Net Worthy'
                  ? popularAndFiltersButtonStyle
                  : buttonStyle
                )}
              onClick={() => handleButtonClick(item)}
              onMouseEnter={() => setHoveredButton(item)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {highlight(item, ['All', 'Animation', 'Branding', 'Illustration', 'Mobile', 'Print', 'Product Design', 'Typography', 'Web Design'])}
            </button>
            {index !== array.length - 1 && <span>&nbsp;</span>}
          </React.Fragment>
        ))}
      </div>
      <div style={searchBarContainerStyle}>
        <input
          type="text"
          placeholder="Search..."
          style={searchInputStyle}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          style={{
            ...searchButtonStyle,
            ...(isSearchButtonHovered && searchButtonHoverStyle),
          }}
          onMouseEnter={() => setIsSearchButtonHovered(true)}
          onMouseLeave={() => setIsSearchButtonHovered(false)}
        >
          Search
        </button>
      </div>
      {viewMode === 'popularity' && <div>Content by Popularity</div>}
      {viewMode === 'new' && <div>Content by New</div>}
      {viewMode === 'net worthy' && <div>Content by Net Worthy</div>}
      {activeButton !== 'Filters' && activeButton !== null && (
        <div>Content for category: {activeButton}</div>
      )}
      {searchTerm && <div>Search results for: {searchTerm}</div>}
    </div>
  );
}

export default Menu;








