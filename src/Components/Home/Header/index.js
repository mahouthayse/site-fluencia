import React, { Component } from "react";
import {Grid, Divider} from '@material-ui/core';
import "./style.scss";


export default class Header extends Component{

    render(){

        return(
            <Grid container className="header-wrapper" xs={12} lg={12}>

                <Grid item container className="header-container-title" xs={12} sm={9} md={8} lg={6}>
                    <h1 className="header-titulo"> Fluência corporal</h1>
                    <span className="header-texto">Entenda finalmente o que ninguém nunca te explicou sobre seu corpo e seus ciclos</span>
                </Grid>

            </Grid>

        );
    }
}