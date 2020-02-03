import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Pages/Home";
import SignIn from "../components/Pages/SignIn";
import SignUp from "../components/Pages/SignUp";
import menu from "../globals/Menu";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useStore } from "react-hookstore";
import PageNotFound from "../components/Pages/PageNotFound";

export default function Routes() {
    const [ pages, setPages ] = useStore('pageStore'); // for the demo
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <PublicRoute path="/signin" exact component={SignIn} />
            <PublicRoute path="/signup" exact component={SignUp} />
            {menu.map((item) => (
                item.public ?
                <Route path={item.route} exact component={item.component} />
                :
                <PrivateRoute path={item.route} exact component={item.component} />
            ))}
            <Route component={PageNotFound} />
        </Switch>
    );
}
