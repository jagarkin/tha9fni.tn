import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './components/hooks/useGlobalStyle'
import Navbar from './components/navbar'
//views
import Home from './components/views/Home'
import About from './components/views/About'
import Prodcast from './components/views/Prodcast'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        {/* navbar */}
        <Navbar />

        {/* switch between pages */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/prodcast' component={Prodcast} />
          <Route path='/about' component={About} />
        </Switch>
        {/* */}
      </Router>
    </>
  )
}
export default App
