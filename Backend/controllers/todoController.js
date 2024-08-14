// todoController.js
const todoService = require('../services/todoService');

class TodoController {
    async getAllTasks(req, res) {
        try {
            const tasks = await todoService.getAllTasks();
            res.json(tasks);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getTaskById(req, res) {
        try {
            const task = await todoService.getTaskById(req.params.id);
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async createTask(req, res) {
        try {
            const taskId = await todoService.createTask(req.body);
            res.status(201).json({ id: taskId });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateTask(req, res) {
        try {
            await todoService.updateTask(req.params.id, req.body);
            res.status(200).json({ message: 'Task updated successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteTask(req, res) {
        try {
            await todoService.deleteTask(req.params.id);
            res.status(200).json({ message: 'Task deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new TodoController();
