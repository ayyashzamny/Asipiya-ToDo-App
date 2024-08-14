// routes.js
const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.get('/tasks', todoController.getAllTasks);
router.get('/tasks/:id', todoController.getTaskById);
router.post('/tasks', todoController.createTask);
router.put('/tasks/:id', todoController.updateTask);
router.delete('/tasks/:id', todoController.deleteTask);

module.exports = router;
