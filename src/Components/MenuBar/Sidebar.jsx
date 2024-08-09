// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDeleteLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <>
      <button 
        className={`menuBtn ${showSidebar ? 'hide' : ''}`} 
        onClick={() => setShowSidebar(true)} 
        aria-label="Open sidebar"
      >
        <FontAwesomeIcon icon={faBars} size='lg'  color='#32E0C4' />
        <span>Portfolio</span>
      </button>
      
      <aside className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="menuHead">
          <h1>Menu</h1>
          <button className="closeBtn" onClick={() => setShowSidebar(false)} aria-label="Close sidebar">
            <FontAwesomeIcon icon={faDeleteLeft}  color='#32E0C4' />
          </button>
        </div>
        <ul>
          <li>Home <FontAwesomeIcon icon={faArrowRight } className='arrow' /></li>
          <li>About <FontAwesomeIcon icon={faArrowRight }  className='arrow'/></li>
          <li>Skills <FontAwesomeIcon icon={faArrowRight} className='arrow' /></li>
          <li>Projects <FontAwesomeIcon icon={faArrowRight} className='arrow' /></li>
          <li>Contact <FontAwesomeIcon icon={faArrowRight} className='arrow' /></li>
        </ul>
        <div className="socialIcons">
          <FontAwesomeIcon icon={faFacebook} className="icon1" />
          <FontAwesomeIcon icon={faInstagram} className="icon2" />
          <FontAwesomeIcon icon={faLinkedin} className="icon3" />
          <FontAwesomeIcon icon={faGithub} className="icon4" />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;