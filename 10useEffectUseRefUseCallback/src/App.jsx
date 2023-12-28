/* eslint-disable no-unused-vars */

import { useState, useCallback, useEffect, useRef } from "react"
function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charatersAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // using useRef hook

  const passref = useRef(null)


  const passwordGenerator = useCallback(
    () => {
      let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if (numberAllowed) str += '0123456789'
      if (charatersAllowed) str += `!@#$%^&*()_-+={}[]|:;<>,.?/~"'`

      let passFinal = ''
      for (let i = 0; i < length; i++) {
        let num = Math.floor(Math.random() * str.length + 1)
        passFinal += str.charAt(num)
      }
      setPassword(passFinal)

    }, [length, numberAllowed, charatersAllowed, setPassword]
  )
  useEffect(() => {  //  when our page load hota hai to 1st time pe call hota he and if dependenci array me change hota he to bhi rerun hoga ye
    passwordGenerator()
  }, [length, numberAllowed, charatersAllowed, passwordGenerator])


  const copypass = useCallback(()=>{ // copy password 
    passref.current?.select()
    passref.current?.setSelectionRange(0,41)
    window.navigator.clipboard.writeText(password)
  },[password])



  return (
    <>
      <div className='bg-gray-800    w-screen h-screen'>
        <h1 className='text-4xl  text-center text-white '>Password Generator</h1>
        <div className="container">
          <div className="flex justify-center ">{/* input box */}
            <input className="w-7/12     focus:outline-none m-5 p-5 rounded-xl font-medium text-xl	" readOnly type="text" placeholder="your password will be ready in a sec!!!!! " value={password}
            
              ref={passref}
              ></input>
            <button onClick={copypass} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
          </div>
          <div className="flex    justify-center text-sm gap-x-2" >{/* input instructions */}
            <div className="flex  justify-center gap-x-1">
              <input
                type="range"
                min={10}
                max={40}
                value={length}
                className='cursor-pointer overflow-auto '
                // onChange={(e) => { setLength(e.target.value) }} 
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label className="text-white">Length: {length}</label>
            </div>
            <div className="flex  justify-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput" className="text-white">Number</label>
            </div>
            <div className="flex  justify-center gap-x-1">
              <input
                type="checkbox"
                id="charInput"
                defaultChecked={charatersAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="charInput" className="text-white">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App 