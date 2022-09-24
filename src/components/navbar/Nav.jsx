import React from 'react'

function Nav() {
  return (
    <nav>
        <a href="/" className='nav__brand'>IDAB</a>
        <ul className='nav__menu'>
            <li className='nav__item'><a href="/" className='nav__link'>Home</a></li>
            <li className='nav__item'><a href="/" className='nav__link'>About IDAB</a></li>
            <li className='nav__item'><a href="/" className='nav__link'>Members</a></li>
            <li className='nav__item'><a href="/" className='nav__link'>Constitution</a></li>
            <li className='nav__item'><a href="/" className='nav__link'>Events</a></li>
            <li className='nav__item'><a href="/" className='nav__link'>Notice</a></li>
            <li className='nav__item'><a href="/" className='nav__link'>Publication</a></li>
            <li className='nav__item'><a href="/" className='nav__link'>Contact</a></li>
        </ul>
        <div className='nav__toggler'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </nav>
  )
}

export default Nav
