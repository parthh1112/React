import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setcount] = useState(0);
  const addValue = () => {
    count++
    if (count == 11) count = 0
    setcount(count)
    console.log('plus')
  }
  const minusValue = () => {
    count--
    if (count == -1) count = 10
    setcount(count)
    console.log('minus')
  }
  return (
    <>
      <h1>I am learning ReactJS</h1>
      <h2>count value is : {count} </h2>
      <button onClick={addValue}>Plus  {count}</button>
      <br />
      <button onClick={minusValue}>Minus  {count}</button>
    </>
  )
}

export default App
