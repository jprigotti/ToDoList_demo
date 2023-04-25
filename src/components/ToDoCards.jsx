import React from 'react'
import ToDoCard from './ToDoCard'

const ToDoCards = ({ toDoList }) => {
    return (
        <>
        {toDoList.map((toDo) => {
            <ToDoCard key={toDoList.id} />
        })}
        </>
    )
}

export default ToDoCards
