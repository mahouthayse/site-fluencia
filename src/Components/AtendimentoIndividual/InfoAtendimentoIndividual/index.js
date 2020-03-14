import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";




export default class InfoAtendimentoIndividual extends Component{

    render(){

        return(
            <Grid container className="info-atendimento-individual" xs={12} md={12} lg={12}>

                            <FontAwesomeIcon className="faq-icon-primary" icon={faChevronDown} size="2x" color="#471E67"/>

                            <span className="titulo-secundario">O primeiro e mais completo curso de percepção de fertilidade do Brasil</span>



                            <Grid container className="atendimento-informacoes-content" xs={12} sm={12} lg={9} md={12}>

                                <Grid item className="info-card" xs={9} sm={8} md={3}>

                                    <div className="card-image-1">

                                        <div className="ribbon3">
                                            <span className="ribbon-title">Informações gerais</span>
                                            <span className="ribbon-subtitle">Objetivo e metodologia</span>
                                        </div>

                                    </div>

                                    <div className="info-card-conteudo">

                                    <span className="info-card-title"> Aprofunde-se no método Justisse</span>
                                    <span className="info-card-text"> Aprenda e aplique o método de percepção de fertilidade
                                        Justisse com atendimento individual</span>

                                    <span className="info-card-title"> Curso online + sessões remotas</span>
                                    <span className="info-card-text"> Você recebe acesso a um curso 100% online e também
                                        terá direito a 5 sessões de acompanhamento individual de 1 hora cada (no Zoom)</span>
                                    </div>

                                </Grid>

                                <Grid item className="info-card" xs={9} sm={8} md={3}>

                                    <div className="card-image-2">
                                        <div className="ribbon3">
                                            <span className="ribbon-title">Para quem é o curso?</span>
                                            <span className="ribbon-subtitle">Público e pré-requisito</span>
                                        </div>
                                    </div>
                                    <div className="info-card-conteudo">
                                    <span className="info-card-title"> Público-alvo</span>
                                    <span className="info-card-text">Para quem quer a máxima eficácia do método e um
                                        atendimento personalizado e intimista</span>

                                    <span className="info-card-title"> Não existe pré-requisito!</span>
                                    <span className="info-card-text"> Você recebe um material de apoio completo para aprender
                                        o método desde o básico e suporte personalizado para tirar dúvidas e atingir o uso
                                        perfeito</span>
                                    </div>
                                </Grid>

                                <Grid item className="info-card" xs={9} sm={8} md={3}>
                                    <div className="card-image-3">
                                        <div className="ribbon3">
                                            <span className="ribbon-title">Carol Fischmann</span>
                                            <span className="ribbon-subtitle">Sobre a instrutora</span>
                                        </div>
                                    </div>

                                    <div className="info-card-conteudo">
                                    <span className="info-card-text"> <b>Carol Fischmann</b> é antropóloga e tem formação como Instrutora
                                de Saúde Reprodutiva Holística no Justisse College, um curso de dois anos para formar instrutoras
                                de percepção de fertilidade. Fundadora do projeto Fluência Corporal, Carol atua como instrutura
                                desde 2017 e já ajudou dezenas de menstruantes.</span>
                                    </div>
                                </Grid>

                            </Grid>


                        </Grid>
            
        );
    }
}