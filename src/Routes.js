import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import menu from "./globals/Menu"

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            {menu.map((item) => (
                <Route path={item.route} exact component={item.component} />
            ))}
        </Switch>
    );
}