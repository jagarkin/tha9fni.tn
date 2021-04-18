import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 0rem 1rem;
  flex-direction: row;
  align-items: center;
`

export const MenuLink = styled(NavLink)`
  font-size: 1rem;
  margin: 0px 5px;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
`
