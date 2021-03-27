const { Router } = require('express');
const ExampleRouter = require('./usersHB');

const router = Router();

// aqui vai todas as rotas
router.use('/exemple', ExampleRouter);

router.use('/users', ExampleRouter);

module.exports = router;
