/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react"
import { ThemeProvider } from "./context/Theme"
import ThemeBtn from "./components/ThemeButton"
import Card from "./components/Card"

function App() {

  const [themeMode, setThemeMode] = useState('light')
  const DarkTheme = () => {
    setThemeMode('dark')
  }

  const LightTheme = () => {
    setThemeMode('light')
  }

  // theme change code 
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (

    <ThemeProvider value={{ DarkTheme, LightTheme, themeMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn /> 
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
