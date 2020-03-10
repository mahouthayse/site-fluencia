import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import HeaderIndividual from "../../../Assets/Curso/headerIndividual.png";




export default class HeaderAtendimentoIndividual extends Component{

    render(){

        return(
            <Grid container className="header-atendimento-individual" xs={12} md={12} lg={12}>

                <Grid container className="header-atendimento-conteudo" xs={12} lg={12} md={12}>

                    <Grid item className="header-atendimento-texto" xs={12} md={7} lg={7}>
                        <span className="header-titulo-primario"> Atendimento Individual </span>
                        <span className="header-subtitulo-primario">Conquiste o uso perfeito do método de percepção de fertilidade com atendimento personalizado </span>
                    </Grid>

                    <Grid item className="header-atendimento-imagem" xs={12} md={5} lg={5}>
                        <img className="atendimento-imagem" src={HeaderIndividual}/>
                    </Grid>

                </Grid>


            </Grid>
        );
    }
}