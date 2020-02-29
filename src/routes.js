import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Pages/Home";
import React from "react";
import Curso from "./Pages/Curso";
import Checkout from "./Pages/Checkout";



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/curso" component={Curso} />
            <Route path="/checkout" component={Checkout} />

        </Switch>
    </BrowserRouter>
);

export default Routes;