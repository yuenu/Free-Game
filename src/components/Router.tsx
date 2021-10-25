import React, {ReactElement} from 'react'
import { Route, Switch } from 'react-router-dom'
// pages
import Home from './home'
import GameDetail from './GameDetail'

function Router ():ReactElement {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/game" component={GameDetail}>
        </Route>
      </Switch>
    </>
  )
}

export default Router