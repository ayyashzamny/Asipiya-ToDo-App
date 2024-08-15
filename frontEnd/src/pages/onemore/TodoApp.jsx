import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskColumn from '../../components/TaskColumn';
import TaskForm from '../../components/TaskForm';
import api from '../../services/api';

const TodoApp = () => {
    const [todoTasks, setTodoTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await api.getTasks();
            const todo = data.filter(task => task.status === 'todo');
            const completed = data.filter(task => task.status === 'completed');
            setTodoTasks(todo);
            setCompletedTasks(completed);
        };
        fetchTasks();
    }, []);

    const onTaskAdded = (newTask) => {
        setTodoTasks([...todoTasks, newTask]);
    };

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;

        if (destination.droppableId === source.droppableId) return;

        const taskToUpdate = (source.droppableId === 'todoTasks' ? todoTasks : completedTasks).find(
            task => task.id.toString() === draggableId
        );

        taskToUpdate.status = destination.droppableId === 'todoTasks' ? 'todo' : 'completed';

        api.updateTask(draggableId, taskToUpdate);

        setTodoTasks(prev => prev.filter(task => task.id.toString() !== draggableId));
        setCompletedTasks(prev => prev.filter(task => task.id.toString() !== draggableId));

        if (destination.droppableId === 'todoTasks') {
            setTodoTasks(prev => [...prev, taskToUpdate]);
        } else {
            setCompletedTasks(prev => [...prev, taskToUpdate]);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="todo-app">
                <TaskForm onTaskAdded={onTaskAdded} />
                <TaskColumn title="Todo" tasks={todoTasks} droppableId="todoTasks" />
                <TaskColumn title="Completed" tasks={completedTasks} droppableId="completedTasks" />
            </div>
        </DragDropContext>
    );
};

export default TodoApp;
