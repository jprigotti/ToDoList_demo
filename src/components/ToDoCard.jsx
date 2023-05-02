import React from 'react'
import './ToDoCard.css'

const ToDoCard = ({todoItem}) => {
  return (
    <div className='item-container'>
      <h5>ToDo Task</h5>
      <p>Solicitante: {todoItem.openByName}</p>
      <p>Servicio: {todoItem.openByArea}</p>
      <p>Producto: {todoItem.product}</p>
      <p>Detalles: {todoItem.details}</p>
    </div>
  )
}

export default ToDoCard
