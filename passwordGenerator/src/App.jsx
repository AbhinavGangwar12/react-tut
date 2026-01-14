import { useState, useCallback, useEffect } from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(9);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [copy, setCopy] = useState(false);
  const [copyColor, setCopyColor] = useState("bg-amber-300");

  const generator = useCallback(() => {
    let pass = ""
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numbers) chars += "0123456789";
    if(symbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * chars.length + 1)
      pass += chars.charAt(randomIndex)
    }
    setPassword(pass)
    setCopy(false)
    setCopyColor("bg-amber-100")
  }, [length, numbers, symbols, setPassword, setCopy, setCopyColor]);

  useEffect(()=>{
    generator()
  },[generator])

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password)
    setCopy(true)
    setCopyColor("bg-amber-300")
  }

  return (
    <>
      <div className=" bg-gray-700/60 w-fit mx-auto px-10 pb-10 rounded-3xl mt-3">
        <h1 className='text-center text-2xl text-amber-700 font-bold py-2'>Password Generator</h1>
        <div className="flex items-center bg-amber-500 my-2 w-xl rounded-2xl mx-auto ">
          <input type="text" 
            value={password}
            className={`flex-1 outline-none rounded-l-2xl px-3 py-2 ${copyColor} font-mono font-semibold mx-auto`}
            placeholder="Password"
            readOnly
          />
          <button 
          className="bg-blue-600 rounded-r-2xl font-mono font-bold text-white px-4 py-2"
          onClick={copyToClipboard}
          >{copy ? "Copied!" : "Copy"}</button>
        </div>
        <div className="flex justify-center content-center gap-3">
          <input type="range"
            min={5}
            max={100}
            value={length}
            onChange= {(e)=> setLength(e.target.value)}
          />
          <label htmlFor="length" className='text-blue-100 font-bold'>Length : {length}</label>
          <input type="checkbox" name="numbers" id="nums"
            checked={numbers} 
            onChange={() => setNumbers((prev) => !prev)}
          />
          <label htmlFor="numbers" className='text-blue-100 font-bold'>Include Numbers</label>
          <input type="checkbox" name="symbols" id="syms"
            checked={symbols} 
            onChange={() => setSymbols((prev) => !prev)}
          />
          <label htmlFor="syms" className='text-blue-100 font-bold'>Include Symbols</label>
        </div>
      </div>
    </>
  )
}

export default App
