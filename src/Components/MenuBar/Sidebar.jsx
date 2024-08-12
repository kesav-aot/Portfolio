import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDeleteLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Sidebar({ showSidebar, setShowSidebar, scrollToSection }) {
  
  return (
    <>
      <button 
        className={`menuBtn ${showSidebar ? 'hide' : ''}`} 
        onClick={() => setShowSidebar(true)} 
        aria-label="Open sidebar"
      >
        <FontAwesomeIcon icon={faBars} size='lg' color='#32E0C4' />
        <span>Portfolio</span>
      </button>
      
      <aside className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="menuHead">
          <h1>Menu</h1>
          <button className="closeBtn" onClick={() => setShowSidebar(false)} aria-label="Close sidebar">
            <FontAwesomeIcon icon={faDeleteLeft} color='#32E0C4' />
          </button>
        </div>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home <FontAwesomeIcon icon={faArrowRight} className='arrow' /></li>
          <li onClick={() => scrollToSection('about')}>About <FontAwesomeIcon icon={faArrowRight} className='arrow' /></li>
          <li onClick={() => scrollToSection('skills')}>Skills <FontAwesomeIcon icon={faArrowRight} className='arrow' /></li>
          <li onClick={() => scrollToSection('projects')}>Projects <FontAwesomeIcon icon={faArrowRight} className='arrow' /></li>
          <li onClick={() => scrollToSection('contact')}>Contact <FontAwesomeIcon icon={faArrowRight} className='arrow' /></li>
        </ul>
        <div className="socialIcons">
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="icon1"/></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="icon2"/></a>
          <a href="https://www.linkedin.com/in/kesav-gopan-680129236/"><FontAwesomeIcon icon={faLinkedin} className="icon3"/></a>
          <a href="https://github.com/kesav-aot"><FontAwesomeIcon icon={faGithub} className="icon4"/></a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
