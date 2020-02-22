import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Pages/Home";
import React from "react";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />

        </Switch>
    </BrowserRouter>
);

export default Routes;