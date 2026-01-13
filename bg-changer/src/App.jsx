import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className="w-screen h-full" script={{backgroundColor : color}}></div>
    </>
  )
}

export default App
