import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/navbar'
import Favicon from 'react-favicon';

const App = () => {
  const faviconUrl = theme == "light" ? "%PUBLIC_URL%/favicon.ico" : "%PUBLIC_URL%/favicon_light.ico";

  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme])

  return (
    <div className = {`container ${theme}`}>
      <Favicon url={faviconUrl} />
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App