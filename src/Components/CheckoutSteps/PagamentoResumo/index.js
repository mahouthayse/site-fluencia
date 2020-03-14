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
    const {paymentMethod} = useSelector(state => (state.checkout));
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

            <span> Resumo da compra</span>
            <span>{dados.title} </span> 
            <span> {dados.price}</span>
  
            
            <FormControl component="fieldset">
                <RadioGroup column value={checkout.paymentMethod} onChange={e => dispatch({ type: 'setPaymentMethod', paymentMethod: e.target.value})}>
                    <FormControlLabel value={"cartao"} control={<Radio />} label="Cartão de crédito" />
                    <FormControlLabel value={"boleto"} control={<Radio />} label="Boleto Bancário" />
                </RadioGroup>
            </FormControl>

            <Box className="footer-secondary-2">
                <Button variant="contained" className="button-primary" onClick={back}>Anterior</Button>
                <Button variant="contained" className="button-primary" onClick={next}>Próximo</Button>
            </Box>
        </Grid>
    );
    
}
