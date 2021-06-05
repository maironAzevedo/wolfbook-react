import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '../context/globalContext'

import Feed from '../pages/Feed/Feed'
import HomePage from '../pages/HomePage/HomePage'
import NotFound from '../pages/NotFound/NotFound'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated } = useContext(Context)

    if(isPrivate && !authenticated) {
        return <Redirect to='/login' />
    }
    
    return <Route {...rest}/>
}

function Routes() {
    return (
        <Router>
            <Switch>
                <CustomRoute exact path='/login' component={HomePage}/>
                <CustomRoute exact path='/register' component={RegisterPage} />
                <CustomRoute exact path='/404' component={NotFound} />
                <CustomRoute isPrivate exact path='/' component={Feed} />
                <CustomRoute path ='/'><Redirect to='/404'/></CustomRoute>
            </Switch>
        </Router>
    )
}

export default Routes