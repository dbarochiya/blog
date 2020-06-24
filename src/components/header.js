
import React from "react"
import "./header.css"

const Header = () => {
  return (
    <div>
      <header className="header">
      <div> <a className="header-text-big" href="/"> Dhruv Barochiya </a> </div>
      <div className="header-nav">
        <a className="header-text" href="/about">About</a> •
        <a className="header-text" href="/blog"> Blog</a> •
        <a className="header-text" href="/"> Home</a>
      </div> 
      </header>
      {/* <background>
      <div className="parallax">
        <div id="stars1" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      </background> */}
    </div>
  )
}

export default Header




