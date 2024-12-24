import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Favicon from 'react-favicon';

const App = () => {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme])

  const faviconUrl = theme == "light" ? "%PUBLIC_URL%/favicon.ico" : "%PUBLIC_URL%/favicon_light.ico";

  return (
    <div className = {`container ${theme}`}>
      <Favicon url={faviconUrl} />
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App