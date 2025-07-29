import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__brand">Kulitku</Link>
      </div>

      <div className="navbar__center">
        <Link to="/#home" className="navbar__link">Home</Link>
        <Link to="/#about" className="navbar__link">About</Link>
      </div>

      <div className="navbar__right">
        <Link to="/input">
          <button className="navbar__button">Get Matched Now</button>
        </Link>
      </div>
    </nav>
  )
}