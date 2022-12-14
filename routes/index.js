const routes = require('express').Router();
const customersRoutes = require('./customers');
const ordersRoutes = require('./orders');
const authRoutes = require('./auth');
const { home } = require('../controllers/home');

routes.get('/', home);
routes.get('/customers', customersRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/auth', authRoutes);

module.exports = routes;