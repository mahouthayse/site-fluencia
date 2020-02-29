import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";


export default class CadastroComponent extends Component{

    render(){

        return(
            <Grid container className="checkout-cadastro-wrapper" xs={12} md={12}>

                <label htmlFor="checkoutNome" className="checkout-label" >Nome completo:</label>
                <input className="checkout-input" id="checkoutNome" type="text" placeholder="Inserir nome e sobrenome" required/>

                <label htmlFor="checkoutMail" className="checkout-label">Email:</label>
                <input className="checkout-input" id="checkoutMail" type="email" placeholder="Inserir email" required/>

                <label htmlFor="checkoutTel" className="checkout-label">Telefone:</label>
                <input className="checkout-input" id="checkoutTel" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(XX) XXXX-XXXX" required/>

                <Grid item className="checkout-row" xs={12} md={12}>

                    <Grid item className="checkout-label-column" xs={12} md={6}>

                    <label htmlFor="checkoutPassword" className="checkout-label">Senha:</label>
                    <input className="checkout-input" id="checkoutPassword" type="password" placeholder="******" required/>

                    </Grid>

                    <Grid item className="checkout-label-column" xs={12} md={6}>

                    <label htmlFor="checkoutConfirmPassword" className="checkout-label">Confirmar senha:</label>
                    <input className="checkout-input" id="checkoutConfirmPassword" type="password" placeholder="******" required/>

                    </Grid>

                </Grid>

            </Grid>
        );
    }
}