const { db } = require("./db");

const usersCollection = db.collection("users");

module.exports = usersCollection;
