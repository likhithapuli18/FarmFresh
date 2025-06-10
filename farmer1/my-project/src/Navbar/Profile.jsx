


import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Profile.css";

const Profile = () => {
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    const alreadyLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
    if (storedUser) {
      setUser(storedUser);
  
      
      if (!alreadyLoggedIn) {
        alert("Login successful");
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);  
      }
    }
  }, [setIsLoggedIn]);
  
  return (
    <div className="profile-container">
      {user ? (
        <>
          <h2>User Profile</h2>
          <div className="profile-details">
            <p><strong>Name:</strong> {user.fullName}</p>
            <p><strong>Mobile:</strong> {user.mobile}</p>
            
          </div>
        </>
      ) : (
        <>
          <h2>Welcome to Farm Fresh</h2>
          <p>Create an account to start shopping fresh produce!</p>
          <div className="auth-buttons">
            <button className="signup-btn" onClick={() => nav("/signup")}>Create Account</button>
            <button className="login-btn" onClick={() => nav("/login")}>Sign In</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
