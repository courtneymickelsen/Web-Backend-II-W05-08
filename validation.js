const { body, result } = require('express-validator');

const customerValidation = [
    body('firstName', 'Please include a first name').not().isEmpty(),
    body('lastName', 'Last name must be at least 3 characters long').isLength({min: 3}),
    body('email', 'Please enter a valid phone number.').isEmail(),
    body('phoneNumber', 'Please include a valid phone number.').isMobilePhone(),
    (req, res) => {
        const errors = result(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    }
]

module.exports = { customerValidation }