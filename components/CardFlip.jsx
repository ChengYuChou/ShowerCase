import { useState } from "react";
import './CardFlip.css'

function CardFlip({ product }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card">
          <div className="card-front">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
          <div className="card-back">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardFlip;