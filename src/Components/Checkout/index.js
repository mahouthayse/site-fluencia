import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import CheckoutStepper from "./Stepper";
import SideIndividual from "../../Assets/Checkout/imgIndividual.png";





export default class CheckoutComponent extends Component{

    render(){

        return(
            <Grid container className="checkout-component-wrapper" xs={12} md={8}>

                <Grid item className="checkout-component-side" xs={12} md={6}>
                    <img className="checkout-side-image" src={SideIndividual}/>
                </Grid>

                <Grid item className="checkout-component-form" xs={12} md={6}>
                    <CheckoutStepper/>
                </Grid>

            </Grid>
        );
    }
}