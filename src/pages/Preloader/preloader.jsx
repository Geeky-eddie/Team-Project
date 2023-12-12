// Preloader.jsx
import React from 'react';
import '../Preloader/preloader.css';

const Preloader = ({ message }) => {
    return (
      <div className="preloader-container">
        <div className="preloader-spinner"></div>
        <p className=' font-semibold px-4'>{message}</p>
      </div>
  );
};

export default Preloader;
