import React from 'react'
import { Home } from './Home'
import { Detail } from './Detail'
import { Login } from './Login'
import { Booking } from './Booking'
import { Register } from './Register'
import { Rate } from './Rate'

import SpikeClassComponent  from './../spikes/SpikeClassComponent'
import { SpikeFunctionComponent } from './../spikes/SpikeFunctionComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

export const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/login" component={Login}/>
      <Route path="/booking/:id" component={Booking}/>
      <Route path="/register" component={Register}/>
      <Route path="/rate" component={Rate}/>
      <Route path="/class" component={SpikeClassComponent}/>
      <Route path="/function" component={SpikeFunctionComponent}/>

    </Switch>
  </Router>
)