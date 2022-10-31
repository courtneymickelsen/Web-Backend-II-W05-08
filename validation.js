const { check, validationResult } = require("express-validator");

const customerValidation = [
  check("firstName", "Please include a first name").not().isEmpty(),
  check("lastName", "Last name must be at least 3 characters long").isLength({
    min: 3,
  }),
  check("email", "Please enter a valid phone number.").isEmail(),
  check("phoneNumber", "Please include a valid phone number.").isMobilePhone(),
];

// This function will be used as a piece of middleware that
// checks if "express-validator" found any errors with
// the request.
// "express-validator" checks for errors using the rules defined
// above and _stores them on the request object_
//
// This function below will check if those errors exist and print
// them out if so.
//
// See https://express-validator.github.io/docs/
const handleValidationErrors = (req, res, next) => {
  // Check if express validator found any errors
  const errors = validationResult(req);

  // Hooray! No errors. Call "next()" to continue
  // executing any remaining middleware and eventually
  // our controller functions
  if (errors.isEmpty()) {
    next();
  }

  // Uh-oh, there were errors. Let's send them back
  // to the user and set the response to a 400 (bad request)
  res.status(400).json(errors);
};

module.exports = { customerValidation, handleValidationErrors };
