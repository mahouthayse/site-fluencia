import React from "react";
import './style.scss';
import {Button, Grid, Box, FormControlLabel, FormControl,  InputLabel, Input} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
const axios = require('axios');


export default function Cadastro(nextStep){

    const { checkout } = useSelector( state => (state.checkout));
    const {email, password, name} = checkout
    const dispatch = useDispatch();

    async function handleSubmit(event){
        axios.post('http://api-fluenciacorporal-com.umbler.net/users', {
            name: name,
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
            }).then( () => {
            event.preventDefault();
            nextStep.nextStep();
        })
            .catch(function (error) {
                console.log(error);
            });

    }

    return(
        <Grid container className="cadastro-wrapper" direction="column" justify="flex-start" alignItems="space-around" lg={12} spacing={1}>
            <Box className="form-content">
                <FormControl component="fieldset" style={{width: '100%'}} >

                    <label htmlFor="checkoutNome" className="checkout-label" >Nome completo:</label>
                    <input  className="checkout-input" id="checkoutNome" type="text" placeholder="Inserir nome e sobrenome" required value={name} onChange={e => dispatch({ type: 'setName', name: e.target.value})}/>

                    <label htmlFor="checkoutMail" className="checkout-label">Email:</label>
                    <input className="checkout-input" id="checkoutMail" type="email" placeholder="Inserir email" required value={email} onChange={e => dispatch({ type: 'setEmail', email: e.target.value})}/>

                    <label htmlFor="checkoutPassword" className="checkout-label">Senha:</label>
                    <input className="checkout-input" id="checkoutPassword" type="password" placeholder="******" required value={password} onChange={e => dispatch({ type: 'setPassword', password: e.target.value})}/>

                </FormControl>
            </Box>


            <Grid item className="form-footer" xs={12} lg={12}>

                <Link to="/" className="checkout-link-primary" >Login</Link>
                <button className="button-primary" onClick={handleSubmit}>Próximo</button>
            </Grid>
        </Grid>
    );

}
