import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'; 

const Card = ({ cardData, isRevealed: controlledReveal, onClick}) => {
  const [internalReveal, setInternalReveal] = useState(false);
  const navigate = useNavigate();

  if (!cardData) {
    return <div className="loading">Cargando carta...</div>;
  }

  const revealed = controlledReveal !== undefined ? controlledReveal : internalReveal;
  
  const handleClick = () => {
    if (onClick){
      onClick(); //modo controlado
    } else {
      setInternalReveal(!internalReveal) //modo autonomo carddeck
    }
  };

  const handleViewDetail = (e) => {
  e.stopPropagation();
    navigate(`/card/${cardData.id}`);
  }


  return (
    <div className="card-container" onClick={handleClick}>
      <div 
        className={`card ${revealed ? 'flipped' : ''}`}
      >

        {/* Carta boca abajo */}
        <div className="card-face card-back"/>
          <div className="card-back-content"/>

        {/* Carta revelada */}
        <div className="card-face card-front">
          <div className="card-front-content">
            <div className="card-header">
              <h2 className="card-title">{cardData.arcaneName}</h2>
              <p className="card-subtitle">Arcano {cardData.arcaneNumber}</p>
            </div>
            
            <div className="card-image-container">
              <img 
                src={cardData.arcaneImage?.imageSrc} 
                alt={cardData.arcaneName}
                className="card-image"
              />
            </div>

            {/*<div className="card-credits">
                <p>Por: {cardData.arcaneImage?.author}</p>
                <p>{cardData.arcaneImage?.license}</p>
              </div>*/}
            
            {/*<div className="card-info">
              <p className="card-description">
                {cardData.arcaneDescription}
              </p>*/}
              
              <div className="click-hint" onClick={handleViewDetail}>
                <p>Ver Detalle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Card;