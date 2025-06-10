import React from 'react';

const ShopCard = ({ url, title }) => {
  return (
    <div className="box">
      <h2>{title}</h2>
      <div
        className="box-img"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <button>Click here</button>
    </div>
  );
};

export default ShopCard;
