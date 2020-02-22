import React, { Component } from "react";
import {Grid, Divider} from '@material-ui/core';
import "./style.scss";


export default class Header extends Component{

    render(){

        return(
            <Grid container className="header-wrapper" xs={12} lg={12}>

                <Grid item container className="header-container-title" direction="column" justify="flex-start" alignItems="center" xs={12} lg={5}>
                    <h1 className="header-titulo"> Fluência corporal</h1>
                    <span className="header-texto">Aprenda tudo sobre percepção menstrual com conteúdos gratuitos e cursos completos</span>
                </Grid>

            </Grid>

        );
    }
}