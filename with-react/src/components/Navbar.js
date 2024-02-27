import React from 'react'
import Footer from './Footer'

const Navbar = ({logoText}) => {
  return (
    <div>
        <div class="logo">{logoText}</div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Navbar
