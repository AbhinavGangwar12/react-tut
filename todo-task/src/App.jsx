import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/Theme.js";
import { TimeProvider } from "./contexts/Time.jsx";
import Header from "./components/Header.jsx";
import Focus from "./components/Focus.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [time, setTime] = useState(0); // time in seconds
  const [tasks, setTasks] = useState([]); // array of tasks

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  useEffect(() => {
    const element = document.querySelector("html");
    element.classList.remove("light", "dark");
    element.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Header />
      <TimeProvider value={{ time, setTime, tasks, setTasks }}>
        <Focus />
      </TimeProvider>
    </ThemeProvider>
  );
}

export default App;
