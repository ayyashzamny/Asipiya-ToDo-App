import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 8px;
    color: black;
    margin-bottom: 8px;
    min-height: 20px;
    margin-right: 8px;
    margin-left: 8px;  
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    `;

const TextContent = styled.div``;

const Icons = styled.div`
    display: flex;
    justify-content: end;
    padding: 2px;
    `;


function bgcolorChange(props) {
    return props.isDraggingOver
        ? 'skyblue'
        : props.isDraggable
            ? props.isBacklog
                ? 'lightblue'
                : "lightgreen"
            : props.isBacklog
                ? 'lightblue'
                : "white";
}


export default function Task({ task, index }) {
    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <Container

                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >

                    <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
                        <span>
                            <small>
                                #{task.id}
                                {" "}
                            </small>
                        </span>


                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: 2,
                        }}
                    >
                        <TextContent>
                            {task.title}
                        </TextContent>
                    </div>


                    <Icons>
                        <div>
                            {/* <Avatar src={""}/> */}
                        </div>
                    </Icons>

                    {provided.placeholder}

                </Container>
            )}
        </Draggable>
    )
}
