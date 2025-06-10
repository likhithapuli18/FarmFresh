import React from 'react';
import Shop from './Shop';
import './Shop.css'; 
import './Footer.css'
import Footer from './Footer';
import Heading from './Heading';
// import Navbar from '../Navbar/Navbar';
 
 

const Home = () => {
  return (  
    <div>
       {/* <Navbar /> */}
      <Heading />
   
      <Shop />
   
      <Footer />
      
      
    </div>
  );
};

export default Home;
