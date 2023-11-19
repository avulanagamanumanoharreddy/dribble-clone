// Main.js
import React from 'react';
import img1 from "../img/img1.jpg";
import styled from 'styled-components'; // Import the styled function

// Define your styled components
const RelativeContainer = styled.div`
  position: relative;
  height: 600px;
  overflow: hidden;
`;

const OverlayContainer = styled.div`
  position: absolute;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  margin-top: 50px;

  h1 {
    background: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #cc33ff);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 16px;
  }

  p {
    background: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #cc33ff);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1rem;
    margin-bottom: 16px;
  }

  button {
    margin-top: -10px;
    background-color: #ff4081;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #ff005b;
  }
`;

const BlackOverlay = styled.div`
  background-color: black;
  position: absolute;
  opacity: 0.7;
  width: 100%;
  height: 100%;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

function Main() {
  return (
    <RelativeContainer>
      <OverlayContainer>
        <h1>A graphic designer and partner at Pentagram, Scher is recognized for her work in branding and environmental graphic design.</h1>
        <p>Dribbble reigns supreme as the epicenter for the world's foremost design virtuosos, setting the stage for innovation and inspiration</p>
        <button>Sign up</button>
      </OverlayContainer>
      <BlackOverlay />
      <ResponsiveImage src={img1} alt="" />
    </RelativeContainer>
  );
}

export default Main;
