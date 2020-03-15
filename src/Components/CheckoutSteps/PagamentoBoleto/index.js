import React, {Component} from "react";
import pagarme from 'pagarme';
import {Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {Redirect} from "react-router-dom";
import PagamentoEmEspera from "../PagamentoStatus";
import {render, ReactDOM, findDOMNode} from "react-dom";
import Checkout from "../../../Pages/Checkout";

export default function PagamentoBoleto(nextStep){
    const { checkout } = useSelector( state => (state.checkout));
    const {documentType, documentNumber, name, country} = checkout;
    const dispatch = useDispatch();


    async function next(event){
        event.preventDefault();
        nextStep.nextStep();
    }
    async function back(event){
        event.preventDefault();
        nextStep.previousStep();
    }

    const renderDocumentInput = () => {

        const isIndividual = documentType === 'individual';

        if(documentType){
            return <React.Fragment>
                <label htmlFor="checkoutDocument" className="checkout-label" >{ isIndividual ? "CPF" : "CNPJ"}</label>
                <input
                    className="checkout-input"
                    id="checkoutDocument"
                    type="text"
                    placeholder={ isIndividual ? "Insira o seu CPF" : "Insira o seu CNPJ"}
                    required value={documentNumber}
                    onChange={e => dispatch({ type: 'setDocumentNumber', documentNumber: e.target.value})}
                />
            </React.Fragment>
        }

    }

    const handlePay = async (response) => {
        try {

            pagarme.client.connect({api_key: 'ak_live_fefjhmfcIaZqOmhcextCcZMsfFTOXN'})
                .then(client => client.transactions.create({
                    amount: 1000,
                    payment_method: 'boleto',
                    capture: 'true',
                    customer: {
                        type: documentType,
                        country: 'br',
                        name: name,
                        documents: [
                            {
                                type: 'cpf',
                                number: documentNumber,
                            },
                        ],
                    },
                })).then(response => {
                var status = response.status;
                var url = response.boleto_url;
                var barcode = response.boleto_barcode;
                dispatch({type: 'setPaymentStatus', paymentStatus: status});
                dispatch({type: 'setPaymentUrl', paymentUrl: url});
                dispatch({type: 'setPaymentBarcode', paymentBarcode: barcode});
                console.log(status, barcode, url);
            });
        } catch (e) {
            console.error(e);
        }

    }


    return(
        <Grid container className="pagamento-wrapper"  lg={12} spacing={1}>



         <FormControl component="fieldset">

         <RadioGroup row value={checkout.type} onChange={e => dispatch({ type: 'setDocumentType', documentType: e.target.value})}>
                <FormControlLabel value={"individual"} control={<Radio />} label="Pessoa Física" />
                <FormControlLabel value={"corporation"} control={<Radio />} label="Pessoa Jurídica" />
            </RadioGroup>

            {renderDocumentInput()}


            </FormControl>

            <Grid item className="form-footer" xs={12} lg={12}>
                <Button variant="contained" className="button-secondary" onClick={back}>Anterior</Button>
                <Button variant="contained" className="button-primary" onClick={handlePay}>Comprar</Button>
            </Grid>
        </Grid>
    );

}
