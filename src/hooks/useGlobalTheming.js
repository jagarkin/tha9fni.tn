import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    direction:rtl;
    box-sizing: border-box;
    font-family: 'Tajawal', sans-serif;
  }

  html,
  body {  
    display:flex;
    max-width: 100%;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    font-family: proxima-nova, sans-serif;
  }

  ::selection {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text}
  }

`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: none;
`

export const Main = styled.main`
  width: 1304px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 96px 16px;
  background-color: none;

  @media (max-width: 1304px) {
    width: 100%;
    padding: 32px 16px;
  }
`
