import { BrowserRouter, Switch, Route, PrivateRoute } from 'react-router-dom';
import Home from "./Pages/Home";
import React from "react";
import Curso from "./Pages/Curso";
import Checkout from "./Pages/Checkout";
import AtendimentoIndividual from "./Pages/AtendimentoIndividual";
import AtendimentoEmGrupo from "./Pages/AtendimentoEmGrupo";
import {Provider} from "react-redux";
import store from "./store";


const Routes = () => (
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/curso" component={Curso} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/atendimento-individual" component={AtendimentoIndividual} />
            <Route path="/atendimento-em-grupo" component={AtendimentoEmGrupo} />

        </Switch>
    </BrowserRouter>
    </Provider>
);

export default Routes;