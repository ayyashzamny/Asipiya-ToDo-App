import React, { useState } from 'react';
import api from '../services/api';

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title.trim() === '' || content.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        const newTask = {
            title,
            content,
            status: 'todo'  // Default status for new tasks
        };

        try {
            const { data: createdTask } = await api.createTask(newTask);
            onTaskAdded(createdTask); // Callback to update the state in TodoApp
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Failed to add task', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h3>Add New Task</h3>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
