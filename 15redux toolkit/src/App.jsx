/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {

  return (
    <>
      <div className="w-screen h-screen bg-gray-700">
        <h1>Learing about redux-tool-kit</h1>
        <div className=" flex justify-center items-center">
        <AddTodo />
        </div>
        <div >
        <Todos />
        </div>
      </div>
    </>
  )
}

export default App
