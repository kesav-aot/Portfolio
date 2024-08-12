import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/MenuBar/Sidebar';
import Loader from './Components/Loader/Loader';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setShowSidebar(true);
  };

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          <Sidebar className="sidebar" showSidebar={showSidebar} setShowSidebar={setShowSidebar} scrollToSection={scrollToSection} />
          <div className={showSidebar ? 'content-shift' : 'content'}>
            <section id="home"><Header/></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Project /></section>
            <section id="contact"><Contact /></section>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;