const routes = require('express').Router();
const customersRoutes = require('./customers');
const ordersRoutes = require('./orders');
const { home } = require('../controllers/home');

routes.get('/', home);
routes.use('/customers', customersRoutes);
routes.use('/orders', ordersRoutes);

module.exports = routes;