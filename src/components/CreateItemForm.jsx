import React, { useState, useRef, useEffect } from 'react'
import './CreateItemForm.css'

const CreateItemForm = ({ todoList, setTodoList }) => {

    const todoItemInitialState = {
        id: "",
        openByName: "",
        openByArea: "",
        product: "",
        details: "",
    }

    const [todoItem, setTodoItem] = useState(todoItemInitialState);
    const formRef = useRef(null);

    // FUNCTIONS
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodoItem({
            ...todoItem,
            [name]: value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoList.length > 0) {
            const lastObject = todoList[todoList.length - 1];
            setTodoList([...todoList, { ...todoItem, id: lastObject.id + 1 }]);
        } else {
            setTodoList([...todoList, { ...todoItem, id: 1 }]);
        };
        handleReset();
    }


    const handleReset = () => {
        formRef.current.reset();
    }


    return (
        <div className='create-item-container col-6 '>
            <h4>Crear nueva tarea</h4>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className='container-form'>

                    <input
                        type="text"
                        placeholder='Ingrese su nombre'
                        name="openByName"
                        onBlur={handleChange}
                        required
                    ></input>

                    <input
                        type="text"
                        placeholder='ingrese el servicio'
                        name="openByArea"
                        onBlur={handleChange}
                        required
                    ></input>

                    <input
                        type="text"
                        placeholder='ingrese el producto'
                        name="product"
                        onBlur={handleChange}
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder='ingrese los detalles'
                        name="details"
                        onBlur={handleChange}
                        required
                    ></input>

                    <input type="submit" value="Submit"></input>
                    <input type="reset" value="Clear"></input>
                </div>
            </form>
        </div>
    )
}

export default CreateItemForm