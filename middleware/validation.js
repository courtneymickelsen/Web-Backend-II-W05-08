const { check, validationResult } = require("express-validator");

const customerValidation = [
  check("firstName", "Please include a first name").not().isEmpty(),
  check("lastName", "Last name must be at least 3 characters long").isLength({
    min: 3,
  }),
  check("email", "Please enter a valid phone number.").isEmail(),
  check("phoneNumber", "Please include a valid phone number.").isMobilePhone(),
];

const orderValidation = [
  check("count", "Count must be a valid whole number to continue.").isInt(),
  check("count", "You must buy at least 1 item to place an order.").custom((value, {}) => value > 0)
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    res.status(400).json(errors);
  }
};

module.exports = { customerValidation, orderValidation, handleValidationErrors };
