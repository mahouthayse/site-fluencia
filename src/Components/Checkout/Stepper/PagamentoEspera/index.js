import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import {faClock} from "@fortawesome/free-regular-svg-icons";






export default class PagamentoEspera extends Component{

    render(){

        return(
            <Grid container className="checkout-espera-wrapper" xs={12} md={12}>

                <FontAwesomeIcon icon={faClock} size="4x" color="#FFD34E"/>
                <span className="wait-text-title"> Aguardando pagamento</span>
                <span className="wait-text-primary">Falta pouco! Pague o boleto para que o pagamento seja realizado.
                    Após pagamento, a aprovação pode ocorrer em até 3 dias úteis.</span>

                <Grid item className="barcode" xs={12} md={10}>
                    <span className="wait-text-title-secondary"> Código de barras </span>
                    <span className="wait-text-secondary">XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXXXXXXXXX</span>
                </Grid>

                <Grid item className="wait-footer" xs={12} md={12}>
                    <Link to="/" className="wait-link-primary" >Copiar</Link>
                    <Link to="/" className="wait-link-secondary" >Visualizar boleto</Link>
                </Grid>




            </Grid>
        );
    }
}