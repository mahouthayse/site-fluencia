import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import {faClock, faTimesCircle} from "@fortawesome/free-regular-svg-icons";






export default class PagamentoRecusado extends Component{

    render(){

        return(
            <Grid container className="checkout-recusado-wrapper" xs={12} md={12}>

                <FontAwesomeIcon icon={faTimesCircle} size="4x" color="#CA4B49"/>
                <span className="fail-text-title"> Ops, algo deu errado com o pagamento!</span>
                <span className="fail-text-primary">Infelizmente sua compra não foi aprovada. Verifique se os dados do seu cartão estão corretos ou tente outra forma de pagamento.</span>



                    <Link to="/" className="fail-link-primary" >Tentar outra vez</Link>




            </Grid>
        );
    }
}