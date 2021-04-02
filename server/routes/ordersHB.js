const { Router } = require('express');
const OrdersController = require('../controller/OrdersController');

const router = Router();

// requisições para orders
router.get('/', OrdersController.getAllOrders);
router.get('/:idOrder', OrdersController.createNewOrder);
router.post('/createOrder', OrdersController.updateOrder);
router.put('/:idOrder', OrdersController.getOrderById);
router.delete('/:idOrder', OrdersController.deleteOrder);

module.exports = router;
