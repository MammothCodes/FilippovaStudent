import React, { useState } from 'react';
import './styles.css';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (event) => {
    setIsVisible((current) => !current);
  };

  return (
    <div className="App">
      <div className="container-center">
        <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
          <div className="card custom-card">
            <img 
              src="https://cdn1.ozonusercontent.com/s3/product-service-meta-media/097e95c9-148a-47f9-a923-7d63214e426b.jpg" 
              className="card-img-top custom-img" 
              alt="Product" 
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleClick} 
          className="btn btn-secondary custom-button"
        >
          {isVisible ? 'Скрыть' : 'Показать'} карточку
        </button>
      </div>
    </div>
  );
}