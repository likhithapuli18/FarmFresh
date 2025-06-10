import React from 'react';
import ProductsCard from './ProductsCard';
import { useNavigate } from 'react-router-dom';
 


const Products = () => {
  const nav = useNavigate()
  
  return (
    
   <> 
  
       <div className='prod-img'>
        <div className="prod">
      <ProductsCard url="/download.jpeg"  title="vegetable"  />
      <ProductsCard url="fruits.jpeg"  title="fruits"  />
      <ProductsCard url="dairy.jpeg" title="dairyproducts" />
      <ProductsCard url="grass.jpg" title="HAY" />
     

    </div>
 
      </div>
      
   </>
       
     
     
     
   
  );
};

export default Products;
