const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const userController = require('../controllers/userController');

router.get('/todos', todoController.list);
router.get('/user/:user/todos', todoController.listByUser);
router.post('/user/:user/todos', todoController.add);
router.get('/todos/:id', todoController.findById);
router.delete('/todos/:id', todoController.deleteById);

router.get('/users', userController.list);
router.post('/users',userController.add);
router.get('/users/:id', userController.findById);

module.exports = router;