import React, { useState } from 'react'
import '../components/Forms.css'

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
                    setIsValid({ ...isValid, [name]: true, usernameError:""})

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