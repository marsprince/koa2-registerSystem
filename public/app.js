/**
 * Created by liujia on 2016/7/8.
 */
import React from 'react';
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect} from "react-router";
import Login from './login'

const routes = (
    <Route>
        <Route name="home" path="/" component={Login}>

        </Route>
    </Route>
);

Router.run(routes, Router.HashLocation, (Handler) => {
    React.render(<Handler/>, container);
});