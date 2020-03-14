import React from "react";
// import './styles.scss';
import {Button, Grid, Box, FormControlLabel, FormControl,  InputLabel, Input} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// import api from '../../../../services/api';
import checkout from "../../../reducers/checkout";
import {setEmail} from "../../../actions/setEmail";


export default function Cadastro(nextStep){

    const { checkout } = useSelector( state => (state.checkout));
    const {email, password, name} = useSelector(state => (state.checkout));
    const dispatch = useDispatch();

    async function handleSubmit(event){
        event.preventDefault();
        // console.log(nextStep.nextStep())
        nextStep.nextStep();
    }

    return(
        <Grid container className="container" direction="column" justify="flex-start" alignItems="space-around" lg={12} spacing={1}>
            <Box className="form-content">
                <FormControl component="fieldset" >
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
