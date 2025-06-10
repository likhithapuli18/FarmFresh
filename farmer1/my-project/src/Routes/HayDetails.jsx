// import { useLocation } from "react-router-dom";
// import './haydetails.css';

// function HayDetails({ cart, setCart }) {
//   const location = useLocation();
//   const item = location.state?.item; // Get item details from navigation

//   if (!item) return <h2>No item selected</h2>;

//   const addToCart = () => {
//     setCart((prev) => {
//       const quantity = (prev[item.Name]?.quantity || 0) + 1;
//       return {
//         ...prev,
//         [item.Name]: {
//           ...item,
//           quantity,
//           totalPrice: quantity * Number(item.Price),
//         },
//       };
//     });
//   };

//   const removeFromCart = () => {
//     setCart((prev) => {
//       if (!prev[item.Name]) return prev;
//       const quantity = prev[item.Name].quantity - 1;
//       if (quantity <= 0) {
//         const { [item.Name]: _, ...rest } = prev;
//         return rest;
//       }
//       return {
//         ...prev,
//         [item.Name]: {
//           ...item,
//           quantity,
//           totalPrice: quantity * Number(item.Price),
//         },
//       };
//     });
//   };

//   const cartItem = cart[item.Name] || { quantity: 0 };

//   return (
//     <div className="hay-details">
//       <img src={item.Image} alt={item.Name} width="300px" />
//       <h2>{item.Name}</h2>
//       <p>Price: {item.Price} /Kg</p>
//       <p>Description: {item.Description}</p>
//       <div className="button-container">
//         <button onClick={removeFromCart} disabled={cartItem.quantity === 0}>-</button>
//         <span className="quantity">{cartItem.quantity}</span>
//         <button onClick={addToCart}>+</button>
//       </div>
//     </div>
//   );
// }

// export default HayDetails;

// import { useLocation } from "react-router-dom";
// import './haydetails.css'
// function HayDetails({ cart, setCart }) {
//   const location = useLocation();
//   const item = location.state?.item;

//   if (!item) return <h2>No item selected</h2>;

//   const descriptions = {
//     "Green Grass (Fresh Fodder)": `Green grass is fresh forage that provides essential fiber, vitamins, and moisture. 
//     It is the primary diet of grazing animals like cows, goats, and sheep.
    
//     **Nutritional Value:**
//     - High in water content (70–85%)
//     - Rich in fiber, aiding digestion
//     - Contains Vitamins A, E, and K
//     - Provides natural enzymes and minerals

//     **Feeding Amount (Per Day):**
//     - Cattle (Dairy/Buffalo): 30–50 kg per animal
//     - Goats/Sheep: 3–5 kg per animal
//     - Horses: 15–25 kg per animal`,

//     "Dried Grass (Hay)": `Hay is dried and stored grass or legumes used as animal fodder, especially when fresh grass is unavailable. 
//     It prevents digestive issues and provides roughage.

//     **Nutritional Value:**
//     - Contains 12-18% fiber
//     - Moderate protein content (8-15%)
//     - Lower moisture (10-15%) than fresh grass
//     - Contains Vitamins A, D, and K
//     - Calcium & Phosphorus for bone health

//     **Feeding Amount (Per Day):**
//     - Cattle (Dairy/Buffalo): 6–10 kg per animal
//     - Goats/Sheep: 1–2 kg per animal
//     - Horses: 6–10 kg per animal`,

//     "Grains (Maize, Barley, Wheat Bran, Oats)": `Grains such as maize, barley, wheat bran, and oats provide high energy and protein to support milk production and weight gain.

//     **Nutritional Value:**
//     - High in carbohydrates & energy (50–70%)
//     - Rich in protein (10–20%)
//     - Contains B vitamins for metabolism
//     - Fats (2–5%) for energy
//     - Calcium & Phosphorus for growth

//     **Feeding Amount (Per Day):**
//     - Cattle (Dairy/Buffalo): 2–5 kg per animal
//     - Goats/Sheep: 200–500 g per animal
//     - Horses: 2–4 kg per animal

//     **Balanced Feeding Approach 🐄🐑🐎**
//     - **For Dairy Cattle:** 50% Green Grass + 30% Hay + 20% Grains
//     - **For Sheep/Goats:** 60% Green Grass + 30% Hay + 10% Grains
//     - **For Horses:** 40% Green Grass + 40% Hay + 20% Grains`
//   };

//   const addToCart = () => {
//     setCart((prev) => {
//       const quantity = (prev[item.Name]?.quantity || 0) + 1;
//       return {
//         ...prev,
//         [item.Name]: {
//           ...item,
//           quantity,
//           totalPrice: quantity * Number(item.Price),
//         },
//       };
//     });
//   };

//   const removeFromCart = () => {
//     setCart((prev) => {
//       if (!prev[item.Name]) return prev;
//       const quantity = prev[item.Name].quantity - 1;
//       if (quantity <= 0) {
//         const { [item.Name]: _, ...rest } = prev;
//         return rest;
//       }
//       return {
//         ...prev,
//         [item.Name]: {
//           ...item,
//           quantity,
//           totalPrice: quantity * Number(item.Price),
//         },
//       };
//     });
//   };

