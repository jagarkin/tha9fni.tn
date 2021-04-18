import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { useDarkMode } from './hooks/useDarkMode'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalTheming'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './views/Home'
import Contact from './views/Contact'
import Prodcast from './views/Prodcast'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  if (!componentMounted) {
    return <div />
  } else {
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Wrapper>
          <Router>
            <Main>
              <Header mode={theme} modeFunc={toggleTheme} />
              <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/prodcast' component={Prodcast} />
                <Route exact path='/' component={Home} />
              </Switch>
            </Main>
          </Router>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
