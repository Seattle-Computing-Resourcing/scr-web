import React, { useEffect, useState } from 'react'
import Navbar from '.././components/navbar/Navbar.jsx'
import './Exercises.css'
import Button from '../components/button/Button.jsx';

const Exercises = () => {
    const currentTheme = localStorage.getItem("currentTheme");

    const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

    useEffect(() => {
      document.title = "SCR | Exercises";
    }, [])

    useEffect(() => {
      localStorage.setItem("currentTheme", theme);
    }, [theme])
  
    return (
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />

        <div className="learning-hero">
          <h1>Exercises for <span class="learn-blue">C++, Python, and Java</span></h1>
          <div className="learning-btn">
            <Button buttonStyle="btn--outline" buttonSize="btn--large" linkTo='https://learningseattlecr.vercel.app/'>
              Solve Exercises
            </Button>
          </div>
        </div>
      </div>
    );
}

export default Exercises