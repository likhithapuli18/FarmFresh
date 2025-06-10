const express = require("express");
const { db } = require("./db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { mobile, amount, paymentId, orderId } = req.body;
    const paymentsCollection = db.collection("payments");

    await paymentsCollection.insertOne({ mobile, amount, paymentId, orderId, status: "Success" });
    

    res.status(201).json({ message: "Payment saved successfully" });
  } catch (error) {
    console.error("Save Payment Error:", error);
    res.status(500).json({ message: "Error saving payment" });
  }
});

module.exports = router;
