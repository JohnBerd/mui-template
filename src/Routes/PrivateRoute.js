import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({component: Component}) => (
    <Route
        render = {props =>
            localStorage.getItem('isLoggedIn') ? (
                    <Component {...props} />
            ) : (
                <Redirect 
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        } 
        />
)