import React from 'react'
import ToDoCard from './ToDoCard'
import './ToDoCards.css'

const ToDoCards = ({ todoList }) => {
    console.log("todoList from todoCards ", todoList)
    return (
        <div className='items-cotainer'>
            {
                // todoList.length > 0 ?
                todoList.map((todoItem) => { return <ToDoCard todoItem={todoItem} /> })
                // "no items to show"
            }
        </div>
    )
}

export default ToDoCards
