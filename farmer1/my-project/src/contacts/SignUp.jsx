

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./SignUp.css";

function SignUp() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!isValidPassword(formData.password)) {
      alert(
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName: formData.fullName,
        mobile: formData.mobile,
        password: formData.password,
      });
      alert(res.data.message);
      nav("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="log">
      <div className="loga">
        <h1>FarmFresh</h1>
        <p>"Join FarmFresh today - Connect with farmers, shop fresh, and support local produce!"</p>
        <form onSubmit={handleSubmit}>
          <input type="text" className="password-container" name="fullName" placeholder="Enter Full Name" required onChange={handleChange} />
          <input type="tel"  className="password-container" name="mobile" placeholder="Enter Mobile Number" minLength={10}
            maxLength={10} required onChange={handleChange} />

          
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="password-input"
              placeholder="Enter Password"
              required
              onChange={handleChange}
            />
            
          </div>

          
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="password-input"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
            />
           
          </div>

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
