/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit"


import todoReducer from "../features/todoSlice"



export const store = configureStore({
    reducer: todoReducer
})
 

 