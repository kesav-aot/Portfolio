import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 500, once: false });

    // Optionally, handle the scroll event if necessary
    const handleScroll = () => {
      Aos.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about" data-aos="fade-up">
      <h1 className="about-heading" data-aos="flip-down">About Me</h1>
      <div className="aboutText" data-aos="fade-right">
        <div className="para" data-aos="fade-left">
          <p className="about-text">
            Hello! I'm Kesav Gopan, a Junior Software Engineer at AOT Technologies with a passion for bridging technology and creativity. From my base in Trivandrum, Kerala, I specialize in web development while also nurturing skills in multimedia editing and various programming languages.
          </p>
          <p className="about-text">
            My tech journey started with a Diploma in Computer Engineering and expanded through a Multimedia Diploma. I've since added certifications in Python and UI/UX to my toolkit. My experience includes valuable internships and participation in diverse tech competitions, constantly pushing my boundaries.
          </p>
          <p className="about-text">
            Whether I'm coding a new feature, editing media, or designing user interfaces, I bring a blend of technical skill and creative vision. I thrive on challenges and am always excited to explore new technologies and methodologies in this ever-evolving field.
          </p>
        </div>
        <div className="image-container" data-aos="fade-right">
          <img className="image" src="kesavGopan.png" alt="Kesav Gopan" />
        </div>
      </div>
    </section>
  );
}

export default About;
