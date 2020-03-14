import React from "react";
// import './styles.scss';
import {Button, Grid, Box, FormControlLabel, FormControl,  InputLabel, Input, RadioGroup, Radio} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// import api from '../../../../services/api';




export default function PagamentoResumo(nextStep){

    const { checkout } = useSelector( state => (state.checkout));
    const {email, password, name, paymentMethod} = useSelector(state => (state.checkout));
    const dispatch = useDispatch();

    const dados = {
        title: "Curso individual",
        price: 1499
    }

    async function handleSubmit(event){
        event.preventDefault();
        // console.log(nextStep.nextStep())
        nextStep.nextStep();
    }

    return(
        <Grid container className="container" direction="column" justify="flex-start" alignItems="space-around" lg={12} spacing={1}>
            <Box className="form-content">
                <FormControl component="fieldset" >

                    <RadioGroup row value={checkout.paymentMethod} onChange={status => dispatch({ type: 'setPaymentMethod', paymentMethod: paymentMethod.target.value})}>
                        <FormControlLabel value={"sim"} control={<Radio />} label="Sim" />
                        <FormControlLabel value={"nao"} control={<Radio />} label="Não" />
                    </RadioGroup>

                    <InputLabel htmlFor="my-input" >Nome</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={checkout.name} onChange={checkout => dispatch({ type: 'setName', name: name.target.value})}/>

                    <InputLabel htmlFor="my-input" >Email</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={checkout.email} onChange={checkout => dispatch({ type: 'setEmail', name: email.target.value})}/>

                    <InputLabel htmlFor="my-input" >Password</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={checkout.password} onChange={checkout => dispatch({ type: 'setPassword', name: password.target.value})}/>


                </FormControl>
            </Box>


            <Box className="form-footer">
                <Button variant="contained" className="button-primary" onClick={handleSubmit}>Próximo</Button>
            </Box>
        </Grid>
    );

}
