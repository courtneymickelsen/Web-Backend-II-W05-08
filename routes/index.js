const routes = require('express').Router();
const customersRoutes = require('./customers');
const { home } = require('../controllers/home');

routes.get('/', home);
routes.use('/customers', customersRoutes);

module.exports = routes;