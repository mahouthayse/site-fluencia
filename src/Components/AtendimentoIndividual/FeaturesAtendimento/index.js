import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faPlus} from "@fortawesome/free-solid-svg-icons";
import MateriaisImage from "../../../Assets/Curso/materiais.png";




export default class FeaturesIndividual extends Component{

    render(){

        return(
            <Grid container className="features-individual" xs={12} md={12} lg={12}>

                <Grid item className="features-individual-imagem" xs={12} md={5}>
                    <img className="features-imagem" src={MateriaisImage}/>
                </Grid>

                <Grid item className="features-individual-texto" xs={12} md={5}>

                    <span className="titulo-primario" style={{textAlign: 'left'}}> O que está incluído?</span>

                    <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/>3h30 de videoaulas  </span>
                    <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Ebook com 150 páginas </span>
                    <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Materiais complementares </span>
                    <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Quiz para auto-avaliação </span>
                    <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Sugestões de leituras extras </span>
                    <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> 5 sessões de atendimento individual  </span>
                    <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Suporte por whatsapp por 1 ano </span>
                    <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Descontos para atendimentos extras </span>
                </Grid>


            </Grid>

        );
    }
}