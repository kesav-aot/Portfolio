import React, { useEffect, useRef } from 'react';
import './Header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Header() {
  const words = [
    "<Frontend Developer>",
    "<Web Developer>",
    "<Software Developer>"
  ];

  const toolRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const erasingTimeoutRef = useRef(null);

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

  useEffect(() => {
    // Start the typing effect
    typingEffect();

    // Cleanup function to clear timeouts on component unmount
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (erasingTimeoutRef.current) clearTimeout(erasingTimeoutRef.current);
    };
  }, []);

  const typingEffect = () => {
    let wordIndex = 0;
    let charIndex = 0;

    const typeWord = () => {
      if (!toolRef.current) return;

      const currentWord = words[wordIndex];
      const text = currentWord.split("");

      typingTimeoutRef.current = setInterval(() => {
        if (charIndex < text.length) {
          toolRef.current.textContent += text[charIndex];
          charIndex++;
        } else {
          clearInterval(typingTimeoutRef.current);
          setTimeout(() => {
            eraseWord();
          }, 1000);
        }
      }, 150); // Adjusted typing speed slightly for smoother experience
    };

    const eraseWord = () => {
      if (!toolRef.current) return;

      erasingTimeoutRef.current = setInterval(() => {
        if (toolRef.current.textContent.length > 0) {
          toolRef.current.textContent = toolRef.current.textContent.slice(0, -1);
        } else {
          clearInterval(erasingTimeoutRef.current);
          wordIndex = (wordIndex + 1) % words.length;
          charIndex = 0;
          typeWord();
        }
      }, 100); // Adjusted erasing speed
    };

    typeWord();
  };

  return (
    <div className="header">
      <div className="typing" data-aos="fade-up">
        <h1 data-aos="fade-down" data-aos-delay="200">Kesav Gopan</h1>
        <h2 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          I am a <span ref={toolRef} className="tool"></span>
        </h2>
      </div>
      <div className="header-img" data-aos="fade-left">
        <img src="/PortfolioPic.png" alt="kesav-gopan" data-aos="fade-right" className='header-image' />
        <div className="header-img-overlay"></div>
        <div className="header-img-overlay2"></div>
        <div className="header-img-overlay3"></div>
        <div className="header-img-overlay4"></div>

      </div>
    </div>
  );
}

export default Header;
