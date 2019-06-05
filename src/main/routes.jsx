import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'
import Header from '../common/template/header';
import Dashboard from '../dashboard/dashboard';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={Dashboard}/>
        </Route>
    </Router>
)