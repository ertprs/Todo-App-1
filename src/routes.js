import React from 'react'
import { Route, HashRouter, Switch, Redirect, Router } from 'react-router-dom'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

export default (props) => (
    <HashRouter>
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/sobre">
                <About />
            </Route>
            <Redirect from="*" to="/home" />
        </Switch>
    </HashRouter>
)