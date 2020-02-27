import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Pages/Home";
import React from "react";
import Curso from "./Pages/Curso";
import Cadastro from "./Pages/Cadastro";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/curso" component={Curso} />
            <Route path="/cadastro" component={Cadastro} />

        </Switch>
    </BrowserRouter>
);

export default Routes;