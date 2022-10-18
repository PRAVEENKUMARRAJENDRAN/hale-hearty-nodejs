const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const Login = require("../models/Login");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //checking in the DB whether the email is they are not
    let loginDetails = await Login.findOne({ email });

    if (loginDetails) {
      return res.status(400).json({ message: "User already exists" });
    }
    //assing the line 9 values to the Login Model
    loginDetails = new Login({
      name,
      email,
      password,
    });

    //Encrypting the password
    const salt = await bcrypt.genSalt(10);
    loginDetails.password = await bcrypt.hash(password, salt);

    //Saving to database
    await loginDetails.save();

    //Payload of the JWT token
    const payload = {
      user: {
        id: loginDetails.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 36000,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router
