import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Pages/Home";
import React from "react";
import Curso from "./Pages/Curso";
import Checkout from "./Pages/Checkout";
import AtendimentoIndividual from "./Pages/AtendimentoIndividual";



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/curso" component={Curso} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/atendimento-individual" component={AtendimentoIndividual} />

        </Switch>
    </BrowserRouter>
);

export default Routes;