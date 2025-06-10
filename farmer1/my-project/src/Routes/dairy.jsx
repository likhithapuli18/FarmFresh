


import { useState, useEffect } from "react";
import axios from "axios";
import "./dairy.css";

function Dairy({ cart, setCart }) {
  const [dairyItems, setDairyItems] = useState([]);

  useEffect(() => {
    fetchDairyProducts();
  }, []);

  async function fetchDairyProducts() {
    try {
      const res = await axios.get("http://localhost:3004/Dairy");
      setDairyItems(res.data);
    } catch (error) {
      console.error("Error fetching dairy products:", error);
    }
  }

  const addToCart = (item) => {
    setCart((prev) => {
      const quantity = (prev[item.Name]?.quantity || 0) + 1;
      return {
        ...prev,
        [item.Name]: {
          ...item,
          quantity,
          totalPrice: quantity * Number(item.Price),
        },
      };
    });
  };

  const removeFromCart = (item) => {
    setCart((prev) => {
      if (!prev[item.Name]) return prev;
      const quantity = prev[item.Name].quantity - 1;
      if (quantity <= 0) {
        const { [item.Name]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [item.Name]: {
          ...item,
          quantity,
          totalPrice: quantity * Number(item.Price),
        },
      };
    });
  };

  
  const dairyCartItems = Object.values(cart).filter((item) =>
    dairyItems.some((dairyItem) => dairyItem.Name === item.Name)
  );

  const getTotalPrice = () =>
    dairyCartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="dairy-container">
      <ul className="dairy-list">
        {dairyItems.map((item, index) => {
          const cartItem = cart[item.Name] || { quantity: 0, totalPrice: 0 };
          return (
            <li key={index} className="dairy-item">
              <img className="dairy-image" src={item.Image} alt={item.Name} />
              <p className="dairy-name">{item.Name}</p>
              <p className="dairy-price">Price: {item.Price}/Kg</p>
              {cartItem.quantity > 0 ? (
                <div className="button-container">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span className="quantity">{cartItem.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              ) : (
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <div className="cart1">
        <h2>Dairy Cart</h2>
        <ul>
          {dairyCartItems.map((item, i) => (
            <li key={i}>
              {item.Name} - {item.quantity} x {item.Price} = {item.totalPrice}
            </li>
          ))}
        </ul>
        <h3>Total Cart Value: {getTotalPrice()}</h3>
      </div>
    </div>
  );
}

export default Dairy;
