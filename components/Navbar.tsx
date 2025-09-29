"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-text">Abhinav Properties</span>
          </Link>

          <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
            <Link to="/" className={`navbar-link ${isActive("/") ? "active" : ""}`} onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className={`navbar-link ${isActive("/about") ? "active" : ""}`} onClick={closeMenu}>
              About Us
            </Link>
            <Link
              to="/properties"
              className={`navbar-link ${isActive("/properties") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Properties
            </Link>
            <Link to="/contact" className={`navbar-link ${isActive("/contact") ? "active" : ""}`} onClick={closeMenu}>
              Contact
            </Link>
          </div>

          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            <span className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
