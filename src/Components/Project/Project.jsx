import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Project.css';

function Project() {
  useEffect(() => {
    Aos.init({ duration: 500, once: false });

    const handleScroll = () => {
      Aos.refresh();  // Reinitializes AOS on scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="project" data-aos="fade-right">
        <h1 className="project-heading">Projects</h1>
        <p className="project-text">These are some of my projects.</p>
        <div className="projectCards" data-aos="slide-up">
          <div className="projectCard">
            <h2 className="projectCard-heading">RideRight</h2>
            <p className="projectCard-text">Simple taxi booking app.<h6>Tech Stack : Vue Js</h6></p>
            <a href="https://taxi-booking-app-steel.vercel.app"><button className="visit">Visit</button></a>
          </div>
          <div className="projectCard">
            <h2 className="projectCard-heading">Calculator</h2>
            <p className="projectCard-text">Simple calculator.<h6>Tech Stack : React Js</h6></p>
            <a href="https://calculator-app-delta-ten.vercel.app/"><button className="visit">Visit</button></a>
          </div>
          <div className="projectCard">
            <h2 className="projectCard-heading">Music App</h2>
            <p className="projectCard-text">Simple music player.<h6>Tech Stack : React Js.</h6></p>
            <a href="https://simple-music-app-wine.vercel.app/"><button className="visit">Visit</button></a>
          </div>
          <div className="projectCard">
            <h2 className="projectCard-heading">Game Galaxy</h2>
            <p className="projectCard-text">Simple online games.<h6>Tech Stack : React Js</h6></p>
            <a href="https://game-galaxy-github-io-git-main-kesavgopan10s-projects.vercel.app/"><button className="visit">Visit</button></a>
          </div>
          <div className="projectCard">
            <h2 className="projectCard-heading">ToDo App</h2>
            <p className="projectCard-text">Simple to do app.<h6>Tech Stack : JavaScript</h6></p>
            <a href="https://kesav-aot.github.io/ToDoApp.github.io/"><button className="visit">Visit</button></a>
          </div>
          <div className="projectCard">
            <h2 className="projectCard-heading">MineSweeper</h2>
            <p className="projectCard-text">Simple minesweeper game.<h6>Tech Stack : React Js</h6></p>
            <a href="https://mine-sweeper-zeta.vercel.app/"><button className="visit">Visit</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
