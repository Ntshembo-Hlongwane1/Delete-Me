import React from 'react'
import '../../Stylesheet/NavigationBar.css'

export const NavigationBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-link nav-link-home">Home</li>
        <li className="nav-link nav-link-ads">What I've done</li>
        <li className="nav-link nav-link-about">About</li>
        <li className="nav-link nav-link-about">Contact</li>
      </ul>
    </nav>
  )
}
