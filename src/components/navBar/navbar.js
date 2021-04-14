import React from 'react'

import Logo from './Logo'
import Menu from './Menu'
import { Wrapper } from '../styles/NavBar.element'

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <Menu />
      </Wrapper>
    </>
  )
}

export default Navbar
