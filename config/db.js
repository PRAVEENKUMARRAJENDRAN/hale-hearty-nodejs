const mongoose = require("mongoose");
//Process Environment COnfiguration
require('dotenv').config()

//Getting the mongoUri from the config file
const db = process.env.MONGO_URI;

//DATABASE CONFIGURATION 
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connection established");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
