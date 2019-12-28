import React from 'react'
import Admin from './pages/Admin'
import Login from './pages/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/" component={Admin}/>
            </Switch>
        </Router>
    )
}

