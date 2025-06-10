import { useEffect, useState } from "react";
import axios from "axios";
import "./vegetable.css";

function Vegetables({ cart, setCart }) {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    fetchVegetables();
  }, []);

  async function fetchVegetables() {
    try {
      const res = await axios.get("http://localhost:3004/vegetable");
      setVegetables(res.data);
    } catch (error) {
      console.error("Error fetching vegetables:", error);
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

  
  const vegetableCartItems = Object.values(cart).filter((item) =>
    vegetables.some((veg) => veg.Name === item.Name)
  );

  const getTotalPrice = () =>
    vegetableCartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="vegetables-container">
      <ul className="vegetables-list">
        {vegetables.map((veg, index) => {
          const cartItem = cart[veg.Name] || { quantity: 0, totalPrice: 0 };
          return (
            <li key={index} className="vegetable-item">
              <img className="vegetable-image" src={veg.Image} alt={veg.Name} />
              <p className="vegetable-name">{veg.Name}</p>
              <p className="vegetable-price">Price: {veg.Price}/Kg</p>
              {cartItem.quantity > 0 ? (
                <div className="button-container">
                  <button className="but" onClick={() => removeFromCart(veg)}>
                    -
                  </button>
                  <span className="quantity">{cartItem.quantity}</span>
                  <button className="but" onClick={() => addToCart(veg)}>
                    +
                  </button>
                </div>
              ) : (
                <button className="add-to-cart-btn" onClick={() => addToCart(veg)}>
                  Add to Cart
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <div className="cart">
        <h2>Vegetables Cart</h2>
        <ul>
          {vegetableCartItems.map((item, i) => (
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

export default Vegetables;
