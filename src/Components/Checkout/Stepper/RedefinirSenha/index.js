import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import {Link} from "react-router-dom";






export default class RedefinirSenha extends Component{

    render(){

        return(
            <Grid container className="redefinir-senha-wrapper" xs={12} md={12}>

                <span className="pass-title"> Redefinir Senha</span>

                <span className="pass-text">Esqueceu sua senha? Digite seu email abaixo e nós te enviaremos instruções
                    para redefiní-la.</span>

                <label htmlFor="checkoutMail" className="checkout-label">Email:</label>
                <input className="checkout-input" id="checkoutMail" type="email" placeholder="Inserir email" required/>

                <Grid item className="pass-row" xs={12} md={12}>
                    <Link to="/" className="pass-link-primary" >Voltar</Link>
                    <Link to="/" className="pass-link-secondary" >Enviar</Link>
                </Grid>

            </Grid>
        );
    }
}