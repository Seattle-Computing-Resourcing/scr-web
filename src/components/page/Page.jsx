import React, { useEffect, useState } from 'react'
import { MDXProvider } from "@mdx-js/react"
import Navbar from '../navbar/Navbar'
import './Page.css'
import close_sidebar from '../../assets/arrow_close_menu.png'
import close_sidebar_light from '../../assets/arrow_close_menu_light.png'
import sidebar from '../../assets/arrow_open_menu.png'
import sidebar_light from '../../assets/arrow_open_menu_light.png'
import { NavLink } from 'react-router-dom';
import { CodeBlock } from 'react-code-block';

function MyCodeBlock({ children, className }) {
  return (
    <CodeBlock code={children} language="js">
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <CodeBlock.LineContent>
          <CodeBlock.Token />
        </CodeBlock.LineContent>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

export default function Page({children, meta}) {
  const [sidebarClicked, setSidebarClicked] = useState(false); 
  const handleClick = () => {
    sidebarClicked ? setSidebarClicked(false) :  setSidebarClicked(true);
  }

  const currentTheme = localStorage.getItem("currentTheme");

  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    document.title = "SCR | Learning";
  }, [])

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  var textColor = theme == "light" ? 'black' : 'white';

  //had issues with global states for dark/light mode so I'll put sidebar into here
  return (
    <div>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        
        <div className="content-container">
          <div className="sidebar">
            <input type="checkbox" id="sidebar-active" checked = {sidebarClicked}></input>
           
            <ul class="side-ul">
              <li><NavLink to='/learning/test' style = {{color: textColor, textDecoration: 'none'}}>Test</NavLink></li>
              <li><NavLink to='/learning/test2' style = {{color: textColor, textDecoration: 'none'}}>Test2</NavLink></li>
            </ul>
          </div>

          <div className="markdown-content">        
            <div className="metadata">
              <div className="metatitle">{meta.title}</div>
              <div className="metadesc">{meta.description}</div>
            </div>

            <div className="pagecontent"><MDXProvider components={{pre: MyCodeBlock, }}>{children}</MDXProvider></div>
          </div>
        </div>
      </div>
    </div>
  );
}