
require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount , 
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    
    res.json({ id: order.id });

  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ message: "Payment processing failed", error });
  }
});

module.exports = router;
