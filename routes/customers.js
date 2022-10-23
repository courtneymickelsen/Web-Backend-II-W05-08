const routes = require('express').Router();
const { getAllCustomers, getSingleCustomer, createCustomer, editCustomer, deleteCustomer } = require('../controllers/customers');
const { customerValidation } = require('../validation');

routes.get('/', getAllCustomers);
routes.get('/:id', getSingleCustomer);
routes.post('/', customerValidation, createCustomer);
routes.put('/:id', customerValidation, editCustomer);
routes.delete('/:id', deleteCustomer);

module.exports = routes;