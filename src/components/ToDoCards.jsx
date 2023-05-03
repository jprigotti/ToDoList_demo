import React from 'react'
import ToDoCard from './ToDoCard'
import './ToDoCards.css'

const ToDoCards = ({ todoList, setTodoList }) => {
    const deleteTodoItem = (delteItemId) => {
        const filterTodo = todoList.filter((todo) => todo.id != delteItemId);
        setTodoList(filterTodo);
    }

    console.log("todoList from todoCards ", todoList)
    return (
        <div className='items-cotainer'>
            {
                // todoList.length > 0 ?
                todoList.map((todoItem) => { return <ToDoCard key={todoItem.id} todoItem={todoItem} onDelete={deleteTodoItem} /> })
                // "no items to show"
            }
        </div>
    )
}

export default ToDoCards
