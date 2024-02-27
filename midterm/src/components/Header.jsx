import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo"></a>
            <div className="nav_menu">
                <ul className="nav_list">
                    <li><i className="fa-solid fa-house nav_icon">Home</i></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header