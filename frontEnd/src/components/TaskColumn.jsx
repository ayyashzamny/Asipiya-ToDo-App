import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';

const TaskColumn = ({ title, tasks, droppableId }) => {
    return (
        <div className="column">
            <h2>{title}</h2>
            <Droppable droppableId={droppableId}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="task-list">
                        {tasks.map((task, index) => (
                            <TaskItem key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TaskColumn;
