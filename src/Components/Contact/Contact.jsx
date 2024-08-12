import React, { useEffect } from 'react'
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 500, once: false });
    })
    const submitForm = () => {
        alert('Form submitted!');
        document.getElementById('contact-form').reset();
        window.location.href = "mailto:kesavgopan@gmail.com";
    }

  return (
   <>
   <div className="contactSection" data-aos="flip-up">
    <h1>Contact</h1>
    <p>Want to get in touch ? I'd love to hear from you!</p>
    <div className="ContactForm">
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" className="submitBtn" value="Submit" name="submit" id="submit" form="contact-form" onClick={submitForm} >Submit</button>
      </form>
    </div>
   </div>
   </>
  )
}

export default Contact
