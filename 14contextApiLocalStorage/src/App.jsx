/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react"
import { ToDoContext, ToDoProvider, useToDo } from './contexts'
import { ToDoForm } from "./components"
import TodoItem from "./components/ToDoItems"


function App() {
  const [todos, setToDos] = useState([])

  function addToDo(todo) {
    // setToDos(todo) // if we do like this then all the previous value will be loss from the array 

    // by doing this we have the access of the array as prev 
    // https://www.youtube.com/watch?v=DoIGxx7P-ps     => spread operator

    setToDos((prev) => [{
      id: Date.now(), ...todo
    }, ...prev]) // ...prev have the array data excluding the data which we are going to insert rightnow and we are adding todo in array. in ToDoContext file todos array accept {id,todo,completed} to push the element in the array 
  }




  function updateToDo(id, todo) {
    setToDos((prev) => prev.map((prevToDo) => prevToDo.id === id ? todo : prevToDo))
  }



  function deleteToDo(id) {
    setToDos((prev) => prev.filter((prevToDo) => prevToDo.id != id))
  }



  function toggleToDo(id) {
    setToDos((prev) => prev.map((prevToDo) => (prevToDo.id === id) ? { ...prevToDo, completed: !prevToDo.completed } : prevToDo))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    console.log(todos)
    if (todos) {
      setToDos(todos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);



  return (
    <ToDoProvider value={{ todos, addToDo, updateToDo, deleteToDo, toggleToDo }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">



            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />

              </div>
            ))}




          </div>
        </div>
      </div>

    </ToDoProvider>
  )
}

export default App
