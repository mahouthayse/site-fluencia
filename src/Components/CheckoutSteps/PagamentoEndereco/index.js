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
    Select, TextField
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
        <Grid container className="pagamento-wrapper"  lg={12} spacing={2}>

            <span className="checkout-title"> Endereço de cobrança</span>

            <FormControl component="fieldset">
                <label htmlFor="checkoutRua" className="checkout-label" >Nome de cobrança:</label>
                <input className="checkout-input" id="checkoutNome" type="text" placeholder="Inserir nome e sobrenome" required value={checkout.name} onChange={e => dispatch({ type: 'setName', name: e.target.value})}/>

                <label htmlFor="checkoutRua" className="checkout-label" >Rua:</label>
                <input className="checkout-input" id="checkoutRua" type="text" placeholder="Inserir rua" required value={checkout.street} onChange={e => dispatch({ type: 'setStreet', street: e.target.value})}/>

                <Grid container className="checkout-row" xs={12} md={12} spacing={1}>

                    <Grid container item className="checkout-label-column" xs={12} md={6}>
                        <label htmlFor="checkoutNumbero" className="checkout-label" >Numero:</label>
                        <input className="checkout-input-row" id="checkoutNumero" type="text" placeholder="Inserir numero" required value={checkout.streetNumber} onChange={e => dispatch({ type: 'setStreetNumber', streetNumber: e.target.value})}/>
                    </Grid>

                    <Grid container item className="checkout-label-column" xs={12} md={6}>
                        <label htmlFor="checkoutCEP" className="checkout-label" >Código Postal:</label>
                        <input className="checkout-input-row" id="checkoutCEP" type="text" placeholder="Inserir CEP" required value={checkout.zipcode} onChange={e => dispatch({ type: 'setZipcode', zipcode: e.target.value})}/>
                    </Grid>

                </Grid>

                <Grid container className="checkout-row" xs={12} md={12} spacing={1}>
                    <Grid container item className="checkout-label-column" xs={12} md={6}>
                        <label htmlFor="checkoutPais" className="checkout-label" >País:</label>
                        <input className="checkout-input-row" id="checkoutPais" type="text" placeholder="Inserir País" required value={checkout.country} onChange={e => dispatch({ type: 'setCountry', country: e.target.value})}/>
                    </Grid>
                    <Grid container item className="checkout-label-column" xs={12} md={6}>
                        <label htmlFor="checkoutEstado" className="checkout-label" >Estado:</label>

                        <TextField select id="parcelas" variant="outlined" margin="dense" value={(stateAd === '') ? 'Selecione seu estado' : checkout.stateAd} placeholder="Estados" onChange={e => dispatch({ type: 'setStateAd', stateAd: e.target.value})}>
                            <MenuItem value={"ac"}>Acre</MenuItem>
                            <MenuItem value={"al"}>Alagoas</MenuItem>
                            <MenuItem value={"ap"}>Amapá</MenuItem>
                            <MenuItem value={"am"}>Amazonas</MenuItem>
                            <MenuItem value={"ba"}>Bahia</MenuItem>
                            <MenuItem value={"ce"}>Ceará</MenuItem>
                            <MenuItem value={"df"}>Distrito Federal</MenuItem>
                            <MenuItem value={"es"}>Espírito Santo</MenuItem>
                            <MenuItem value={"go"}>Goiás</MenuItem>
                            <MenuItem value={"ma"}>Maranhão</MenuItem>
                            <MenuItem value={"mt"}>Mato Grosso</MenuItem>
                            <MenuItem value={"ms"}>Mato Grosso do Sul</MenuItem>
                            <MenuItem value={"mg"}>Minas Gerais</MenuItem>
                            <MenuItem value={"pa"}>Pará</MenuItem>
                            <MenuItem value={"pb"}>Paraíba</MenuItem>
                            <MenuItem value={"pr"}>Paraná</MenuItem>
                            <MenuItem value={"pe"}>Pernambuco</MenuItem>
                            <MenuItem value={"pi"}>Piauí</MenuItem>
                            <MenuItem value={"rj"}>Rio de Janeiro</MenuItem>
                            <MenuItem value={"rn"}>Rio Grande do Norte</MenuItem>
                            <MenuItem value={"rs"}>Rio Grande do Sul</MenuItem>
                            <MenuItem value={"ro"}>Rondônia</MenuItem>
                            <MenuItem value={"rr"}>Roraima</MenuItem>
                            <MenuItem value={"sc"}>Santa Catarina</MenuItem>
                            <MenuItem value={"sp"}>São Paulo</MenuItem>
                            <MenuItem value={"se"}>Sergipe</MenuItem>
                            <MenuItem value={"to"}>Tocantins</MenuItem>
                        </TextField>

                    </Grid>
                </Grid>
                <label htmlFor="checkoutCidade" className="checkout-label" >Cidade:</label>
                <input className="checkout-input" id="checkoutCidade" type="text" placeholder="Inserir Cidade" required value={checkout.city} onChange={e => dispatch({ type: 'setCity', city: e.target.value})}/>


            </FormControl>

            <Grid item className="form-footer" xs={12} lg={12}>
                <button className="button-secondary" onClick={back}>Voltar</button>
                <button className="button-primary" onClick={next}>Próximo</button>
            </Grid>
        </Grid>
    );

}
