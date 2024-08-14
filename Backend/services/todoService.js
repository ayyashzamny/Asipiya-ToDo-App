// todoService.js
const db = require('../db/db');

class TodoService {
    async getAllTasks() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM `todo-tasks`';
            db.query(sql, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }


    async getTaskById(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM `todo-tasks` WHERE id = ?";
            db.query(sql, [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.length === 0) {
                    return resolve(null);
                }
                resolve(result[0]);
            });
        });
    }

    async createTask(task) {
        const { title, content, userId } = task;
        const [result] = await db.query('INSERT INTO `todo-tasks` (title, content, userId) VALUES (?, ?, ?)', [title, content, userId]);
        return result.insertId;
    }

    async updateTask(id, task) {
        const { title, content, userId } = task;
        await db.query('UPDATE `todo-tasks` SET title = ?, content = ?, userId = ? WHERE id = ?', [title, content, userId, id]);
    }

    async deleteTask(id) {
        await db.query('DELETE FROM `todo-tasks` WHERE id = ?', [id]);
    }
}

module.exports = new TodoService();
