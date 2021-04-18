import React from 'react'
import styled from 'styled-components'

import Logo from './Header/Logo'
import Toggle from './Header/Toggle'
import ListMenu from './Menu/ListMenu'

const Header = ({ mode, modeFunc }) => {
  return (
    <>
      <Container>
        <span className='header'>
          <Logo />
          <ListMenu />
        </span>
        <Toggle theme={mode} toggleTheme={modeFunc} />
      </Container>
    </>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  margin-bottom: 64px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  .header {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`

// const Link = styled(NavLink)`
//   padding: 10px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   border-radius: 12px;
//   justify-content: center;
//   color: ${({ theme }) => theme.text};

//   &:hover,
//   &:focus {
//     background-color: ${({ theme }) => theme.hover};
//   }
// `
