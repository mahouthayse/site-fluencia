import React, {Component} from "react";

import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    MenuItem,
    Radio,
    RadioGroup,
    Select
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import "./style.scss";


const dados = {
    title: "Atendimento individual",
    price: 1499
}

export default function PagamentoResumo(nextStep){
    const { checkout } = useSelector( state => (state.checkout));
    const {paymentMethod, coupon} = checkout;
    const dispatch = useDispatch();

    async function next(event){
        event.preventDefault();
        nextStep.nextStep();
    }
    async function back(event){
        event.preventDefault();
        nextStep.previousStep();
    }

    return(
        <Grid container className="pagamento-wrapper"  lg={12} spacing={1}>

            <span className="checkout-title"> Resumo da compra</span>

            <Grid item className="form-resumo" xs={12} lg={12}>
                <span className="resumo-text"><b>{dados.title} </b></span>
            <span className="resumo-text"> R${dados.price}</span>
            </Grid>


            <FormControl component="fieldset">
                <RadioGroup column value={paymentMethod} onChange={e => dispatch({ type: 'setPaymentMethod', paymentMethod: e.target.value})}>
                    <FormControlLabel value={"cartao"} control={<Radio />} label="Cartão de crédito" />
                    <FormControlLabel value={"boleto"} control={<Radio />} label="Boleto Bancário" />
                </RadioGroup>
            </FormControl>

            <Grid container item className="checkout-label-column" xs={12} lg={12}>
                <label htmlFor="checkoutCupom" className="checkout-label" >Cupom de desconto:</label>
                <input className="checkout-input-row" id="checkoutCEP" type="text" placeholder="Inserir cupom" value={coupon} onChange={e => dispatch({ type: 'setZipcode', zipcode: e.target.value})}/>
            </Grid>

            <Grid item className="form-footer" xs={12} lg={12}>
                <button className="button-secondary" onClick={back}>Voltar</button>
                <button className="button-primary" onClick={next}>Próximo</button>
            </Grid>
        </Grid>
    );

}
