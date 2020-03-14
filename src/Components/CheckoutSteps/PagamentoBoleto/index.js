import React, {Component} from "react";
import pagarme from 'pagarme';
    import {Redirect} from 'react-router-dom';

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
import PagamentoEmEspera from "../PagamentoEmEspera";

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
                    required value={checkout.documentNumber} 
                    onChange={e => dispatch({ type: 'setDocumentNumber', documentNumber: e.target.value})}
                />
            </React.Fragment>
        }

    }


    const handlePay = async () => {
        try {
            const client = await pagarme.client.connect({ encryption_key: 'ek_live_ZfqxBpFY4S8vDc3ytcJG8oB86AgWxp' });
    
            const transaction = await client.transactions.create({
                "amount": 100, 
                "payment_method": "boleto",
                "customer":{
                "type": documentType,
                "country": country,
                "name": name,
                "documents": [{
                    "type": "cpf",
                    "number": documentNumber
                        }]
                    }
            });
            console.log(transaction);
            return <Redirect to={PagamentoEmEspera} />
    
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

            <Box className="footer-secondary-2">
                <Button variant="contained" className="button-primary" onClick={back}>Anterior</Button>
                <Button variant="contained" className="button-primary" onClick={handlePay}>Comprar</Button>
            </Box>
        </Grid>
    );
    
}
