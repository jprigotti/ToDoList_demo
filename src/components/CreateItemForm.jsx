import React, { useState, useRef } from 'react'
import './CreateItemForm.css'

const CreateItemForm = () => {

    const formInitialState = {
        openByName: "",
        openByArea: "",
        product: "",
        details: "",
    }

    const [form, setForm] = useState(formInitialState);
    const [createItemFormVisibility, setCreateItemFormVisibility] = useState(false);

    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted");
        console.log(form);

        const tempForm = form;
        for (const key in tempForm) {
            tempForm[key] = "";
        }
        setForm(tempForm)

        handleReset();
        console.log(form);
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
                    ></input>

                    <input
                        type="text"
                        placeholder='ingrese el servicio'
                        name="openByArea"
                        onBlur={handleChange}
                    ></input>

                    <input
                        type="text"
                        placeholder='ingrese el producto'
                        name="product"
                        onBlur={handleChange}
                    ></input>
                    <input
                        type="text"
                        placeholder='ingrese los detalles'
                        name="details"
                        onBlur={handleChange}
                    ></input>

                    <input type="submit" value="Submit"></input>
                    <input type="reset" value="Clear"></input>
                </div>
            </form>
        </div>
    )
}

export default CreateItemForm