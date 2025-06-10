

const express = require("express");
const bcrypt = require("bcryptjs");

const { db } = require("./db");
const usersCollection = db.collection("users");


const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { fullName, mobile, password } = req.body;

    console.log("Received Signup Data:", req.body); 

    
    const existingUser = await usersCollection.findOne({ mobile });
    console.log("Existing User:", existingUser); 

    if (existingUser) {
      return res.status(400).json({ message: "Mobile number already registered" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword); 

    
    const newUser = { fullName, mobile, password: hashedPassword };
    const result = await usersCollection.insertOne(newUser);
    console.log("Insert Result:", result); 

    res.status(201).json({ message: "Signup successful! Please login." });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { mobile, password } = req.body;
    const user = await usersCollection.findOne({ mobile });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
