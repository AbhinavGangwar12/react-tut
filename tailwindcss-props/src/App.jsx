import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/comp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="HolaChamp" height='188cm'/>
    </>
  )
}

export default App
