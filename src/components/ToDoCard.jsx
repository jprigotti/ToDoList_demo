import React, {useState} from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import './ToDoCard.css'

const ToDoCard = ({todoItem, onDelete}) => {

const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='item-container'>
      <h5>ToDo Task</h5>
      <p>Solicitante: {todoItem.openByName}</p>
      <p>Servicio: {todoItem.openByArea}</p>
      <p>Producto: {todoItem.product}</p>
      <p>Detalles: {todoItem.details}</p>
      <div className='item-controls'>
      <input
      type="checkbox"
      checked={isChecked}
      onChange={()=>setIsChecked(!isChecked)}
      ></input>
      <button 
      className='btn-icon'
      onClick={()=>onDelete(todoItem.id)}><FaRegTrashAlt /></button>
      </div>

    </div>
  )
}

export default ToDoCard
