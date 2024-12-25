import React, { useEffect, useState } from 'react'
import Navbar from '.././components/navbar/Navbar.jsx'
import './Learning.css'
import Button from '../components/button/Button.jsx';

const Learning = () => {
    const currentTheme = localStorage.getItem("currentTheme");

    const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

    useEffect(() => {
        document.title = "SCR | Learning";
    }, [])

    useEffect(() => {
      localStorage.setItem("currentTheme", theme);
    }, [theme])
  
    return (
      <div className = {`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>

        <div className='learning-hero'>
          <h1>Seattle Computing Resourcing</h1>
          <Button buttonStyle='btn--outline' buttonSize='btn--large'>Start Learning</Button>
        </div>
      </div>
    )
}

export default Learning