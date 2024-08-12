import React, { useState, useEffect } from "react";
import Sidebar from '../MenuBar/Sidebar';  // Adjust the import path as necessary
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Home = () => {
    
    return (
        <>
                    <Header />
                    <About />
                    <Skills />
                    <Project />
                    <Contact />
                
                </>
            )}
    
   
export default Home;
