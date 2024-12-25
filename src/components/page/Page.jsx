import React, { useEffect, useState } from 'react'
import { MDXProvider } from "@mdx-js/react"
import Navbar from '../navbar/Navbar'
import './Page.css'

export default function Page({children, meta}) {
  const currentTheme = localStorage.getItem("currentTheme");

  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    document.title = "SCR | Learning";
  }, [])

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <div classname="metadata">
          <div className="metatitle">{meta.title}</div>
          <div className="metaauthor">Authors: {meta.author}</div>
          <div className="metadata">Last updated: {meta.date}</div>
        </div>
        <MDXProvider>{children}</MDXProvider>
      </div>
    </div>
  );
}