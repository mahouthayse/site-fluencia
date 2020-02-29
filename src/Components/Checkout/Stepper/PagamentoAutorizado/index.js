import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";






export default class PagamentoAutorizado extends Component{

    render(){

        return(
            <Grid container className="checkout-autorizado-wrapper" xs={12} md={12}>

                <FontAwesomeIcon icon={faCheckCircle} size="4x" color="#6BBE46"/>
                <span className="success-text-title"> Pagamento efetuado com sucesso!</span>
                <span className="success-text-primary">Parabéns! Você deu o primeiro passo para aprender mais sobre
                    percepção de fertilidade e empoderar-se ainda mais do seu corpo.</span>
                <span className="success-text-primary">Acesse a área da aluna com seu email e senha cadastrados para ter
                    acesso às videoaulas e materiais complementares. Aproveite!</span>

                <Link to="/" className="success-link" >Área da aluna</Link>

            </Grid>
        );
    }
}