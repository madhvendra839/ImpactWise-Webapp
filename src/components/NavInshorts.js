import React from 'react'
// import logo_inshorts from './../images/logo_inshorts.png'
import './NavInshorts.css'
import HamburgerDrawer from './HamburgerDrawer'
import logo from './../images/logo.png'

const NavInshorts = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'><HamburgerDrawer setCategory={setCategory} /></div>
      <img style={{cursor: 'pointer'}} src={logo} height='80%' alt='logo'></img>
    </div>
  )
}

export default NavInshorts
