import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../home'
import GlobalStyles from '../GlobalStyles'

const App = (): ReactElement => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  </>
)

export default App
