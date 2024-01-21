/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { useToDo } from '../contexts' 

function TodoForm() {

    const [todo, setTodo] = useState("")

    const { addToDo } = useToDo()
 
    
    
    const add = (e) => {
        e.preventDefault();
        if (!todo && todo.length <= 0) return
        // addToDo({ id: Date.now(), todo: todo, completed: false })
        // a kind of a same thing we are doing below
        addToDo({ todo, completed: false })
        setTodo("")
    }
     


    return (
        <form className="flex"
            onSubmit={add}
        >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

