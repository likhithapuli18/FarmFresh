

const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb+srv://likhithapuli:Lucky%407174@cluster0.e5l35.mongodb.net/farmfresh?retryWrites=true&w=majority");


async function connectDB() {
  try {
    await client.connect();
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
  }
}

connectDB();

const db = client.db("farmfresh"); 
module.exports = { db, client }; 