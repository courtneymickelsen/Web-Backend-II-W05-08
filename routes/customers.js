const routes = require('express').Router();
const { getAllCustomers, getSingleCustomer, createCustomer, editCustomer, deleteCustomer } = require('../controllers/customers');
const { customerValidation, orderValidation, handleValidationErrors } = require('../middleware/validation');

routes.get('/', getAllCustomers);
routes.get('/:id', getSingleCustomer);
routes.post('/', customerValidation, handleValidationErrors, createCustomer);
routes.put('/:id', customerValidation, handleValidationErrors, editCustomer);
routes.delete('/:id', deleteCustomer);

module.exports = routes;