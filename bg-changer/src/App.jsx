import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("bg-white")

  return (
    <>
      <div className={`w-full h-screen border-0 ${color}`}>
        <div className="fixed flex flex-wrap items-center inset-x-0 justify-center bottom-12">
          <div className="flex flex-wrap justify-center gap-3 bg-white pt-1.5 pb-1.5 pl-1 pr-1 rounded-2xl">
            <button className="bg-red-500 text-amber-50 font-bold rounded-xl w-20 h-8" onClick={()=>setColor("bg-red-500")}>Red</button>
            <button className="bg-black text-amber-50 font-bold rounded-xl w-20 h-8" onClick={()=>setColor("bg-black")}>Black</button>
            <button className="bg-yellow-300 text-amber-50 font-bold rounded-xl w-20 h-8" onClick={()=>setColor("bg-yellow-300")}>Yellow</button>
            <button className="bg-yellow-950 text-amber-50 font-bold rounded-xl w-20 h-8" onClick={()=>setColor("bg-yellow-950")}>Brown</button>
            <button className="bg-blue-500 text-amber-50 font-bold rounded-xl w-20 h-8" onClick={()=>setColor("bg-blue-500")}>Blue</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
