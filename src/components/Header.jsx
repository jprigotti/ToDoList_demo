import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'
import CreateItemForm from './CreateItemForm';

const Header = () => {

    const [createItemFormVisibility, setCreateItemFormVisibility] = useState(false);
    const btnAddRef = useRef(null);

    const toggleCreateItemForm = () => {
        setCreateItemFormVisibility(!createItemFormVisibility);
        btnAddRef.current.textContent === "Close" ? btnAddRef.current.textContent = "Add" : btnAddRef.current.textContent = "Close";

    }

    return (
        <div>
            <div className='header-container d-flex justify-content-between mb-3'>
                <div>
                    <h2>ToDo-List</h2>
                </div>
                <div className='align-self-center'>
                    <button ref={btnAddRef} className='btn btn-primary' onClick={toggleCreateItemForm}>Add</button>
                </div>
            </div>

            {createItemFormVisibility && <CreateItemForm />}
        </div>
    )
}

export default Header
