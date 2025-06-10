const express = require("express")
const router = express.Router()
const URL = process.env.DB_URL
const { MongoClient ,ObjectId } = require("mongodb")
require('dotenv').config()
router.get('/', async (req,res)=>{
        try{
           
            let client = await MongoClient.connect("mongodb+srv://likhithapuli:Lucky%407174@cluster0.e5l35.mongodb.net/");
            const db = client.db('FarmFresh_db');
            const collection = db.collection('Hay');
            const data = await collection.find().toArray();
            res.json(data);
        }catch(err){
            console.log(err)
        }
    })
    router.post("/", async (req, res) => {
        try {
          let client = await MongoClient.connect("mongodb+srv://likhithapuli:Lucky%407174@cluster0.e5l35.mongodb.net/");
          const db = client.db("FarmFresh_db");
          const collection = db.collection("Hay");
          const Product = req.body;
          await collection.insertOne(Product);
          res.json(Product);
          
        } catch (err) {
          console.log(err);
         
        }
      });

      router.put("/:id", async (req, res) => {
        try {
          let client = await MongoClient.connect("mongodb+srv://likhithapuli:Lucky%407174@cluster0.e5l35.mongodb.net/");
          const db = client.db("FarmFresh_db");
          const collection = db.collection("Hay");
          const { id } = req.params;
          const updatedData = req.body;
          await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });
          res.json({ message: "updated" });
          
        } catch (err) {
          console.log(err);
        } 
      });

      router.delete("/:id", async (req, res) => {
        try {
          let client = await MongoClient.connect("mongodb+srv://likhithapuli:Lucky%407174@cluster0.e5l35.mongodb.net/");
          const db = client.db("FarmFresh_db");
          const collection = db.collection("Hay");
          const { id } = req.params;
          await collection.deleteOne({ _id: new ObjectId(id) });
          res.json({ message: " deleted" });
          
        } catch (err) {
          console.log(err);
          
        }
      });



module.exports = router