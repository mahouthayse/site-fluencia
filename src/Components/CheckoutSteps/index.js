import React from "react";
import './style.scss';
import {Grid} from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import Cadastro from "./Cadastro";
import PagamentoResumo from "./PagamentoResumo";
import PagamentoEndereco from "./PagamentoEndereco";
import PagamentoCartao from "./PagamentoCartao";
import PagamentoBoleto from "./PagamentoBoleto";



export default function CheckoutSteps(){
    const { checkout } = useSelector( state => state.checkout);
    const {step} = checkout;
    const dispatch = useDispatch();


    function nextStep(){
        dispatch({ type: 'setStep', step: step + 1})
    }


    function previousStep(){
        dispatch({ type: 'setStep', step: step - 1})
    }

    switch(step) {
        case 1:
            return (
                <Cadastro nextStep={nextStep}/>
            )
        case 2:
            return (
                    <PagamentoEndereco nextStep={nextStep} previousStep={previousStep} />

            )
        case 3: 
                return (
                        <PagamentoResumo nextStep={nextStep} previousStep={previousStep} />
                )
        case 4:
            if(checkout.paymentMethod === 'cartao'){
                 return (
                         <PagamentoCartao nextStep={nextStep} previousStep={previousStep} />
 
                 )
            } else {
                return (
                         <PagamentoBoleto nextStep={nextStep} previousStep={previousStep} />
    
                 )
             }
        case 5:

        default:
            return (
                alert("Ops! Algo deu errado. Por favor, informe ao suporte do sistema :(")
            )

    }


}
