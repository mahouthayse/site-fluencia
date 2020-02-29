import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Footer from "../../Components/Footer";
import SimpleMenu from "../../Components/Menu";
import CheckoutComponent from "../../Components/Checkout";




export default class Checkout extends Component{

    render(){

        return(
            <Grid container className="checkout-page-wrapper" sm={12} lg={12} md={12}>
                <SimpleMenu/>

                <Grid container className="checkout-content-wrapper" sm={12} lg={12} md={12}>
                    <CheckoutComponent/>

                </Grid>

                <Footer/>
            </Grid>
        );
    }
}