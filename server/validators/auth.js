const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength()
    .withMessage("Password must be at least 6 characters long"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength()
    .withMessage("Password must be at least 6 characters long"),
];
