import React, {Component} from "react";
import pagarme from 'pagarme';

import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    MenuItem,
    TextField,
    Radio,
    RadioGroup,
    Select
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

var moment = require('moment');

export default function PagamentoCartao(nextStep){
    const {checkout} = useSelector( state => (state.checkout));
    const {installments, name, documentType, email, zipcode, documentNumber, birthday, phoneNumber, street, streetNumber, country,stateAd, city, cardHolderName, cardNumber, cardCvv, cardExpirationDate} = checkout;
    const dispatch = useDispatch();

    async function next(event){
        event.preventDefault();
        nextStep.nextStep();
    }
    async function back(event){
        event.preventDefault();
        nextStep.previousStep();
    }

    const handlePay = async () => {

        const card = {
            card_number: cardNumber,
            card_holder_name: cardHolderName,
            card_expiration_date: cardExpirationDate,
            card_cvv: cardCvv,
        }



        try {
            const client = await pagarme.client.connect({ encryption_key: 'ek_test_13z89PCzQMTh3pWmC7NjVcHeLWywSg' });
            const cardHash = await client.security.encrypt(card);
            var dateOfBirth = moment(birthday, 'DD/MM/YYYY', true);
            dateOfBirth = dateOfBirth.format('YYYY-MM-DD');
            var phoneNumberFormat = '+55' + phoneNumber;
            const transaction = await client.transactions.create({
                "amount": 100,
                "card_hash": cardHash,
                "installments" : installments,
                "customer": {
                  "external_id": "#3311",
                  "name": name,
                  "type": documentType,
                  "country": country,
                  "email": email,
                  "documents": [
                    {
                      "type":  "cpf",
                      "number": documentNumber
                    }
                  ],
                  "phone_numbers": [phoneNumberFormat],
                  "birthday": dateOfBirth,
                },
                "billing": {
                  "name": name,
                  "address": {
                    "country": country,
                    "state": stateAd,
                    "city": city,
                    "street": street,
                    "street_number": streetNumber,
                    "zipcode": zipcode
                  }
                },
                "items": [
                  {
                    "id": "1",
                    "title": "Atendimento Individual",
                    "unit_price": 100,
                    "quantity": 1,
                    "tangible": false
                  }
                ]
            });
            console.log(transaction);

        } catch (e) {
            console.error(e);
        }
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

    return(
        <Grid container className="pagamento-wrapper"  lg={12} spacing={1}>


            <FormControl component="fieldset">



            <TextField select id="parcelas" variant="outlined" margin="dense" value={(installments === '') ? 'Selecione seu Objetivo' : checkout.installments} placeholder="Parcelas" onChange={e => dispatch({ type: 'setInstallments', installments: e.target.value})}>
                                <MenuItem value={"1"}>1 parcela</MenuItem>
                                <MenuItem value={"2"}>2 parcelas</MenuItem>
                                <MenuItem value={"3"}>3 parcelas</MenuItem>
                                <MenuItem value={"4"}>4 parcelas</MenuItem>
                                <MenuItem value={"5"}>5 parcelas</MenuItem>
                                <MenuItem value={"6"}>6 parcelas</MenuItem>
                            </TextField>


            <RadioGroup row value={checkout.type} onChange={e => dispatch({ type: 'setDocumentType', documentType: e.target.value})}>
                <FormControlLabel value={"individual"} control={<Radio />} label="Pessoa Física" />
                <FormControlLabel value={"corporation"} control={<Radio />} label="Pessoa Jurídica" />
            </RadioGroup>

            {renderDocumentInput()}


            <label htmlFor="checkoutNome" className="checkout-label" >Nome impresso no cartão:</label>
            <input className="checkout-input" id="checkoutNome" type="text" placeholder="Inserir nome impresso no cartão" required value={cardHolderName} onChange={e => dispatch({ type: 'setCardHolderName', cardHolderName: e.target.value})}/>

                <Grid container className="checkout-row" xs={12} lg={12}>
                    <Grid container item className="checkout-label-column" xs={6} lg={6}>
                    <label htmlFor="checkoutNome" className="checkout-label" >Telefone:</label>
                    <input className="checkout-input-row" id="checkoutNome" type="text" placeholder="(00)00000-0000" required value={phoneNumber} onChange={e => dispatch({ type: 'setPhoneNumber', phoneNumber: e.target.value})}/>
                    </Grid>
                    <Grid container item className="checkout-label-column" xs={6} lg={6}>
                    <label htmlFor="checkoutNome" className="checkout-label" >Data de nascimento:</label>
                    <input className="checkout-input-row" id="checkoutNome" type="text" placeholder="00/00/0000" required value={birthday} onChange={e => dispatch({ type: 'setBirthday', birthday: e.target.value})}/>
                    </Grid>
                </Grid>
            <label htmlFor="checkoutRua" className="checkout-label" >Número do cartão:</label>
            <input className="checkout-input" id="checkoutNumero" type="text" placeholder="Inserir numero do cartão" required value={cardNumber} onChange={e => dispatch({ type: 'setCardNumber', cardNumber: e.target.value})}/>

                <Grid container className="checkout-row" xs={12} lg={12}>

                    <Grid container item className="checkout-label-column" xs={6} lg={6}>
                        <label htmlFor="checkoutCvv" className="checkout-label" >Cvv:</label>
                        <input className="checkout-input-row" id="checkoutCvv" type="text" placeholder="Inserir CVV" required value={cardCvv} onChange={e => dispatch({ type: 'setCardCvv', cardCvv: e.target.value})}/>
                    </Grid>

                    <Grid container item className="checkout-label-column" xs={6} lg={6}>
                        <label htmlFor="checkoutDate" className="checkout-label" >Data de validade:</label>
                        <input className="checkout-input-row" id="checkoutDate" type="text" placeholder="00/00" required value={cardExpirationDate} onChange={e => dispatch({ type: 'setCardExpirationDate', cardExpirationDate: e.target.value})}/>
                    </Grid>
                </Grid>


            </FormControl>

            <Box className="footer-secondary-2">
                <Button variant="contained" className="button-primary" onClick={back}>Anterior</Button>
                <Button variant="contained" className="button-primary" onClick={handlePay}>Pagar</Button>
            </Box>
        </Grid>
    );

}
