const { Router } = require('express');
const UserRouter = require('./usersHB');
const ProductRouter = require('./productsHB');
const OrderRouter = require('./ordersHB');

const router = Router();

// rotas principais
router.use('/users', UserRouter);
router.use('/products', ProductRouter);
router.use('/orders', OrderRouter);

module.exports = router;
