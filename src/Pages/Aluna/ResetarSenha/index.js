import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import "./style.scss"
import {Link} from 'react-router-dom';


export default class ResetarSenha extends Component{
    render(){
        return(

            <Grid container className="resetar-senha" xs={12} sm={12} md={12} lg={12}>


                <Grid item className="resetar-senha-card" xs={12} lg={4}>

                    <h1 className="titulo-primario"> Redefinir Senha</h1>

                    <span className="minha-conta-text"> Esqueceu sua senha? Digite seu email abaixo e nós te enviaremos
                        instruções para redefiní-la.</span>

                    <label htmlFor="minhaContaSenhaNovaRepetir" className="login-label" >Email:</label>
                    <input className="resetar-senha-input" id="minhaContaSenhaNovaRepetir" type="text" placeholder="Email"/>

                    <button className="resetar-senha-button">Enviar</button>

                </Grid>

            </Grid>


        );
    }
}