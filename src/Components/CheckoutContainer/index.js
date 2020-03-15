import React, { Component } from "react";
import "./style.scss";
import {Grid, Hidden} from "@material-ui/core";
import CheckoutSteps from "../CheckoutSteps";
import CheckoutSide from "../../Assets/Checkout/imgIndividual.png";


export default class CheckoutContainer extends Component{
    render(){
        return(


            <Grid container className="checkout-component-wrapper" style={{height: '100%'}} xs={12} md={8}>

                <Hidden only={['xs']}>
                <Grid item className="checkout-component-side" xs={12} md={6}>
                    <img className="checkout-side-image" src={CheckoutSide}/>
                </Grid>
                </Hidden>

                <Grid item className="checkout-component-form" xs={12} md={6}>
                    <CheckoutSteps/>
                </Grid>
            </Grid>


        );
    }
}