//   const cartItem = cart[item.Name] || { quantity: 0 };

//   return (
//     <div className="hay-details">
//       <img src={item.Image} alt={item.Name} width="300px" />
//       <h2>{item.Name}</h2>
//       <p><strong>Price:</strong> {item.Price} /Kg</p>
//       <p><strong>Description:</strong></p>
//       <p>{descriptions[item.Name] || "No description available."}</p>

//       <div className="button-container">
//         <button onClick={removeFromCart} disabled={cartItem.quantity === 0}>-</button>
//         <span className="quantity">{cartItem.quantity}</span>
//         <button onClick={addToCart}>+</button>
//       </div>

//       <button className="add-to-product-btn">Add to Product</button>
//     </div>
//   );
// }

// export default HayDetails;


// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import './haydetails.css'

// function HayDetails({ cart, setCart }) {
//   const location = useLocation();
//   const item = location.state?.item;

//   const [showCartButtons, setShowCartButtons] = useState(false);

//   if (!item) return <h2>No item selected</h2>;

//   const descriptions = {
//     "green grass": `🌱 **Green Grass (Fresh Fodder)**
//     Green grass is fresh forage that provides essential fiber, vitamins, and moisture. 
//     It is the primary diet of grazing animals like cows, goats, and sheep.

//     **Nutritional Value:**
//     - High in water content (70–85%)
//     - Rich in fiber, aiding digestion
//     - Contains Vitamins A, E, and K
//     - Provides natural enzymes and minerals

//     **Feeding Amount (Per Day):**
//     - Cattle (Dairy/Buffalo): 30–50 kg per animal
//     - Goats/Sheep: 3–5 kg per animal
//     - Horses: 15–25 kg per animal`,

//     "dried grass": `🍂 **Dried Grass (Hay)**
//     Hay is dried and stored grass or legumes used as animal fodder, especially when fresh grass is unavailable. 
//     It prevents digestive issues and provides roughage.

//     **Nutritional Value:**
//     - Contains 12-18% fiber
//     - Moderate protein content (8-15%)
//     - Lower moisture (10-15%) than fresh grass
//     - Contains Vitamins A, D, and K
//     - Calcium & Phosphorus for bone health

//     **Feeding Amount (Per Day):**
//     - Cattle (Dairy/Buffalo): 6–10 kg per animal
//     - Goats/Sheep: 1–2 kg per animal
//     - Horses: 6–10 kg per animal`,

//     "grains": `🌾 **Grains (Maize, Barley, Wheat Bran, Oats)**
//     Grains provide high energy and protein to support milk production and weight gain.

//     **Nutritional Value:**
//     - High in carbohydrates & energy (50–70%)
//     - Rich in protein (10–20%)
//     - Contains B vitamins for metabolism
//     - Fats (2–5%) for energy
//     - Calcium & Phosphorus for growth

//     **Feeding Amount (Per Day):**
//     - Cattle (Dairy/Buffalo): 2–5 kg per animal
//     - Goats/Sheep: 200–500 g per animal
//     - Horses: 2–4 kg per animal

//     **Balanced Feeding Approach 🐄🐑🐎**
//     - **For Dairy Cattle:** 50% Green Grass + 30% Hay + 20% Grains
//     - **For Sheep/Goats:** 60% Green Grass + 30% Hay + 10% Grains
//     - **For Horses:** 40% Green Grass + 40% Hay + 20% Grains`
//   };

//   // Convert item name to lowercase for accurate matching
//   const itemKey = item.Name.toLowerCase();
//   const itemDescription = descriptions[itemKey] || "No description available.";

//   const addToCart = () => {
//     setShowCartButtons(true);
//     setCart((prev) => {
//       const quantity = (prev[item.Name]?.quantity || 0) + 1;
//       return {
//         ...prev,
//         [item.Name]: {
//           ...item,
//           quantity,
//           totalPrice: quantity * Number(item.Price),
//         },
//       };
//     });
//   };

//   const removeFromCart = () => {
//     setCart((prev) => {
//       if (!prev[item.Name]) return prev;
//       const quantity = prev[item.Name].quantity - 1;
//       if (quantity <= 0) {
//         setShowCartButtons(false);
//         const { [item.Name]: _, ...rest } = prev;
//         return rest;
//       }
//       return {
//         ...prev,
//         [item.Name]: {
//           ...item,
//           quantity,
//           totalPrice: quantity * Number(item.Price),
//         },
//       };
//     });
//   };

//   const cartItem = cart[item.Name] || { quantity: 0 };

//   return (
//     <div className="hay-details">
//       <img src={item.Image} alt={item.Name} width="300px" />
//       <h2>{item.Name}</h2>
//       <p className = "pri"><strong className="col">Price:</strong> {item.Price} /Kg</p>
//       <p className = "pri"><strong className="col">Description:</strong></p>
//       <p className="pri">{itemDescription}</p>

