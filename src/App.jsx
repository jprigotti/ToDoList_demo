import React, { useEffect, useState } from 'react'
import './App.css'
import { LoginForm, NewTicket, ResetPassVMware } from './components/Forms'
import Card from './components/Card'
import Header from './components/Header'
import ToDoCards from './components/ToDoCards'
import { getAllPokemonsService } from './services/getAllPokemons.service'


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      try {
        const res = await getAllPokemonsService(10, 1);
        console.log(res);
        setPokemons(res);
      } catch (error) {
        console.log("Error trying to fetch pokemon service with: ", error);
      }finally{
        setIsLoading(false);
      }
    }

    fetchAllPokemons();
  }, []);



  return (
    <div>
      {/* <LoginForm /> */}
      <Header todoList={todoList} setTodoList={setTodoList} />
      <ToDoCards todoList={todoList} setTodoList={setTodoList} />
      {/* <NewTicket /> */}
      {/* <ResetPassVMware /> */}
    </div>

  )
}

export default App
