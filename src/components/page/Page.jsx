import React, { useEffect, useState } from 'react'
import { MDXProvider } from "@mdx-js/react"
import Navbar from '../navbar/Navbar'
import './Page.css'

export default function Page({children, meta}) {
    const currentTheme = localStorage.getItem("currentTheme");
    
    const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

    useEffect(() => {
        localStorage.setItem("currentTheme", theme);
    }, [theme])

  return (
    <div>
        <Navbar theme={theme} setTheme={setTheme}/>
        <div>{meta.author} <br></br> {meta.title} <br></br> {meta.date}</div>
        <MDXProvider>{children}</MDXProvider>
    </div>
  )
}