import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({component: Component}) => (
    <Route
        render = {props =>
            localStorage.getItem('isLoggedIn') ? (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />   
            ) : (
                <Component {...props} />
            )
        } 
        />
)