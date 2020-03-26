import React, {useState, useEffect} from "react";
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
import api from "../../../services/api";

var moment = require('moment');

export default function PagamentoCartao(nextStep){
    const [pagStatus, setPagStatus] = useState(false);
    const [roles, setRoles] = useState([]);
    const [err, setErr] = useState(false);
    const {checkout} = useSelector( state => (state.checkout));
    const {
        user,
        installments,
        name,
        documentType,
        email,
        zipcode,
        documentNumber,
        birthday,
        phoneNumber,
        street,
        streetNumber,
        stateAd,
        city,
        cardHolderName,
        cardNumber,
        finalPrice,
        cardCvv,
        cardExpirationDate,
        paymentStatus,
        productPrice,
        productTitle
    } = checkout;
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(setErr(false), 5000)
        // pegando roles
        async function getRoles(){
            const response = await api.get('/roles');
            await setRoles(response.data);
        }

        getRoles();
    }, [])

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
            const client = await pagarme.client.connect({api_key: 'ak_live_fefjhmfcIaZqOmhcextCcZMsfFTOXN'});
            const cardHash = await client.security.encrypt(card);
            var dateOfBirth = moment(birthday, 'DD/MM/YYYY', true);
            dateOfBirth = dateOfBirth.format('YYYY-MM-DD');
            var phoneNumberFormat = '+55' + phoneNumber;

            var productPriceFormat = finalPrice * 100;

            const transaction = await client.transactions.create({
                "amount": productPriceFormat,
                "card_hash": cardHash,
                "installments" : installments,
                "customer": {
                  "external_id": "#3311",
                  "name": name,
                  "type": documentType,
                  "country": 'br',
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
                    "country": 'br',
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
                    "title": productTitle,
                    "unit_price": productPriceFormat,
                    "quantity": 1,
                    "tangible": false
                  }
                ]
            }).then(response => {
                var status = response.status;
                dispatch({type: 'setPaymentStatus', paymentStatus: status});
            }).then( () =>{
                setPagStatus(true);
            })

        } catch (e) {
            console.error(e);
        }

        if(pagStatus){
            let res = roles.filter(index => {
                return index.name == getProductDb(productTitle)
            });
            const producId = res[0].id;
            console.log('pagu')
            console.log(producId)
            api.post('/user-roles', {
                userId: producId,
                roleId: localStorage.getItem('id')
            })
                .then(function (response) {
                    setErr(false);
                    // console.log(response)
                }).then( () => {
                    // event.preventDefault();
                    nextStep.nextStep();
                })
                .catch(function (error) {
                    setErr(true);
                });
        }
    }

    function getProductDb(product){
        switch (product) {
            case 'Curso de percepção de fertilidade':
                return 'alunaWorkshop'
                break;
        
            case 'Atendimento Individual':
                return 'alunaIndividual'
                break;
        
            case 'Atendimento em grupo 18h':
                return 'alunaGrupo'
                break;
        
            case 'Atendimento em grupo 21h':
                return 'alunaGrupo'
                break;
            default:
                return ''
                break;
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
                    <Grid container item className="checkout-label-column" xs={12} lg={6}>
                    <label htmlFor="checkoutNome" className="checkout-label" >Telefone:</label>
                    <input className="checkout-input-row" id="checkoutNome" type="text" placeholder="(00)00000-0000" required value={phoneNumber} onChange={e => dispatch({ type: 'setPhoneNumber', phoneNumber: e.target.value})}/>
                    </Grid>
                    <Grid container item className="checkout-label-column" xs={12} lg={6}>
                    <label htmlFor="checkoutNome" className="checkout-label" >Data de nascimento:</label>
                    <input className="checkout-input-row" id="checkoutNome" type="text" placeholder="00/00/0000" required value={birthday} onChange={e => dispatch({ type: 'setBirthday', birthday: e.target.value})}/>
                    </Grid>
                </Grid>
            <label htmlFor="checkoutRua" className="checkout-label" >Número do cartão:</label>
            <input className="checkout-input" id="checkoutNumero" type="text" placeholder="Inserir numero do cartão" required value={cardNumber} onChange={e => dispatch({ type: 'setCardNumber', cardNumber: e.target.value})}/>

                <Grid container className="checkout-row" xs={12} lg={12}>

                    <Grid container item className="checkout-label-column" xs={12} lg={6}>
                        <label htmlFor="checkoutCvv" className="checkout-label" >Cvv:</label>
                        <input className="checkout-input-row" id="checkoutCvv" type="text" placeholder="Inserir CVV" required value={cardCvv} onChange={e => dispatch({ type: 'setCardCvv', cardCvv: e.target.value})}/>
                    </Grid>

                    <Grid container item className="checkout-label-column" xs={12} lg={6}>
                        <label htmlFor="checkoutDate" className="checkout-label" >Validade (apenas números):</label>
                        <input className="checkout-input-row" id="checkoutDate" type="text" placeholder="00/00" required value={cardExpirationDate} onChange={e => dispatch({ type: 'setCardExpirationDate', cardExpirationDate: e.target.value})}/>
                    </Grid>
                </Grid>


            </FormControl>

            <Grid item className="form-footer" xs={12} lg={12}>
                <button className="button-secondary" onClick={back}>Anterior</button>
                <button className="button-primary" onClick={handlePay}>Pagar</button>
            </Grid>
        </Grid>
    );

}
