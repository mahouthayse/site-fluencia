import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";




export default class ProgramsCurso extends Component{

    render(){

        return(
            <Grid container className="programs-wrapper" sm={12} lg={12} md={12}>

                <Grid container className="programs-content" sm={12} lg={12} md={12}>

                    <span className="programs-title"> Conheça nossos outros programas</span>

                    <Grid container className="programs-card-wrapper" sm={12} lg={12} md={12}>

                    <Grid item className="programs-card" sm={12} md={4}>
                        <span className="programs-card-title"> Atendimento em grupo</span>
                        <span className="programs-card-text">Para quem quer a máxima eficácia do método e gosta de aprender trocando com outras pessoas</span>
                        <button className="card-button">Quero conhecer</button>
                    </Grid>

                    <Grid item className="programs-card" sm={12} md={4}>
                        <span className="programs-card-title"> Atendimento individual</span>
                        <span className="programs-card-text">Para quem quer máxima eficácia do método e um atendimento personalizado e intimista</span>
                        <button className="card-button">Quero conhecer</button>
                    </Grid>

                    </Grid>

                </Grid>


            </Grid>
        );
    }
}