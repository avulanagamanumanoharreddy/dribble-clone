import React, { useState } from 'react';
import { SearchIcon } from "@heroicons/react/outline";

const navbarContainerStyle = {
  backgroundColor: '#F8F9FA',
  padding: '1.25rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navLinksStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  color: '#606F7B',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
};

navLinksStyle.gap = '40px';
const navLinkItemStyle = {
  marginRight: navLinksStyle.gap,
};

const highlightedNavLinkStyle = {
  ...navLinkItemStyle,
  backgroundColor: '#E5E7EB',
  padding: '0.5rem',
  borderRadius: '5px',
};

const buttonContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center the content horizontally
};

const buttonStyle = {
  backgroundColor: '#FF6B81',
  color: 'white',
  padding: '8px 16px',
  fontSize: '15px',
  fontWeight: 'bold',
  borderRadius: '4px',
};

const highlightedButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#FF6B81',
  color: 'white',
  padding: '8px 16px',
  fontSize: '15px',
  fontWeight: 'bold',
  borderRadius: '4px',
  border: '2px solid #FF6B81', // Thicker border for the selected button
};

const highlight = (text, highlightWords) => {
  const parts = text.split(new RegExp(`(${highlightWords.join('|')})`, 'gi'));
  return (
    <>
      {parts.map((part, index) => (
        highlightWords.includes(part.toLowerCase()) ? (
          <span key={index} style={{ backgroundColor: '#FF6B81', color: 'white', fontWeight: 'bold' }}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      ))}
    </>
  );
};

function Navbar() {
  const [hoveredNavLink, setHoveredNavLink] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <nav style={navbarContainerStyle}>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>𝔇𝔯𝔦𝔟𝔟𝔩𝔢</h2>
      <ul style={navLinksStyle}>
        <li
          style={hoveredNavLink === 'Inspiration' ? highlightedNavLinkStyle : navLinkItemStyle}
          onMouseEnter={() => setHoveredNavLink('Inspiration')}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          {highlight('Inspiration', ['Inspiration'])}
        </li>
        <li
          style={hoveredNavLink === 'Find Work' ? highlightedNavLinkStyle : navLinkItemStyle}
          onMouseEnter={() => setHoveredNavLink('Find Work')}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          {highlight('Find Work', ['Find Work'])}
        </li>
        <li
          style={hoveredNavLink === 'Learn Design' ? highlightedNavLinkStyle : navLinkItemStyle}
          onMouseEnter={() => setHoveredNavLink('Learn Design')}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          {highlight('Learn Design', ['Learn Design'])}
        </li>
        <li
          style={hoveredNavLink === 'Go Pro' ? highlightedNavLinkStyle : navLinkItemStyle}
          onMouseEnter={() => setHoveredNavLink('Go Pro')}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          {highlight('Go Pro', ['Go Pro'])}
        </li>
        <li
          style={hoveredNavLink === 'Marketplace' ? highlightedNavLinkStyle : navLinkItemStyle}
          onMouseEnter={() => setHoveredNavLink('Marketplace')}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          {highlight('Marketplace', ['Marketplace'])}
        </li>
        <li
          style={hoveredNavLink === 'Hire Designers' ? highlightedNavLinkStyle : navLinkItemStyle}
          onMouseEnter={() => setHoveredNavLink('Hire Designers')}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          {highlight('Hire Designers', ['Hire Designers'])}
        </li>
      </ul>
      <div style={buttonContainerStyle}>
        <SearchIcon style={{ height: '1rem', color: '#606F7B' }} />
        <div style={{ marginLeft: '1rem' }}>
          <h3
            style={
              hoveredButton === 'Sign in / Sign up' ? { ...highlightedButtonStyle, cursor: 'pointer' } : { ...buttonStyle, cursor: 'pointer' }
            }
            onMouseEnter={() => setHoveredButton('Sign in / Sign up')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {highlight('Sign in / Sign up', ['Sign in / Sign up'])}
          </h3>
          <button
            style={
              hoveredButton === 'Start a free project' ? highlightedButtonStyle : buttonStyle
            }
            onMouseEnter={() => setHoveredButton('Start a free project')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {highlight('Start a free project', ['Start a free project'])}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;







