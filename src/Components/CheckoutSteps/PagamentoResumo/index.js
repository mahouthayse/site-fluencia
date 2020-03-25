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
import api from "../../../services/api";
import checkoutActions from "../../../actions/checkout";


export default function PagamentoResumo(nextStep){
    const { checkout } = useSelector( state => (state.checkout));
    const {paymentMethod, coupon, productTitle, productPrice} = checkout;
    const dispatch = useDispatch();

    async function next(event){
        event.preventDefault();
        nextStep.nextStep();
    }
    async function back(event){
        event.preventDefault();
        nextStep.previousStep();
    }

    async function handleCoupon(){
        switch(coupon){
            case 'fluefriends':
                return(
                    api.get('/coupons/5e7bb8620408e800b1235a33').then(response => {
                        var porcentagem = response.data.percentage;
                        let finalPrice = productPrice - ((productPrice * porcentagem)/100);
                         console.log(finalPrice);

            })
                )

            default:
                return ( console.log("O cupom não é válido"))

        }

    }

    return(
        <Grid container className="pagamento-wrapper"  lg={12} spacing={1}>

            <span className="checkout-title"> Resumo da compra</span>

            <Grid item className="form-resumo" xs={12} lg={12}>
                <span className="resumo-text"><b>{productTitle} </b></span>
            <span className="resumo-text"> R${productPrice}</span>
            </Grid>


            <FormControl component="fieldset">
                <RadioGroup column value={paymentMethod} onChange={e => dispatch({ type: 'setPaymentMethod', paymentMethod: e.target.value})}>
                    <FormControlLabel value={"cartao"} control={<Radio />} label="Cartão de crédito" />
                    <FormControlLabel value={"boleto"} control={<Radio />} label="Boleto Bancário" />
                </RadioGroup>
            </FormControl>

            <Grid container item className="checkout-label-column" xs={12} lg={12}>
                <label htmlFor="checkoutCupom" className="checkout-label" >Cupom de desconto:</label>
                <input className="checkout-input-row" id="checkoutCEP" type="text" placeholder="Inserir cupom" value={coupon} onChange={e => dispatch({ type: 'setCoupon', coupon: e.target.value})}/>
                <button className="button-secondary" onClick={handleCoupon}>Adicionar cupom</button>
            </Grid>

            <Grid item className="form-footer" xs={12} lg={12}>
                <button className="button-secondary" onClick={back}>Voltar</button>
                <button className="button-primary" onClick={next}>Próximo</button>
            </Grid>
        </Grid>
    );

}
