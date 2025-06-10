import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Products.css";

const ProductsCard = ({ url, title }) => {
  const nav = useNavigate()
  return (
    <div className="box1" onClick={() => nav(`/products/${title}`)}>
      <h2>{title.toUpperCase()}</h2>
      <div
        className="box1-img"
        style={{
          backgroundImage: `url(${url})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      ></div>
    </div>
  );
};

export default ProductsCard;

