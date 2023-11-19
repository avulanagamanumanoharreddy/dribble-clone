import React, { useState, useEffect } from 'react';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';

const projectContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '10px',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
};

const projectStyle = {
  width: '300px',
  height: '270px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px', // Add margin to create a gap between projects
};

const imageStyle = {
  width: '100%', // Set the width to 100% to make it responsive
  height: '150px', // Set the desired height
  objectFit: 'cover',
  borderRadius: '8px 8px 0 0',
};

const textContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '8px',
  flexGrow: 1,
};

const nameContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const nameStyle = {
  fontWeight: 'bold',
  color: 'black',
  fontSize: '15px',
};

const teamBadgeStyle = {
  backgroundColor: 'gray',
  color: 'white',
  padding: '2px',
  fontSize: '10px',
  fontWeight: 'bold',
  borderRadius: '4px',
  marginLeft: '2px',
};

const likeViewStyle = (index) => ({
  fontSize: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '70%',
  background: index % 2 === 0 ? '#f5f5f5' : '#e0e0e0',
  padding: '8px',
  borderRadius: '0 0 8px 8px',
});

const likeIconStyle = {
  marginRight: '2px',
};



const getRandomNumber = () => Math.floor(Math.random() * 1000);

const initialProjects = [
  { img: img2, name: 'Project 1', team: 'Team A', likes: getRandomNumber(), views: getRandomNumber() },
  { img: img3, name: 'project 2', team: 'Team B', likes: getRandomNumber(), views: getRandomNumber() },
  { img: img4, name: 'Project 3', team: 'Team C', likes: getRandomNumber(), views: getRandomNumber() },
  { img: img5, name: 'Project 4', team: 'Team D', likes: getRandomNumber(), views: getRandomNumber() },
  { img: img6, name: 'Project 5', team: 'Team E', likes: getRandomNumber(), views: getRandomNumber() },
  { img: img7, name: 'Project 6', team: 'Team F', likes: getRandomNumber(), views: getRandomNumber() },
];

// ... (previous code remains unchanged)

function Project() {
  const [projects, setProjects] = useState([]);
  const [likedProjects, setLikedProjects] = useState([]);

  useEffect(() => {
    // Sort the projects based on likes and views
    const sortedProjects = [...initialProjects].sort((a, b) => {
      const aScore = a.likes + a.views;
      const bScore = b.likes + b.views;
      return bScore - aScore; // Sort in descending order based on total score
    });

    setProjects(sortedProjects);
  }, [likedProjects]);

  const handleLikeClick = (index) => {
    const newLikedProjects = likedProjects.includes(index)
      ? likedProjects.filter((likedIndex) => likedIndex !== index)
      : [...likedProjects, index];

    setLikedProjects(newLikedProjects);
  };

  return (
    <div style={projectContainerStyle}>
      <div style={rowStyle}>
        {[projects[0], projects[1], projects[2]].map((project, index) => (
          <div key={index} style={projectStyle}>
            {/* Check if the project is defined before accessing its properties */}
            {project && (
              <>
                <img src={project.img} alt="" style={imageStyle} />
                <div style={textContainerStyle}>
                  <div style={nameContainerStyle}>
                    <div>
                      <h3 style={nameStyle}>{project.name}</h3>
                      <h3 style={teamBadgeStyle}>{project.team}</h3>
                    </div>
                    <div style={likeViewStyle(index)}>
                      <span style={likeIconStyle} onClick={() => handleLikeClick(index)}>
                        {likedProjects.includes(index) ? '❤️' : '👍'}
                      </span>
                      <span>Likes: {project.likes}</span>
                      <span style={likeIconStyle}>👀</span>
                      <span>Views: {project.views}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div style={rowStyle}>
        {[projects[3], projects[4], projects[5]].map((project, index) => (
          <div key={index + 3} style={projectStyle}>
            {/* Check if the project is defined before accessing its properties */}
            {project && (
              <>
                <img src={project.img} alt="" style={imageStyle} />
                <div style={textContainerStyle}>
                  <div style={nameContainerStyle}>
                    <div>
                      <h3 style={nameStyle}>{project.name}</h3>
                      <h3 style={teamBadgeStyle}>{project.team}</h3>
                    </div>
                    <div style={likeViewStyle(index + 3)}>
                      <span style={likeIconStyle} onClick={() => handleLikeClick(index + 3)}>
                        {likedProjects.includes(index + 3) ? '❤️' : '👍'}
                      </span>
                      <span>Likes: {project.likes}</span>
                      <span style={likeIconStyle}>👀</span>
                      <span>Views: {project.views}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
