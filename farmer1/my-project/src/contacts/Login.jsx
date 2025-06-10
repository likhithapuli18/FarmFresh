

import React, { useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { AuthContext } from "../Navbar/AuthContext";

function Login() {
  const nav = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext); 

  const [formData, setFormData] = useState({ mobile: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));

      setIsLoggedIn(true); 

      alert(res.data.message);
      nav("/products"); 
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="cont">
      <div className="conta">
        <h1><b>FarmFresh</b></h1>
        <p>"Join FarmFresh today - Connect with farmers, shop fresh, and support local produce!"</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            name="mobile"
            className="password-container"
            placeholder="Enter Mobile Number"
            minLength={10}
            maxLength={10}
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="one"
            placeholder="Enter Password"
            required
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
