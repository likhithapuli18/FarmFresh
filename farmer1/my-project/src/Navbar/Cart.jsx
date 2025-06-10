

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css";

function Cart({ cart, setCart }) {
  const navigate = useNavigate(); 
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    
    document.body.appendChild(script);
  }, []);
  

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

  const getTotalPrice = () =>
    Object.values(cart).reduce((acc, item) => acc + item.totalPrice, 0);

  const totalPrice = getTotalPrice();
  const discount = totalPrice >= 500 ? totalPrice * 0.15 : totalPrice * 0.1;
  const discountedTotal = totalPrice - discount;

  const handlePayment = async () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      nav("/login");
      return;
    }
  
    if (discountedTotal <= 0) {
      alert("Your cart is empty or invalid.");
      return;
    }
  
    try {
      
      console.log("Sending Payment Request:", {
        mobile: user.mobile,
        amount: Math.round(discountedTotal * 100),
      });
  
      const { data } = await axios.post("http://localhost:5000/api/payment", {
        mobile: user.mobile,
        amount: Math.round(discountedTotal * 100),
      });
  
     
      console.log("Received Payment Data:", data);
  
      const options = {
        key: "rzp_test_MWCwSoXz4YBpYY", 
        amount: Math.round(discountedTotal * 100),
        currency: "INR",
        name: "FarmFresh",
        order_id: data.id, 
        handler: async (response) => {
          console.log("Razorpay Response:", response);
  
          if (!response.razorpay_payment_id) {
            alert("Payment failed: No Payment ID received");
            return;
          }
  
          await axios.post("http://localhost:5000/api/save-payment", {
            mobile: user.mobile,
            amount: discountedTotal,
            paymentId: response.razorpay_payment_id,
            orderId: data.id,
          });
  
          alert("Payment Successful!");
          setCart({});
          navigate("/cart");
        },
      };
  
      
      console.log("Razorpay Options:", options);
  
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please try again.");
    }
  };
  
  
  

  return (
    <div className="cart-container">
      <h2>MY BASKET</h2>
      {Object.keys(cart).length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {Object.values(cart).map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.Image}
                  alt={item.Name}
                  width="100px"
                  className="cart-image"
                />
                <div className="cart-details">
                  <p className="name">{item.Name}</p>
                  <p className="price">
                    Price: ₹{item.Price} x {item.quantity} = ₹{item.totalPrice}
                  </p>
                  <div className="button-container">
                    <button onClick={() => removeFromCart(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Cart Value: ₹{totalPrice}</h3>
          <h3>
            Discount ({totalPrice >= 500 ? "15%" : "10%"}): ₹
            {discount.toFixed(2)}
          </h3>
          <h2>Payable Amount: ₹{discountedTotal.toFixed(2)}</h2>
          <button className="payment-btn" onClick={handlePayment}>
            Pay ₹{discountedTotal.toFixed(2)}
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

