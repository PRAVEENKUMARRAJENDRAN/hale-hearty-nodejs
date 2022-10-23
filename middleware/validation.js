const { check } = require("express-validator");

module.exports.validationLogin = [
  check("email", "Enter the valid email").isEmail(),
  check("password", "Password is required").exists(),
];
