import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'

const App = () => {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    document.title = "SCR | Home";
  }, [])

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme])

  return (
    <div className = {`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App