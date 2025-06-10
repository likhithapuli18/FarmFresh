import { useEffect, useState } from "react";
import axios from "axios";
import "./fruits.css";

function Fruits({ cart, setCart }) {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetchFruits();
  }, []);

  async function fetchFruits() {
    try {
      const res = await axios.get("http://localhost:3004/fruits");
      setFruits(res.data);
    } catch (error) {
      console.error("Error fetching fruits:", error);
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

 
  const fruitCartItems = Object.values(cart).filter((item) =>
    fruits.some((fruit) => fruit.Name === item.Name)
  );

  const getTotalPrice = () =>
    fruitCartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="fruit-container">
      <ul className="fruit-list">
        {fruits.map((fruit, index) => {
          const cartItem = cart[fruit.Name] || { quantity: 0, totalPrice: 0 };
          return (
            <li key={index} className="fruit-item">
              <img className="fruit-image" src={fruit.Image} alt={fruit.Name} />
              <p className="fruit-name">{fruit.Name}</p>
              <p className="fruit-price">Price: {fruit.Price}/Kg</p>
              {cartItem.quantity > 0 ? (
                <div className="button-container">
                  <button onClick={() => removeFromCart(fruit)}>-</button>
                  <span className="quantity">{cartItem.quantity}</span>
                  <button onClick={() => addToCart(fruit)}>+</button>
                </div>
              ) : (
                <button className="add-to-cart-btn" onClick={() => addToCart(fruit)}>
                  Add to Cart
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <div className="cart1">
        <h2>Fruits Cart</h2>
        <ul>
          {fruitCartItems.map((item, i) => (
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

export default Fruits;
