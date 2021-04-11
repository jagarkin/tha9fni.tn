import React from 'react'
import { Linker } from '../styles/NavBar.element'

const Logo = () => {
  return (
    <>
      <Linker
        style={{
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
        to='/'>
        tha9afni
      </Linker>
    </>
  )
}

export default Logo
