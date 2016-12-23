/**
 * Created by liujia on 2016/7/8.
 */
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Login from './pages/login'
import Home from './pages/home'
import App from './pages/app'

let routerBefore=(nextState, replace)=>{

}

render((
    <Router history={browserHistory} >
        <Route path="/" component={App} onEnter={routerBefore}>
            <Route path="/login" component={Login}>

            </Route>
            <Route path="/home" component={Home}>

            </Route>
        </Route>
    </Router>
), document.getElementById('root'))