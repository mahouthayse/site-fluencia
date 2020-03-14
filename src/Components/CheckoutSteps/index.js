import React from "react";
// import './style.scss';
import {Grid} from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import Cadastro from "./Cadastro";
import PagamentoResumo from "./PagamentoResumo";


export default function CheckoutSteps(){
    const { checkout } = useSelector( state => (state.checkout));
    const {step} = useSelector( state => (state.step));
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
                <Grid container className="muco-container"  spacing={1}>
                    <Cadastro nextStep={nextStep}/>
                    { console.log(step)}
                </Grid>
            )
        case 2:
            return (
                <Grid container className="muco-container" spacing={1}>
                    <PagamentoResumo nextStep={nextStep} previousStep={previousStep} />
                </Grid>
            )
        case 3:
            // if(muco.status === 'sim'){
            //     return (
            //         <Grid container className="muco-container" spacing={1}>
            //             <StepThree nextStep={nextStep} previousStep={previousStep} />
            //             { console.log(muco.status)}
            //         </Grid>
            //
            //     )
            // } else {
            //     return (
            //         <Grid container className="muco-container" spacing={1}>
            //             <StepFour nextStep={nextStep} previousStep={previousStep} />
            //             { console.log(muco.status)}
            //         </Grid>
            //     )
            // }
        default:
            return (
                alert("Ops! Algo deu errado. Por favor, informe ao suporte do sistema :(")
            )

    }


}
