/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect ,useRef} from 'react'
import './App.css'

function App() {


  const [length, setLength] = useState(8)
  const [number, isNumber] = useState(false)
  const [character, isCharacter] = useState(false)
  const [password, setPassword] = useState('')

// copy password
  const passwordRef = useRef(null)



  const passwordGenerator = useCallback(() => {
    let pass = ""
    let allchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number == true) {
      allchar += "1234567890";
    }

    if (character == true) {
      allchar += "`!@#$%^&*()_+=-[{]}|'/.,;:><";
    }
    console.log(allchar)
    console.log(Math.random())
    console.log(number)
    console.log(character)

    for (let i = 0; i < length; i++) {
      let index = Math.floor((Math.random() * allchar.length) + 1)
      pass += allchar.charAt(index)
    }
    setPassword(pass)



  }, [length, number, character])


  const copypassword = useCallback(()=>{

     
    window.navigator.clipboard.writeText(password) // to coppy the password
    passwordRef.current?.select() // to get the blue effect on the copied password

  },[password])
  useEffect(() => {   // running the password generator function from here

    passwordGenerator()
  }, [length, character, number,passwordGenerator])






  return (
    <>

      <h1 className='text-center text-5xl text-white'>Password generator</h1>
      <div>
        <div className='w-full     flex  justify-center'>

          <input className='w-[40%] m-20 h-10  outline-none  0 '
            type='text'
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button 
          onClick={copypassword}
          className='bg-red-400 m-20 w-[10%] rounded-full'>
            Copy
          </button>
        </div>

        <div className='  flex justify-center items-center bottom-12 '>
          <div className='  w-[80%] flex justify-center items-center gap-x-12' >
            <div className=' border-2 border-black w-[30%]'>
              <input

                type='range'
                min={8}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length : {length}</label>
            </div>
            <div className=' border-2 border-black w-[20%]'>
              <input
                className='outline-none'
                type='checkbox'
                defaultChecked={number}
                onChange={() => {
                  isNumber((isNum) => !(isNum))
                }}
              />
              <label >Number{number}</label>
            </div>
            <div className=' border-2 border-black w-[20%]'>
              <input
                className='outline-none '
                type='checkbox'
                defaultChecked={character}
                onChange={() => {
                  isCharacter((isChar) => !(isChar))
                }}
              />
              <label   >Character{character}</label>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
