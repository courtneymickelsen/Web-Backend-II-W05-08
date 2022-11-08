const routes = require('express').Router();
const { getAllOrders, getSingleOrder, createOrder, editOrder, deleteOrder } = require('../controllers/orders');
const { customerValidation, orderValidation, handleValidationErrors } = require("../middleware/validation");
const { ensureAuth, ensureGuest } = require('../middleware/auth');

routes.get('/', getAllOrders);
routes.get('/:id', getSingleOrder);
routes.post('/', orderValidation, handleValidationErrors, createOrder);
routes.put('/:id', orderValidation, handleValidationErrors, editOrder);
routes.delete('/:id', deleteOrder);

module.exports = routes;