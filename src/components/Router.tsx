import React, {ReactElement} from 'react'
import { Route, Switch } from 'react-router-dom'
// pages
import Home from './home'
import GameDetail from './GameDetail'

function Router ():ReactElement {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game/:id" component={GameDetail} />
      </Switch>
    </>
  )
}

export default Router