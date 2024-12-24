import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import logo_white from '../../assets/logo_white.png'
import dark_mode from '../../assets/dark_mode.png'
import light_mode from '../../assets/light_mode.png'
import { Link } from 'react-router-dom'

const navbar = ({theme, setTheme}) => {
    const toggle_mode = () => {
        theme == "light" ? setTheme ("dark") : setTheme("light");
    }

    const textColor = theme == "light" ? 'black' : 'white';

    return (
        <div className = "navbar">
            <img src = {theme == "light" ? logo : logo_white} alt = "" className = "logo"></img>
            <ul>
                <li><Link to='/' style = {{color: textColor, textDecoration: 'none'}}>Home</Link></li>
                <li><Link to='/learning' style = {{color: textColor, textDecoration: 'none'}}>Learning</Link></li>
                <li><Link to='/exercises' style = {{color: textColor, textDecoration: 'none'}}>Exercises</Link></li>
                <li><Link to='/contact' style = {{color: textColor, textDecoration: 'none'}}>Contact</Link></li>
            </ul>

            <img onClick = {()=>{toggle_mode()}} src = {theme == "light" ? dark_mode : light_mode} alt = "" className = "toggle-mode"></img>

        </div>
  )
}

export default navbar