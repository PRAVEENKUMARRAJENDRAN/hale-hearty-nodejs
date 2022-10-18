const mongoose = require("mongoose");

//This will help us to create the table with schema in mongoose
const loginSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//login we are passing is to create a tablename login for the login schema 
module.exports = mongoose.model('login',loginSchema)
