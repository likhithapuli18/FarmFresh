

const express = require("express");
const cors = require("cors");

const db = require("./db");
const authRoutes = require("./auth");


const app = express();
app.use(cors());
app.use(express.json());
const paymentRoutes = require("./payment");
app.use("/api/payment", paymentRoutes);

const paymentSaveRoutes = require("./savePayment");
app.use("/api/save-payment", paymentSaveRoutes);



app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
