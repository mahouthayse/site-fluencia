import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import {Link} from "react-router-dom";
import "./style.scss";






export default class LoginComponent extends Component{

    render(){

        return(
            <Grid container className="checkout-login-wrapper" xs={12} md={12}>

                <span className="login-title"> Login</span>

                <label htmlFor="checkoutMail" className="checkout-label">Email:</label>
                <input className="checkout-input" id="checkoutMail" type="email" placeholder="Inserir email" required/>


                <label htmlFor="checkoutPassword" className="checkout-label">Senha:</label>
                <input className="checkout-input" id="checkoutPassword" type="password" placeholder="******" required/>
                <Link to="/" className="login-link" >Esqueceu a senha?</Link>


                <Grid item className="login-row" xs={12} md={12}>
                <Link to="/" className="login-link-primary" >Voltar</Link>
                <Link to="/" className="login-link-secondary" >Fazer login</Link>
                </Grid>
            </Grid>
        );
    }
}