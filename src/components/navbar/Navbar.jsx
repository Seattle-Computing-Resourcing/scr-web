import React, { useState } from 'react'
import "./Navbar.css";
import logo from '../../assets/logo.png'
import logo_white from '../../assets/logo_white.png'
import dark_mode from '../../assets/dark_mode.png'
import light_mode from '../../assets/light_mode.png'
import close_menu_light from '../../assets/close_menu_light.png'
import close_menu from '../../assets/close_menu.png'
import menu_light from '../../assets/menu_light.png'
import menu from '../../assets/menu.png'
import logo_white_mobile from '../../assets/logo_white_mobile.png'
import logo_mobile from '../../assets/logo_mobile.png'

import { NavLink } from 'react-router-dom'

const navbar = ({theme, setTheme}) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        menuClicked ? setMenuClicked(false) :  setMenuClicked(true);
    }

    const toggle_mode = () => {
        theme == "light" ? setTheme ("dark") : setTheme("light");
    }

    var textColor = theme == "light" ? 'black' : 'white';

    return (
        <div>
            <div className = "navbar">
                <input type="checkbox" id="sidebar-active" checked = {menuClicked}></input>
                <label onClick={()=>handleClick()} id="overlay" for="sidebar-active"></label>

                <NavLink to='/'><img src = {theme == "light" ? logo_mobile : logo_white_mobile} alt = "" className = "logo_mobile"></img></NavLink>
                {/* <NavLink to='/'><img src = {theme == "light" ? logo : logo_white} alt = "" className = "logo"></img></NavLink> */}

                <ul>
                    <li><NavLink to='/' style = {{color: textColor, textDecoration: 'none'}}>Home</NavLink></li>
                    <li><NavLink to='/learning' style = {{color: textColor, textDecoration: 'none'}}>Learning</NavLink></li>
                    <li><NavLink to='/exercises' style = {{color: textColor, textDecoration: 'none'}}>Exercises</NavLink></li>
                    <li><NavLink to='/contests' style = {{color: textColor, textDecoration: 'none'}}>Contests</NavLink></li>
                    <li><NavLink to='/contact' style = {{color: textColor, textDecoration: 'none'}}>Contact</NavLink></li>
                </ul>

                <img onClick = {()=>{toggle_mode()}} src = {theme == "light" ? dark_mode : light_mode} alt = "" className = "toggle-mode"></img>

                <img onClick = {()=>{handleClick()}} src={theme == "light" ? (menuClicked ? close_menu : menu) : (menuClicked ? close_menu_light : menu_light)} alt = "" className = "menu"></img> 
            </div>
        </div>
  )
}

export default navbar