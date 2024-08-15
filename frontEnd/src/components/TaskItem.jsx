import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskItem = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided) => (
                <div
                    className="task-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <h4>{task.title}</h4>
                    <p>{task.content}</p>
                </div>
            )}
        </Draggable>
    );
};

export default TaskItem;
