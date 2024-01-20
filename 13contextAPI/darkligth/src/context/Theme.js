/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */




// use this file structure 

import { createContext, useContext } from "react";




export const ThemeContext = createContext({
    themeMode: "light",
    DarkTheme: () => { },
    LightTheme: () => { },
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){ // customHook 
    return useContext(ThemeContext)
}