//       {!showCartButtons ? (
//         <button className="add-to-product-btn" onClick={addToCart}>
//           Add to Cart
//         </button>
//       ) : (
//         <div className="button-container">
//           <button onClick={removeFromCart} disabled={cartItem.quantity === 0}>-</button>
//           <span className="quantity">{cartItem.quantity}</span>
//           <button onClick={addToCart}>+</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HayDetails;


import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./haydetails.css";

function HayDetails({ cart, setCart }) {
  const location = useLocation();
  const item = location.state?.item;

  const [showCartButtons, setShowCartButtons] = useState(false);

  if (!item) return <h2>No item selected</h2>;

  const descriptions = {
    "green grass": {
      title: "🌱 Green Grass (Fresh Fodder)",
      benefits: [
        "Fresh and natural animal feed.",
        "High in moisture, keeping animals hydrated.",
        "Rich in fiber, aiding in digestion.",
        "Packed with essential vitamins (A, E, and K).",
        "Contains natural enzymes and minerals."
      ],
    //   nutrition: {
    //     "Water Content": "70-85%",
    //     "Fiber": "High",
    //     "Vitamins": "A, E, K",
    //     "Minerals": "Calcium, Magnesium, Phosphorus"
    //   },
      feeding: {
        "Cattle (Dairy/Buffalo)": "30-50 kg per day",
        "Goats/Sheep": "3-5 kg per day",
        "Horses": "15-25 kg per day"
      }
    },

    "dried grass": {
      title: "🍂 Dried Grass (Hay)",
      benefits: [
        "Ideal for feeding when fresh grass is unavailable.",
        "Provides roughage, aiding digestion.",
        "Moderate protein content for balanced nutrition.",
        "Supports healthy weight maintenance.",
        "Contains Vitamins A, D, and K for immunity."
      ],
    //   nutrition: {
    //     "Fiber": "12-18%",
    //     "Protein": "8-15%",
    //     "Moisture": "10-15%",
    //     "Vitamins": "A, D, K",
    //     "Minerals": "Calcium, Phosphorus"
    //   },
      feeding: {
        "Cattle (Dairy/Buffalo)": "6-10 kg per day",
        "Goats/Sheep": "1-2 kg per day",
        "Horses": "6-10 kg per day"
      }
    },

    "grains": {
      title: "🌾 Grains (Maize, Barley, Wheat Bran, Oats)",
      benefits: [
        "High-energy food source for livestock.",
        "Supports milk production and muscle growth.",
        "Rich in essential B vitamins for metabolism.",
        "Provides carbohydrates and fats for sustained energy.",
        "Balanced with calcium and phosphorus for bone health."
      ],
    //   nutrition: {
    //     "Carbohydrates": "50-70%",
    //     "Protein": "10-20%",
    //     "Fats": "2-5%",
    //     "Vitamins": "B-complex",
    //     "Minerals": "Calcium, Phosphorus"
    //   },
      feeding: {
        "Cattle (Dairy/Buffalo)": "2-5 kg per day",
        "Goats/Sheep": "200-500 g per day",
        "Horses": "2-4 kg per day"
      }
    }
  };

  const itemKey = item.Name.toLowerCase();
  const itemData = descriptions[itemKey];

  if (!itemData) return <h2>Description not available.</h2>;

  const addToCart = () => {
    setShowCartButtons(true);
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

  const removeFromCart = () => {
    setCart((prev) => {
      if (!prev[item.Name]) return prev;
      const quantity = prev[item.Name].quantity - 1;
      if (quantity <= 0) {
        setShowCartButtons(false);
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

  const cartItem = cart[item.Name] || { quantity: 0 };

  return (
    <div className="hay-details">
      <div className="image-con">
        <img src={item.Image} alt={item.Name} />
      </div>
      <div className="info-container">
        <h2>{itemData.title}</h2>
        <h3>Price: {item.Price} </h3>

        <div className="sec">
          <h4> Benefits:</h4>
          <ul className="unorder">
            {itemData.benefits.map((benefit, index) => (
              <li key={index} className="list">{benefit}</li>
            ))}
          </ul>
        </div>

        {/* <div className="section">
          <h4>📊 Nutritional Value:</h4>
          <ul>
            {Object.entries(itemData.nutrition).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul> */}
        {/* </div> */}

        <div className="sec">
          <h4>🥗 Recommended Feeding Amount:</h4>
          <ul className="unorder">
            {Object.entries(itemData.feeding).map(([key, value]) => (
              <li key={key} className="list">
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>

        {!showCartButtons ? (
          <button className="add" onClick={addToCart}>
            Add to Cart
          </button>
        ) : (
          <div className="butto">
            <button onClick={removeFromCart} disabled={cartItem.quantity === 0}>
              -
            </button>
            <span className="quant">{cartItem.quantity}</span>
            <button className="butto" onClick={addToCart}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HayDetails;
