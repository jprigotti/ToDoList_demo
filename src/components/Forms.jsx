import React, { useState, useRef, useEffect, useDeferredValue } from 'react'
import '../components/Forms.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdCheck, MdError, MdOutlineRemoveRedEye, MdRemoveRedEye } from 'react-icons/md';

const ControlledForm = () => {

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleChangeUsername = (e) => {
        setInputUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
        setInputPassword(e.target.value)
    }

    return (
        <div>
            <h2>Controlled form</h2>
            <form>
                <div>
                    <label>Username:
                        <input
                            type="text"
                            value={inputUsername}
                            // onChange={(e) => setInput(e.target.value)}
                            onChange={(e) => handleChangeUsername(e)}
                        />
                    </label>
                </div>

                <div>
                    <label>Password:
                        <input
                            type="password"
                            value={inputPassword}
                            // onChange={(e) => setInput(e.target.value)}
                            onChange={(e) => handleChangePassword(e)}
                        />
                    </label>
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>

    )
}

export default ControlledForm



// This is another component

export const LoginForm = () => {

    const formInitialState = {
        username: "",
        password: ""
    }

    const isValidInitialState = {
        username: true,
        usernameError: "",
        password: true,
        passwordError: "",
    }

    const [form, setForm] = useState(formInitialState);
    const [isValid, setIsValid] = useState(isValidInitialState);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleCursorOut = (e) => {
        console.log("Cursor out");

        const { name, value } = e.target;
        // getName == 'username' ? console.log("name is username") : console.log("name is password");

        switch (name) {
            case "username":
                console.log(e);
                if (value.length < 5) {
                    setIsValid({ ...isValid, [name]: true, usernameError: "" })

                } else {
                    setIsValid({ ...isValid, [name]: false, usernameError: "Username must be less that 5 characters" });
                }
                break;
            case "password":
                console.log("name is password");
                break;
        }



        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        console.log(form.username, form.password);
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='container-form'>

                    <input
                        type="text"
                        placeholder='Username'
                        name="username"
                        style={{ borderColor: (isValid.username === true) ? 'black' : 'red' }}
                        //value={form.username}
                        //onChange={handleChange}
                        onBlur={handleCursorOut}
                    ></input>
                    <p>{isValid.usernameError}</p>

                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        style={{ borderColor: (isValid.password === true) ? 'black' : 'red' }}
                        // value={form.password}
                        // onChange={handleChange}
                        onBlur={handleCursorOut}
                    ></input>

                    <input type="submit" value="Submit"></input>
                    <input type="reset" value="Clear"></input>
                </div>
            </form>
        </div>
    )
}



/**
 * THIS IS A FORM USING USEREF
 */

const FormWithUseRef = () => {
    const inputRef = userRef({});
    const [formData, setFormData] = useState({});




}



/**
 * CREATE A NEW TICKET FORM
 */

