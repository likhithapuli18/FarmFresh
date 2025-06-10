import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar' 
import Home from './Home/Home';
import Products from './Products/Products'; 
import Login from './contacts/Login'
import Vegetables from './Routes/vegetable';
import AboutUs from './Home/AboutUs';
import SignUp from './contacts/SignUp';
import ProtectedRoute from './Routes/ProtectedRoute';
import Users from './contacts/UserList'
import Fruits from './Routes/fruits' 
import FDairy from './Routes/dairy';
import FHay from './Routes/FHay'
import './App.css'
import Privacy from './Home/Privacy';
import Cart from './Navbar/Cart'
import HayDetails from './Routes/HayDetails';
import Profile from './Navbar/Profile';






 
  

function App() {
  const [cart, setCart] = useState({})
  return (
    <div>
      
      <Navbar />
     

      
      
      

      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />}
        />
        <Route/>
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products/vegetable" element={<Vegetables cart={cart} setCart={setCart}/>} />
        <Route path="/signup" element={<SignUp/>} /> 
         
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/products/fruits' element={<Fruits cart={cart} setCart={setCart} />}/>
        <Route path='/products/dairyproducts' element={<FDairy cart={cart} setCart={setCart}/>} />
        {/* <Route path='/dairy' element={<DairyDetails cart={cart} setCart={setCart}/>} /> */}
        <Route path='/products/hay' element={<FHay cart={cart} setCart={setCart} />} />
        <Route path='/details' element={<HayDetails cart={cart} setCart={setCart} />} />
        {/* <Route path='/cart' element={<CombinedCart/>} /> */}
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}
           />

          
        <Route
          path="/Users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        
        {/* <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          }
        /> */}
     
        
        
      
      </Routes>
      
       
    </div>
  );
}

export default App;
