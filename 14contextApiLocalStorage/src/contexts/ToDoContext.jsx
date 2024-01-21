/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false

        }
    ],
    addToDo: (todo) => { },
    updateToDo: (todo, id) => { },
    deleteToDo: (id) => { },
    toggleToDo: (id) => { }
});
export const useToDo = () => {
    return useContext(ToDoContext)
}


export const ToDoProvider = ToDoContext.Provider

