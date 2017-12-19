import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import DeFood from '@/views/DeFood'
import Fun from '@/views/Fun'
import NightLife from '@/views/NightLife'
import Cosmetology from '@/views/Cosmetology'

export default class RouterConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/defood' component={DeFood}></Route>
          <Route path='/fun' component={Fun}></Route>
          <Route path='/nightlife' component={NightLife}></Route>
          <Route path='/cosmetology' component={Cosmetology}></Route>
          <Redirect to="/defood"></Redirect>
        </Switch>
      </Router>
    )
  }
}