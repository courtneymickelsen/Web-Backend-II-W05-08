const routes = require('express').Router();
const { getAllCustomers, getSingleCustomer, createCustomer, editCustomer, deleteCustomer } = require('../controllers/customers');
const { customerValidation, orderValidation, handleValidationErrors } = require('../middleware/validation');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

routes.get('/', getAllCustomers);
routes.get('/:id', getSingleCustomer);
routes.post('/', customerValidation, handleValidationErrors, createCustomer);
routes.put('/:id', ensureAuth, customerValidation, handleValidationErrors, editCustomer);
routes.delete('/:id', ensureAuth, deleteCustomer);

module.exports = routes;