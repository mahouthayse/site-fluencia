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

export default function PagamentoEndereco(nextStep){
    const { checkout } = useSelector( state => (state.checkout));
    const {name, street, streetNumber, zipcode, country, stateAd, city} = useSelector(state => (state.checkout));
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
  
  <span> Endereço de cobrança</span>
            
            <FormControl component="fieldset">
            <label htmlFor="checkoutRua" className="checkout-label" >Nome de cobrança:</label>
            <input className="checkout-input" id="checkoutNome" type="text" placeholder="Inserir nome e sobrenome" required value={checkout.name} onChange={e => dispatch({ type: 'setName', name: e.target.value})}/>

            <label htmlFor="checkoutRua" className="checkout-label" >Rua:</label>
            <input className="checkout-input" id="checkoutRua" type="text" placeholder="Inserir rua" required value={checkout.street} onChange={e => dispatch({ type: 'setStreet', street: e.target.value})}/>
            <label htmlFor="checkoutNumbero" className="checkout-label" >Numero:</label>
            <input className="checkout-input" id="checkoutNumero" type="text" placeholder="Inserir numero" required value={checkout.streetNumber} onChange={e => dispatch({ type: 'setStreetNumber', streetNumber: e.target.value})}/>

           
            <label htmlFor="checkoutCEP" className="checkout-label" >Código Postal:</label>
            <input className="checkout-input" id="checkoutCEP" type="text" placeholder="Inserir CEP" required value={checkout.zipcode} onChange={e => dispatch({ type: 'setZipcode', zipcode: e.target.value})}/>

            <label htmlFor="checkoutPais" className="checkout-label" >País:</label>
            <input className="checkout-input" id="checkoutPais" type="text" placeholder="Inserir País" required value={checkout.country} onChange={e => dispatch({ type: 'setCountry', country: e.target.value})}/>

            <label htmlFor="checkoutEstado" className="checkout-label" >Estado:</label>
            <input className="checkout-input" id="checkoutEstado" type="text" placeholder="Inserir Estado" required value={checkout.stateAd} onChange={e => dispatch({ type: 'setStateAd', stateAd: e.target.value})}/>

            <label htmlFor="checkoutCidade" className="checkout-label" >Cidade:</label>
            <input className="checkout-input" id="checkoutCidade" type="text" placeholder="Inserir Cidade" required value={checkout.city} onChange={e => dispatch({ type: 'setCity', city: e.target.value})}/>


            </FormControl>

            <Box className="footer-secondary-2">
                <Button variant="contained" className="button-primary" onClick={back}>Anterior</Button>
                <Button variant="contained" className="button-primary" onClick={next}>Próximo</Button>
            </Box>
        </Grid>
    );
    
}
