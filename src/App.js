import React from 'react';
import './App.css'; 

const PROJECTS_DATA = [
  {
    id: '1',
    title: 'My first project of Netflix.',
    description: 'A project which represents the frontend structure of Netflix app.',
    tech: ['html'],
    link: 'https://alitek-03246155728.github.io/Netflix-page/Netflix-page.html', 
  },
  {
    id: '2',
    title: 'Second project.',
    description: 'The app which is used for counting.',
    tech: ['react'],
    link: 'https://counterapp-chi-three.vercel.app/',
  },
  {
    id: '3',
    title: 'Third project.',
    description: 'The app where we can be able to see the profiles of different users.',
    tech: ['React'],
    link: 'https://profile-card-livid-pi.vercel.app',
  },
  {
    id: '4',
    title: 'Forth project.',
    description: 'This app handles the forms.',
    tech: ['react'],
    link: 'https://form-handling-656y.vercel.app/',
  },
  {
    id: '5',
    title: 'Fifth project.',
    description: 'The app which helps the users to list their tasks and mark the completed tasks.',
    tech: ['react'],
    link: 'https://todo-list-hcuf.vercel.app/',
  },
  {
    id: '6',
    title: 'Sixth project.',
    description: 'This is a simple page where user can see the profile cards of different users.',
    tech: ['React'],
    link: 'https://component-library-1-omega.vercel.app/',
  },
  {
    id: '7',
    title: 'Seventh project.',
    description: 'This app lists the products with their prices and it  helps the users to get all the info about product.',
    tech: ['React'],
    link: 'https://nft-gallery-inky.vercel.app/',
  },
  {
    id: '8',
    title: 'Eighth project.',
    description: 'This app is used to check the weather conditions.',
    tech: ['react'],
    link: 'https://weather-app-rho-nine-53.vercel.app/',
  },
  {
    id: '9',
    title: 'Nineth project.',
    description: 'This app is used for authorization so that if the user is not signed then the new user should have to sign in first then he can use check the app data.',
    tech: ['React'],
    link: 'https://authentication-page-2.vercel.app/',
  },
];

export default function App() {
  return (
    <div className="portfolio-container">
      
      {/* HEADER SECTION */}
      <header className="portfolio-header">
        <span className="header-subtitle">MY PORTFOLIO</span>
        <h1 className="header-title">Projects Hub</h1>
        <div className="header-divider" />
        <p className="header-desc">
          Select a projects given below to visit and check my engineering projects.
        </p>
      </header>

      {/* 9 PROJECTS GRID SYSTEM */}
      <main className="grid-container">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="arcade-card">
            
            {/* Arcade Cabinet Screen */}
            <div className="screen-container">
              <div className="cabinet-top">
                <div className="joystick-node" />
                <span className="cabinet-id">CAB-{project.id}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>

            {/* Cabinet Controls / Tech Badges */}
            <div className="control-panel">
              <div className="tech-container">
                {project.tech.map((techItem, index) => (
                  <span key={index} className="tech-badge">
                    {techItem}
                  </span>
                ))}
              </div>
              
              {/* External Target Blank Anchor Link */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="launch-button"
              >
                LAUNCH ▶
              </a>
            </div>

          </div>
        ))}
      </main>
      
      {/* FOOTER TOKEN STATS */}
      <footer className="portfolio-footer">
        <span className="footer-text">Made by:Ali Hassan</span>
        <span className="footer-status">● All the projects are loaded</span>
      </footer>
    </div>
  );
}