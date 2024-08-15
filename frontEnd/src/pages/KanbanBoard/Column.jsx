import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    background-color: lightgrey;
    border-radius: 2px;
    width: 220px;
    height: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid lightgrey;
    `;


const Title = styled.h3`
    padding: 8px;
    background-color: pink;
    text-align: center;
    `;

const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height: 100px;
    `;




export default function Column({ title, tasks, id }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {/* provide the tasks */}

                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}
