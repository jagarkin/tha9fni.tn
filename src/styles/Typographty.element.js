import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Section = styled.section`
  .lining {
    text-decoration: line-through;
    font-weight: 700;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
`

export const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

export const LogoLink = styled(NavLink)`
  font-weight: 900;
  font-size: 1.225rem;
  text-decoration: none;
  text-transform: uppercase;

  /* gradient */
  background: -webkit-linear-gradient(right, #ee0979 80%, #ff6a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
