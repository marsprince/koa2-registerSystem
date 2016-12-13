/**
 * Created by liujia on 2016/7/8.
 */
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Login from './pages/login'

render((
    <Router history={browserHistory}>
        <Route path="/" component={Login}>

        </Route>
    </Router>
), document.getElementById('root'))