import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/MenuBar/Sidebar';  // Adjust the import path as necessary
import Loader from './Components/Loader/Loader';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Header />
          <About />
          <Skills />
          <Project />
        </>
      )}
                
    </>
  );
}

export default App;