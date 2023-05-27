import './App.css';
import AddTodo from './Components/AddTodo';
import ListTodo from './Components/ListTodo';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])
  const [updateTodo, setUpdateTodo] = useState({})
  const [input, setInput] = useState({
    title: "",
    completed: false
  })

  const addTodos = async () => {
    await fetch('https://6472082a6a9370d5a41af24f.mockapi.io/todos/todos', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    })
    .then(response => response.json())
    .then(json => {
      fetchTodos()
    })
  }

  const fetchTodos = async () => {
    await fetch('https://6472082a6a9370d5a41af24f.mockapi.io/todos/todos')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setTodos(json)
    })
  }

  const deleteTodos = async (todoId) => {
    await fetch(`https://6472082a6a9370d5a41af24f.mockapi.io/todos/todos/${todoId}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(json => {
      fetchTodos()
    })
  }

  const updateTodos = async (todoId, isCompleted) => {
    await fetch(`https://6472082a6a9370d5a41af24f.mockapi.io/todos/todos/${todoId}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: isCompleted })
    })
    .then(response => response.json())
    .then(json => {
      fetchTodos()
    })
  }

  useEffect(() => {

    fetchTodos()

  },[])


  return (
    <div className="App">

      <AddTodo setInput={setInput} addTodos={addTodos}/>
      <div style={{ padding: "10px"}}>
        <ListTodo todos={todos} deleteTodos={deleteTodos} updateTodos={updateTodos}/>
      </div>
  
    </div>
  );
}

export default App;
