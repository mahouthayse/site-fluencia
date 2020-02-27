import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Footer from "../../Components/Footer";
import SimpleMenu from "../../Components/Menu";




export default class Cadastro extends Component{

    render(){

        return(
            <Grid container className="cadastro-page-wrapper" xs={12} lg={12} md={12}>
                <SimpleMenu/>

                <Grid container className="cadastro-content" xs={12} md={6}>

                    <input type="text"/>
                </Grid>

                <Footer/>
            </Grid>
        );
    }
}