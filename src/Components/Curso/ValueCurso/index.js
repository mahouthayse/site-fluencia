import React, { Component } from "react";
import {Grid,Divider} from '@material-ui/core';
import "./style.scss";
import {Link} from "react-router-dom";
import Group43 from "../../../Assets/Curso/group43.svg";




export default class ValueCurso extends Component{

    render(){

        return(
            <Grid container className="value-curso-wrapper" xs={12} lg={12} md={12}>


                <Grid container className="value-curso-card" xs={12} md={6}>

                    <img className="value-card-image" src={Group43}/>

                    <Grid item className="value-curso-card-header" xs={12} md={12}>

                        <h2 className="value-card-title"> Curso online</h2>
                        <h1 className="value-card-price"> R$399</h1>
                        <span className="value-card-secondary-text"> No cartão de crédito ou boleto</span>
                    </Grid>

                    <Grid item className="value-curso-card-body" xs={12} md={12}>
                        <Divider/>
                        <span className="value-card-text">Material de percepção de fertilidade mais completo do Brasil</span>
                        <Divider/>
                        <span className="value-card-text"> Instrutora certificada</span>
                        <Divider/>
                        <span className="value-card-text"> Descontos nos atendimentos</span>
                        <Divider/>
                        <span className="value-card-text"> Lives para tirar dúvidas (em grupo)</span>
                        <Divider/>

                        <Link to="/" className="value-card-link" >Comprar</Link>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}