export const NewTicket = () => {

    const formInitialState = {
        openByName: "",
        openByArea: "",
        product: "",
        details: "",
    }

    const [form, setForm] = useState(formInitialState);

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
        <div className='col-6'>
            <h2>Nuevo incidente</h2>
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


/** RESET PASSWORD FORM - VM WARE */
export const ResetPassVMware = () => {

    const specialCharacters = ['!', '@', '#', '$', '%', '^', '(', ')', '_', '+', '[', ']', '-', '\'', ',', '/', '?', '*'];

    const [passwordInput, setPasswordInput] = useState('');
    const [verifyPasswordInput, setVerifyPasswordInput] = useState('');
    const [passwordsMatch, setPasswordMatch] = useState(false);
    const [validation, setValidation] = useState({
        length: false,
        specialChar: false,
        upperChar: false,
        lowerChar: false,
        numberChar: false,
    });

    const inputPasswordRef = useRef(null);
    const inputVerifyPasswordRef = useRef(null);
    const submitButtonRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        submitButtonRef.current.disabled = true;
    }, []);

    useEffect(() => {
        passwordInput.length > 7 && passwordInput.length < 20 ?
            setValidation((prevValidation) => ({ ...prevValidation, length: true })) :
            setValidation((prevValidation) => ({ ...prevValidation, length: false }));

        specialCharacters.find((character) => passwordInput.includes(character)) ?
            setValidation(prevValidation => ({ ...prevValidation, specialChar: true })) :
            setValidation(prevValidation => ({ ...prevValidation, specialChar: false }));

        /[A-Z]/.test(passwordInput) ?
            setValidation(prevValidation => ({ ...prevValidation, upperChar: true })) :
            setValidation(prevValidation => ({ ...prevValidation, upperChar: false }));


        // passwordInput.split("").find((character) => character === character.toLocaleLowerCase() && isNaN(character)) ?
        /[a-z]/.test(passwordInput) ?
            setValidation(prevValidation => ({ ...prevValidation, lowerChar: true })) :
            setValidation(prevValidation => ({ ...prevValidation, lowerChar: false }));

        passwordInput.split("").find((character) => !isNaN(character)) ?
            setValidation((prevValidation) => ({ ...prevValidation, numberChar: true })) :
            setValidation((prevValidation) => ({ ...prevValidation, numberChar: false }));

    }, [passwordInput, verifyPasswordInput]);


    useEffect(() => {
        const checkPasswordMatchResult = checkPasswordMatch(validation);
        setPasswordMatch(checkPasswordMatchResult);
    }, [validation]);

    const checkPasswordMatch = (validationState) => {

        if (passwordInput != "" &&
            passwordInput === verifyPasswordInput &&
            Object.values(validationState).every(val => val === true)) {
            submitButtonRef.current.disabled = false;
            return true;
        } else {
            submitButtonRef.current.disabled = true;
            return false;
        }

    }

    const showPassword = (e) => {
        (inputPasswordRef.current.type == 'text') ? inputPasswordRef.current.type = 'password' : inputPasswordRef.current.type = 'text';

    }

    const showVerifyPassword = (e) => {
        (inputVerifyPasswordRef.current.type == 'text') ? inputVerifyPasswordRef.current.type = 'password' : inputVerifyPasswordRef.current.type = 'text';
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Password is ${passwordInput}`);
        setPasswordInput("");
        setVerifyPasswordInput("");


    }

    return (
        <div className='container-sm' >
            <div className='row'>
                <h2>Reset Password</h2>
                <p>This will update the password for the account login</p>
            </div>

            <div className='row'>

                <div className='col-6'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className='d-flex flex-column align-items-start mb-3'>
                            <p className='-e'>{passwordsMatch ? <MdCheck /> : <MdError />} Authentincation code verified</p>
                            <p>New Password:</p>
                            <div className="input-inner-container">
                                <input
                                    ref={inputPasswordRef}
                                    className="__inputStyle"
                                    type="password"
                                    name="inputPassword"
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    value={passwordInput}
                                /><span><MdOutlineRemoveRedEye className='eye-icon' onClick={showPassword} /></span>
                            </div>
                        </div>

                        <div className='d-flex flex-column align-items-start'>
                            <p>Verify new Password:</p>
                            <div className="input-inner-container">
                                <input
                                    ref={inputVerifyPasswordRef}
                                    className="__inputStyle"
                                    type="password"
                                    name="inputVerifyPassword"
                                    onChange={(e) => setVerifyPasswordInput(e.target.value)}
                                    value={verifyPasswordInput}
                                /><span><MdOutlineRemoveRedEye className='eye-icon' onClick={showVerifyPassword} /></span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start my-3'>
                            <input ref={submitButtonRef} type="submit" value="Submit" className='btn btn-primary'></input>
                        </div>

                    </form>
                </div>



                <div className='col-6'>
                    <p>Password must contain al least</p>

                    <ul className='d-flex flex-column align-items-start'>
                        <li>{validation.length ? <MdCheck /> : <MdError />} 8 and at most 20 characters</li>
                        <li>{validation.specialChar ? <MdCheck /> : <MdError />} One special character !@#$%^()_+[]-{ }',/?*</li>
                        <li>{validation.upperChar ? <MdCheck /> : <MdError />} One upper case letter</li>
                        <li>{validation.lowerChar ? <MdCheck /> : <MdError />} One lower case letter</li>
                        <li>{validation.numberChar ? <MdCheck /> : <MdError />} One number</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

/** 
https://www.useblackbox.io/search
yarn add react-controlled-form

import { useField, useForm } from 'react-controlled-form'

function Input({ isValid, errorMessage, ...props }) {
  return (
    <div>
      <input style={{ borderColor: isValid ? 'black' : 'red' }} {...props} />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

const nameValidation = {
  'Please enter at least 2 characters.': (value) => value.length >= 2,
  'Only use alphabetic letters.': /^[a-z]*$/gi,
}

function Form() {
  const firstname = useField({
    name: 'firstname',
    validation: nameValidation,
  })

  const lastname = useField({
    name: 'firstname',
    validation: nameValidation,
  })

  const { submit, reset } = useForm(firstname, lastname)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        submit((isValid, data) => {
          if (isValid) {
            console.log('Submitted: ', data)
            reset()
          }
        })
      }}>
      <Input {...firstname.props} />
      <Input {...lastname.props} />
      <input type="submit" />
    </form>
  )
}
*/