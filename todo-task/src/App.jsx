import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/Theme.js'
import Header from './components/Header.jsx'
import Focus from './components/Focus.jsx'

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(()=>{
    const element = document.querySelector("html");
    element.classList.remove("light", "dark");
    element.classList.add(themeMode);
  }, [themeMode])
  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <Header />
        <Focus />
      </ThemeProvider>
    </>
  )
}

export default App
