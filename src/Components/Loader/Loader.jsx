import React from 'react';
import './Loader.css';  // We'll create this CSS file next

function Loader() {
  return (
    <div className="typewriter">
      <div className="slide"><i></i></div>
      <div className="paper"></div>
      <div className="keyboard"></div>
      <h4>Loading..........</h4>
    </div>
  );
}

export default Loader;