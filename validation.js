const { check } = require('express-validator');

const customerValidation = [
    check('firstName', 'Please include a first name').not().isEmpty(),
    check('lastName', 'Last name must be at least 3 characters long').isLength({min: 3}),
    check('email', 'Please enter a valid phone number.').isEmail(),
    check('phoneNumber', 'Please include a valid phone number.').isMobilePhone()
]

module.exports = { customerValidation };