import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="index.html" className="nav__logo">CSSP</a>
        <nav className="nav container">
            <div className="nav__menu">
                <ul className="nav__list">
                    <li>
                      <a href="#home" className="nav__link">
                        <i className="fa-solid fa-house nav_icon"></i> Home
                      </a>
                    </li>

                    <li>
                      <a href="#portal" className="nav__link">
                        <i className="fa-solid fa-envelopes-bulk"></i> Portal
                      </a>
                    </li>

                    <li>
                      <a href="#tnr" className="nav__link">
                        <i className="fa-solid fa-ticket"></i> Tasks and Requests
                      </a>
                    </li>

                    <li>
                      <a href="#support" className="nav__link">
                        <i className="fa-solid fa-headset"></i> Support
                      </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header