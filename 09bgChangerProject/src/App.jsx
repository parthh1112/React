/* eslint-disable no-unused-vars */
import { useState } from "react"
function App() {
  const [color, setColor] = useState("#000") // 
  return (
    <>
      <div className="w-screen h-screen duration-100 flex justify-center" style={{ backgroundColor: color }} >
        <div className="w-4/5   fixed flex flex-wrap justify-center bottom-12 px-2   ">
          <div className="text-black bg-white ">Chose the below color for the background</div>
          <div className="w-4/5  border-2 border-white  flex  flex-wrap rounded-xl  justify-between  mx-8 p-4 " >
            <button className="bg-red-500 focus:outline-none outline-none   " onClick={() => setColor('#ef4444')}>RED</button>
            <button className="bg-green-500 focus:outline-none outline-none    " onClick={() => setColor('#22c55e')  }>GREEN</button>
            <button className="bg-blue-500 focus:outline-none outline-none  " onClick={() => setColor('#3b82f6')}>BLUE</button>
            <button className="bg-yellow-500 focus:outline-none outline-none  " onClick={() => setColor('#eab308')}>YELLOW</button>
            <button className="bg-pink-500 focus:outline-none outline-none  " onClick={() => setColor('#ec4899')}>PINK</button>
            <button className="bg-orange-500 focus:outline-none outline-none  " onClick={() => setColor('#f97316 ')}>ORANGE</button>
            <button className="bg-indigo-500 focus:outline-none outline-none  " onClick={() => setColor('#6366f1 ')}>INDIGO</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App