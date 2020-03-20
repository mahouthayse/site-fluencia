import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";

// Pages do Site
import Home from "./Pages/Home";
import React from "react";
import Curso from "./Pages/Curso";
import Checkout from "./Pages/Checkout";
import AtendimentoIndividual from "./Pages/AtendimentoIndividual";
import AtendimentoEmGrupo from "./Pages/AtendimentoEmGrupo";

// Pages área da aluna
import baseDashboard from "./Pages/Aluna/HOC/baseDashboard";
import PaginaInicial from "./Pages/Aluna/PaginaInicial";
import MaterialApoio from "./Pages/Aluna/MaterialApoio";
import Videoaulas from "./Pages/Aluna/Videoaulas";
import MinhaConta from "./Pages/Aluna/MinhaConta";
import Login from "./Pages/Aluna/Login";
import ResetarSenha from "./Pages/Aluna/ResetarSenha";

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => isAuthenticated() ? ( <Component {...props} />) : ( <Redirect to={{ pathname: "/", state: {from: props.location}}}/>)} />
);


const Routes = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/curso" component={Curso} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/atendimento-individual" component={AtendimentoIndividual} />
                <Route path="/atendimento-em-grupo" component={AtendimentoEmGrupo} />
                <Route path="/entrar" exact component={Login}/>
                <Route path="/resetar-senha" exact component={PaginaInicial}/>
                <PrivateRoute path="/home" exact component={baseDashboard(PaginaInicial)}/>
                <PrivateRoute path="/materiais-de-apoio" component={baseDashboard(PaginaInicial)}/>
                <PrivateRoute path="/videoaulas" component={baseDashboard(Videoaulas)}/>
                <PrivateRoute path="/minha-conta" component={baseDashboard(PaginaInicial)}/>

            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Routes;