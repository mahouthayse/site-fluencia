import React, { Component } from "react";
import {Grid,Divider} from '@material-ui/core';
import "./style.scss";
import {Link} from "react-router-dom";
import Group43 from "../../../Assets/Curso/group43.svg";
import {useDispatch, useSelector} from "react-redux";
import checkoutActions from "../../../actions/checkout";
import api from "../../../services/api";
import { useHistory } from 'react-router-dom';





export default function ValueCursoIndividual(){

    const history = useHistory();
    const {checkout} = useSelector( state => (state.checkout));
    const {productTitle, productPrice} = checkout;
    const dispatch = useDispatch();
    console.log(productTitle, productPrice);



    async function handleCheckout(){
        api.get('/products/5e723cbb77d9af0041584ab1', {
        })
            .then( response => {
                console.log(response);
                var title = response.data.title;
                var price = response.data.price;
                // console.log(title, price);
                dispatch(checkoutActions.setProduct(title, price));
            }).then(
            history.push('/checkout')
        )
            .catch(function (error) {
                console.log(error)
            });


    }

    return(
        <Grid container className="value-curso-wrapper" xs={12} lg={12} md={12}>


            <Grid container className="value-curso-card" xs={12} md={5}>

                <img className="value-card-image" src={Group43}/>

                <Grid item className="value-curso-card-header" xs={12} md={12}>

                    <h2 className="value-card-title"> Atendimento Individual</h2>
                    <h1 className="value-card-price"> R$1499</h1>
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

                        <button className="value-card-link" onClick={handleCheckout}>Comprar</button>
                </Grid>
            </Grid>

        </Grid>
    );
}
