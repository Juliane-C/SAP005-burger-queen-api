const { Router } = require('express');
const ProductsController = require('../controller/ProductsController');

const router = Router();

// requisições de products
router.get('/', ProductsController.getAllProducts);
router.get('/:idProduct', ProductsController.getProductById);
router.post('/createProduct', ProductsController.createNewProduct);
router.put('/:idProduct', ProductsController.updateProduct);
router.delete('/:idProduct', ProductsController.deleteProduct);

module.exports = router;
