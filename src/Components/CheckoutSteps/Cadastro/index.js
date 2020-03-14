import React from "react";
import './style.scss';
import {Button, Grid, Box, FormControlLabel, FormControl,  InputLabel, Input} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';


export default function Cadastro(nextStep){

    const { checkout } = useSelector( state => (state.checkout));
    const {email, password, name} = checkout
    const dispatch = useDispatch();

    async function handleSubmit(event){
        event.preventDefault();
        // console.log(nextStep.nextStep())
        nextStep.nextStep();
    }

    return(
        <Grid container className="cadastro-wrapper" direction="column" justify="flex-start" alignItems="space-around" lg={12} spacing={1}>
            <Box className="form-content">
                <FormControl component="fieldset" >

                        <label htmlFor="checkoutNome" className="checkout-label" >Nome completo:</label>
                        <input className="checkout-input" id="checkoutNome" type="text" placeholder="Inserir nome e sobrenome" required value={name} onChange={e => dispatch({ type: 'setName', name: e.target.value})}/>
        
                       <label htmlFor="checkoutMail" className="checkout-label">Email:</label>
                       <input className="checkout-input" id="checkoutMail" type="email" placeholder="Inserir email" required value={email} onChange={e => dispatch({ type: 'setEmail', email: e.target.value})}/>

                       <label htmlFor="checkoutPassword" className="checkout-label">Senha:</label>
                       <input className="checkout-input" id="checkoutPassword" type="password" placeholder="******" required value={password} onChange={e => dispatch({ type: 'setPassword', password: e.target.value})}/>

                </FormControl>
            </Box>


            <Box className="form-footer">
                <Button variant="contained" className="button-primary" onClick={handleSubmit}>Próximo</Button>
            </Box>
        </Grid>
    );

}
