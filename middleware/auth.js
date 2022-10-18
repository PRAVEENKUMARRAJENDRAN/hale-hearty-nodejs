//Process Environment COnfiguration
require("dotenv").config();
//Package to create JWT
const jwt = require("jsonwebtoken");

//Created a function ES6
const auth = (req, res, next) => {
  //Getting the token based on the header
  const token = req.header("auth-token");

  //If No token means Send a error code and error message in the response
  if (!token) {
    return res.status(401).json({ msg: "Authorization denied" });
  }

  //Better pratice to use try catch to do error handling
  try {
    //verifying the token is valid or not
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    //This function calls the next middleware to execute
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};

module.exports = auth;
