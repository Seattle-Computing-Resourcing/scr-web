import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import './Contests.css'

const Contests = () => {
    const currentTheme = localStorage.getItem("currentTheme");

    const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

    useEffect(() => {
      document.title = "SCR | Contests";
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

export default Contests;