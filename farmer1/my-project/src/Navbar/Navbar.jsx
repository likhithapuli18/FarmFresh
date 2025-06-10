



import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const nav = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    nav("/");
  };

  return (
    <div className="navbar">
      <img src="FF.jpg" alt="logo" className="spin-logo" />

      <div className="nav-menu nav-item" onClick={() => nav("/")}>
        <i className="fa-solid fa-house"></i> Home
      </div>
      <div className="nav-menu nav-item" onClick={() => nav("/products")}>
        <i className="fa-brands fa-product-hunt"></i> Products
      </div>
      <div className="nav-menu nav-item" onClick={() => nav("/profile")}>
        <i className="fa-solid fa-user"></i> User
      </div>

      
{isLoggedIn && (
  <>
  <div className="nav-menu nav-item" onClick={() => nav("/cart")}>
    <i className="fa-solid fa-cart-shopping"></i> Cart
  </div>
  <div className="nav-menu nav-item" onClick={handleLogout}>
  <i className="fa-solid fa-right-from-bracket"></i> Logout
</div>
</>
)}

     
        
    </div>
  );
};

export default Navbar;
