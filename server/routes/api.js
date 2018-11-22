const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const userController = require('../controllers/userController');

router.get('/todos', todoController.list);
router.post('/todos', todoController.add);

router.get('/users', userController.list);

module.exports = router;