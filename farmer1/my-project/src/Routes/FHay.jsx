

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './fhay.css';

function FHay({ cart, setCart }) {
  const [hayItems, setHayItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHayProducts();
  }, []);

  async function fetchHayProducts() {
    try {
      const res = await axios.get("http://localhost:3004/data");
      setHayItems(res.data);
    } catch (error) {
      console.error("Error fetching hay products:", error);
    }
  }

 
  const goToDetails = (item) => {
    navigate("/details", { state: { item } });
  };

  return (
    <div className="fhay-container">
      <ul className="product-list">
        {hayItems.map((item, index) => (
          <li key={index} className="product-item" onClick={() => goToDetails(item)}>
            <img className="product-image" src={item.Image} alt={item.Name} width="300px" />
            <p className="product-name">{item.Name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FHay;

