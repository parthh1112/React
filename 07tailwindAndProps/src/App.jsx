import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username: "parth",
    age: 21
  }
  let arr = [1, 1, 2, 2, 3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-full'>Tailwind test</h1>


      {/* <Card username="parth" newobj={obj} newarr={arr} /> */}
      <Card username="parth" btnText="click me up" />
      <Card username="chintu" btnText="clike me down" />
      <Card username="mm" />

    </>
  )
}

export default App
