const { Router } = require('express');
const UsersController = require('../controller/UsersController');

const router = Router();

// aqui vai as requisições da rota de users
router.get('/', UsersController.getAllUsers);
router.get('/:idUser', UsersController.getUserById);
router.post('/createUser', UsersController.createNewUser);
router.put('/:idUser', UsersController.updateUser);
router.delete('/:idUser', UsersController.deleteUser);

module.exports = router;
