const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const userController = require('../controllers/userController');
const {authenticate} = require('../middleware/authenticate');

router.get('/todos', authenticate, todoController.list);
//router.get('/user/:user/todos', authenticate, todoController.listByUser);
router.post('/todos', authenticate, todoController.add);
router.get('/todos/:id', authenticate, todoController.findById);
router.delete('/todos/:id', authenticate, todoController.deleteById);
router.patch('/todos/:id', authenticate, todoController.updateById);

router.get('/users', authenticate, userController.list);
router.post('/users',userController.add);
router.get('/users/:id',authenticate, userController.findById);
router.post('/login', userController.login);
router.delete('/logout', authenticate, userController.logout);

module.exports = router;