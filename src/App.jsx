import React, {useState} from 'react'
import './App.css'
import { LoginForm, NewTicket, ResetPassVMware } from './components/Forms'
import Card from './components/Card'
import Header from './components/Header'
import CreateItemForm from './components/CreateItemForm'

function App() {
  const [createItemFormVisibility, setCreateItemFormVisibility] = useState(false);

  return (
    <div>
      {/* <LoginForm /> */}
      <Header />
      {createItemFormVisibility && <CreateItemForm />  }
      {/* <NewTicket /> */}
      {/* <ResetPassVMware /> */}
    </div>

  )
}

export default App
