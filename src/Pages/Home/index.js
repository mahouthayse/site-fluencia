import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Footer from "../../Components/Footer";
import Newsletter from "../../Components/Home/Newsletter";
import Info from "../../Components/Home/Info";
import Benefits from "../../Components/Home/Benefits";
import Presentation from "../../Components/Home/Presentation";
import Header from "../../Components/Home/Header";
import SimpleMenu from "../../Components/Menu";
import Instagram from "../../Components/Home/Instagram";



export default class Home extends Component{

    render(){

        return(
            <Grid container className="home-page-wrapper" sm={12} lg={12} md={12}>
               <SimpleMenu/>

               <Grid container className="home-header" sm={12} lg={12} md={12}>

                <Header/>
               </Grid>

                <Grid container className="home-content" sm={12} lg={12} md={12}>
                    <Presentation/>
                    <Benefits/>
                    <Info/>
                    <Instagram/>
                    <Newsletter/>

               </Grid>
                <Footer/>
            </Grid>
        );
    }
}