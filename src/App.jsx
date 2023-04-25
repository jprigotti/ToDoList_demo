import React, {useState} from 'react'
import './App.css'
import { LoginForm, NewTicket, ResetPassVMware } from './components/Forms'
import Card from './components/Card'
import Header from './components/Header'
import ToDoCards from './components/ToDoCards'

function App() {

  const toDoList = []

  return (
    <div>
      {/* <LoginForm /> */}
      {/* <Header /> */}
      {/* <ToDoCards toDoList={toDoList}/> */}
      {/* <NewTicket /> */}
      <ResetPassVMware />
    </div>

  )
}

export default App
