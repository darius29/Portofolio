import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Darius-Gabriel Urechiatu</h1>
        <h5 className="text-light">Junior Developer</h5>
      <CTA />

      <div className="me">
        <img src={ME} alt="me"/>
      </div>

      <a href="#contanct" className='scroll__down'>Scroll Down </a>

      </div>
    </header>
  )
}

export default Header