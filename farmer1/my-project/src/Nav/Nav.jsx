import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Products">Products</NavLink></li>
        {/* <li><NavLink to="/navbar">Navbar</NavLink></li> */}
        {/* <li><NavLink to="/shop">Shop</NavLink></li> */}
        {/* <li><NavLink to="/cart">Cart</NavLink></li> */}
        <li><NavLink to="/aboutus">About Us</NavLink></li>
        
      

      
      </ul>
    </div>
  );
};

export default Nav;
