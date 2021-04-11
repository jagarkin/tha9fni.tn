import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: (0px 5px 5px 00px #1e1e1e);
`

export const List = styled.ul`
  margin: 0px;

  display: flex;
  list-style: none;
  flex-direction: row;
`

export const Item = styled.li`
  letter-spacing: 1px;
  text-transform: capitalize;
`

export const Linker = styled(NavLink)`
  padding: 1rem;
  color: #232323;
  text-decoration: none;
  transition: 0.3s ease-in-out;
`
