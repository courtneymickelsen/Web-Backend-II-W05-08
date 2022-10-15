const routes = require('express').Router();
const { getAllCustomers, getSingleCustomer, createCustomer } = require('../controllers/customers');

routes.get('/', getAllCustomers);
routes.get('/:id', getSingleCustomer);
routes.post('/', createCustomer);

module.exports = routes;