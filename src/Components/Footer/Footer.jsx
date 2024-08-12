import React, { useEffect } from 'react'
import './Footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    useEffect(() => {
        Aos.init({ duration: 500, once: false });
    })
  return (
   <>
    <div className="footer" data-aos="fade-up">
        <p>Made with &hearts; by kesavgopan</p>
        <p>All Rights Reserved.Copyright &copy; 2024</p>
    </div>
   </>
  )
}

export default Footer
