import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Select from 'react-select'
import {Link} from "react-router-dom";



const options = [
    { value: '1x', label: '1 parcela de' },
    { value: '2x', label: '2 parcelas de' },
    { value: '3x', label: '3 parcelas de' },
    { value: '4x', label: '4 parcelas de' },
    { value: '5x', label: '5 parcelas de' },
    { value: '6x', label: '6 parcelas de' }
]


export default class PagamentoCartao extends Component{

    render(){

        return(
            <Grid container className="redefinir-senha-wrapper" xs={12} md={12}>

                <label htmlFor="selectParcelas" className="checkout-label" >Parcelas</label>

                <select className="checkout-input" id="selectParcelas">
                    <option value="">Selecione a quantidade de parcelas</option>
                    <option value="1x">1 parcela</option>
                    <option value="2x">2 parcelas</option>
                    <option value="3x">3 parcelas</option>
                    <option value="4x">4 parcelas</option>
                    <option value="5x">5 parcelas</option>
                    <option value="6x">6 parcelas</option>
                </select>

                <label htmlFor="checkoutCardName" className="checkout-label">Nome impresso no cartão</label>
                <input className="checkout-input" id="checkoutCardName" type="text" placeholder="Inserir nome" required/>

                <label htmlFor="checkoutCardNumber" className="checkout-label">Número do cartão</label>
                <input className="checkout-input" id="checkoutCardNumber" type="text" placeholder="XXXX XXXX XXXX XXXX" required/>

                <Grid item className="checkout-row" xs={12} md={12}>

                    <Grid item className="checkout-label-column" xs={12} md={6}>

                        <label htmlFor="checkoutDate" className="checkout-label">Validade</label>
                        <input className="checkout-input" id="checkoutDate" type="month" min="2020-04" value="2020-04" required/>

                    </Grid>

                    <Grid item className="checkout-label-column" xs={12} md={6}>

                        <label htmlFor="checkoutCode" className="checkout-label">Código de segurança</label>
                        <input className="checkout-input" id="checkoutCode" type="text" placeholder="CVV" required/>

                    </Grid>

                </Grid>

                <Grid item className="login-row" xs={12} md={12}>
                    <Link to="/" className="login-link-primary" >Voltar</Link>
                    <Link to="/" className="login-link-secondary" >Comprar</Link>
                </Grid>

            </Grid>
        );
    }
}