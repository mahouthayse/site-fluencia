import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import MateriaisImage from "../../../Assets/Curso/materiais.png";



export default class FeaturesCurso extends Component{

    render(){

        return(
            <Grid container className="features-curso-wrapper" xs={12} md={12}>

                <Grid item className="features-curso-images" xs={12} md={5}>
                    <img className="features-curso-image" src={MateriaisImage}/>
                </Grid>

                <Grid item className="features-curso-text" xs={12} md={5}>

                    <span className="features-curso-title"> O que está incluído?</span>

                        <span className="features-curso-primary-text"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/>de 2h30 de videoaulas </span>
                        <span className="features-curso-primary-text"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Aulas bônus </span>
                        <span className="features-curso-primary-text"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Ebook com 150 páginas </span>
                        <span className="features-curso-primary-text"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Materiais complementares </span>
                        <span className="features-curso-primary-text"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Quiz para auto-avaliação </span>
                        <span className="features-curso-primary-text"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Sugestões de leituras extras </span>
                        <span className="features-curso-primary-text"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Descontos nos atendimentos  </span>
                        <span className="features-curso-primary-text"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> 3 lives para tirar dúvidas </span>
                </Grid>





            </Grid>
        );
    }
}