import React, {useEffect, useState} from "react";
import './style.scss';
import {Button, Grid, Box, FormControlLabel, FormControl,  InputLabel, Input} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../services/api';


export default function Cadastro(nextStep){

    const { checkout } = useSelector( state => (state.checkout));
    const {email, password, name, login} = checkout;
    const dispatch = useDispatch();
    const [err, setErr] = useState(false);
    useEffect(() => {
        setTimeout(setErr(false), 5000)
    }, [])
    async function handleSubmit(event){
        api.post('/users', {
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

    async function handleSubmitLogin(event){
        api.post('/users/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                setErr(false);
                // console.log(response)
            }).then( () => {
            event.preventDefault();
            nextStep.nextStep();
        })
            .catch(function (error) {
                setErr(true);
            });
    }




   function handleLogin(){
       dispatch({ type: 'setLogin', login: true})
    }


    if (!login) {
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
                    <button className="button-primary" onClick={handleLogin}>Login</button>
                    <button className="button-primary" onClick={handleSubmit}>Próximo</button>
                </Grid>
            </Grid>
        )

    }

    else {
        return(
            <Grid container className="cadastro-wrapper" direction="column" justify="flex-start" alignItems="space-around" lg={12} spacing={1}>
                <Box className="form-content">
                    <FormControl component="fieldset" style={{width: '100%'}} >
                        <label htmlFor="checkoutMail" className="checkout-label">Email:</label>
                        <input className="checkout-input" id="checkoutMail" type="email" placeholder="Inserir email" required value={email} onChange={e => dispatch({ type: 'setEmail', email: e.target.value})}/>

                        <label htmlFor="checkoutPassword" className="checkout-label">Senha:</label>
                        <input className="checkout-input" id="checkoutPassword" type="password" placeholder="******" required value={password} onChange={e => dispatch({ type: 'setPassword', password: e.target.value})}/>

                    </FormControl>
                </Box>

                    <button className="button-primary" onClick={handleSubmitLogin}>Próximo</button>
                    {(err) ? <span style={{color: '#d32f2f', textAlign: 'center', width: '100%', fontSize: '0.9rem', marginTop: 20}}>Usuário e/ou senha inválido(s)!</span> : ''}
            </Grid>
        )
    }





}