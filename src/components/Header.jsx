import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container d-flex justify-content-between mb-3'>
            <div>
                <h2>ToDo-List</h2>
            </div>
            <div className='align-self-center'>
                <button className='btn btn-primary'>Add</button>
            </div>

        </div>
    )
}

export default Header
