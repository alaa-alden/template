import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import {
  Home,
  About,
  Connect,
  Game

} from '../../container'

class Router extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/about" component={About} />
          <Route exact path="/connect" component={Connect} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(Router)
