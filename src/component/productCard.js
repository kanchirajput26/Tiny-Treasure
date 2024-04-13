import React from 'react';
import './component.css'; // Import CSS file for styling
const ProductCard = ({ imageUrl, productName, price, discount }) => {
    return (
      <div className="product-card">
        <div className="product-image" style={{ backgroundImage: `url(${imageUrl})` }}>
          {discount && <div className="discount-badge">{discount}</div>}
          <div className="product-details">
            <h3>{productName}</h3>
            <p>{price}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;