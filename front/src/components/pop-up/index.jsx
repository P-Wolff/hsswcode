import React from 'react';
import './index.scss';

const Popup = ({ title, description, imageUrl, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="popup-info">
          <div className="popup-text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <img src={imageUrl} alt={title} className="popup-image" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
