// Skills.js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faPython, faBootstrap, faVuejs } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  const skillsList = [
    { icon: faHtml5, name: 'HTML' },
    { icon: faCss3Alt, name: 'CSS' },
    { icon: faJs, name: 'JavaScript' },
    { icon: faReact, name: 'React' },
    { icon: faNode, name: 'Node' },
    { icon: faPython, name: 'Python' },
    { icon: faBootstrap, name: 'Bootstrap' },
    { icon: faVuejs, name: 'Vue JS' }
  ];
  const count =0;

  React.useEffect(() => {
    Aos.init({ duration: 2000 , once: true, delay: 200, disable: false, mirror: false, anchorPlacement: 'top-bottom' });
  }, []);

  const renderSkills = () => (
    skillsList.map((skill, index) => (
      <div className="skill" key={index}>
        <FontAwesomeIcon icon={skill.icon} size='3x' className='skillIcon'  />
        <h3>{skill.name}</h3>
      </div>
    ))
  );

  return (
    <div className="skills" data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <h1 className="skill-heading">Skills</h1>
      <div className="skills-container">
        <div className="container">
          {renderSkills()}
          {renderSkills()}
        </div>
      </div>
    </div>
  );
}

export default Skills