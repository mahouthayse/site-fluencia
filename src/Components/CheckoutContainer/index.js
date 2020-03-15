import React, { Component } from "react";
import "./style.scss";
import {Grid} from "@material-ui/core";
import CheckoutSteps from "../CheckoutSteps";
import CheckoutSide from "../../Assets/Checkout/imgIndividual.png";


export default class CheckoutContainer extends Component{
    render(){
        return(


            <Grid container className="checkout-component-wrapper" xs={12} md={8}>

                <Grid item className="checkout-component-side" xs={12} md={6}>
                    <img className="checkout-side-image" src={CheckoutSide}/>
                </Grid>

                <Grid item className="checkout-component-form" xs={12} md={6}>
                    <CheckoutSteps/>
                </Grid>
            </Grid>


        );
    }
}