import React, {Component} from "react";
import {Grid, Divider} from "@material-ui/core";
import "./style.scss"
import download from "../../../Assets/Aluna/images/download.svg";
import materialApoio from "../../../Assets/Aluna/images/materialApoio.png";
import Apostila from "../../../Assets/Aluna/materialApoio/apostila.pdf";
import GuiaRapido from "../../../Assets/Aluna/materialApoio/guia_rápido.pdf";
import Grafico from "../../../Assets/Aluna/materialApoio/grafico_baixas.pdf";
import GraficoAltas from "../../../Assets/Aluna/materialApoio/grafico_altas.pdf";
import PadroesReferencia from "../../../Assets/Aluna/materialApoio/parâmetros_referência.pdf";
import Autoavaliacao from "../../../Assets/Aluna/materialApoio/auto_avaliação.pdf";

export default class MaterialApoio extends Component{
    render(){
        return(

            <Grid container className="material-apoio" xs={12} sm={12} md={12} lg={12}>

                <img className="header-apoio" src={materialApoio} style={{marginBottom: '50px'}}/>

                <h1 className="titulo-primario">EBOOK</h1>
                <Divider />

                <span className="texto-primario" style={{marginBottom: '50px'}}>O ebook tem tudo que você precisa saber
                    sobre método de percepção de fertilidade e vai servir como material de referência para te auxiliar
                    durante o curso. </span>

                <Grid container className="button-container" style={{marginBottom: '50px'}} xs={12} lg={12}>


                    <Grid container className="base-button" xs={12} lg={5}>

                        <Grid item className="base-button-icon" xs={2} lg={2}>
                            <img className="button-icon" src={download}/>
                        </Grid>

                        <Grid item className="base-button-texto" xs={10} lg={10}>

                            <a href={Apostila} className="button-apoio-title" target="_blank">EBOOK</a>

                        </Grid>

                    </Grid>


                </Grid>



                <h1 className="titulo-primario">OUTROS MATERIAIS</h1>
                <Divider />

                <span className="texto-primario" style={{marginBottom: '50px'}}>Aqui você vai encontrar um guia rápido
                    do método, para te auxiliar a observar e interpretar os sinais de fertilidade do seu corpo, além dos
                    gráficos para você fazer suas anotações. Sugerimos que você imprima esses materiais. </span>

                <Grid container className="button-container" xs={12} lg={12}>


                <Grid container className="base-button" xs={12} lg={5}>

                    <Grid item className="base-button-icon" xs={2} lg={2}>
                        <img className="button-icon" src={download}/>
                    </Grid>

                    <Grid item className="base-button-texto" xs={10} lg={10}>
                        <a href={GuiaRapido} className="button-apoio-title" target="_blank">GUIA RÁPIDO</a>
                    </Grid>

                </Grid>


                <Grid container className="base-button" xs={12} lg={5}>

                    <Grid item className="base-button-icon" xs={2} lg={2}>
                        <img className="button-icon" src={download}/>

                    </Grid>
                    <Grid item className="base-button-texto" xs={10} lg={10}>
                        <a href={GraficoAltas} className="button-apoio-title" target="_blank">GRÁFICO</a>
                        <h2 className="button-apoio-subtitle">TEMPERATURAS ALTAS</h2>
                    </Grid>

                </Grid>


            </Grid>

                <Grid container className="button-container" xs={12} lg={12}>


                    <Grid container className="base-button" xs={12} lg={5}>

                        <Grid item className="base-button-icon" xs={2} lg={2}>
                            <img className="button-icon" src={download}/>
                        </Grid>

                        <Grid item className="base-button-texto" xs={10} lg={10}>
                            <a href={Grafico} className="button-apoio-title" target="_blank">GRÁFICO</a>
                            <h2 className="button-apoio-subtitle">TEMPERATURAS BAIXAS</h2>
                        </Grid>

                    </Grid>


                    <Grid container className="base-button" xs={12} lg={5}>

                        <Grid item className="base-button-icon" xs={2} lg={2}>
                            <img className="button-icon" src={download}/>
                        </Grid>

                        <Grid item className="base-button-texto" xs={10} lg={10}>
                            <h1 className="button-apoio-title">GRÁFICO</h1>
                            <h2 className="button-apoio-subtitle">DIAS EXTRAS</h2>
                        </Grid>

                    </Grid>

                </Grid>


                <Grid container className="button-container" xs={12} lg={12}>

                    <Grid container className="base-button" xs={12} lg={5}>

                        <Grid item className="base-button-icon" xs={2} lg={2}>
                            <img className="button-icon" src={download}/>
                        </Grid>
                        <Grid item className="base-button-texto" xs={10} lg={10}>
                            <a href={Autoavaliacao} className="button-apoio-title" target="_blank">AUTOAVALIAÇÃO</a>
                        </Grid>

                    </Grid>

                    <Grid container className="base-button" xs={12} lg={5}>

                        <Grid item className="base-button-icon" xs={2} lg={2}>
                            <img className="button-icon" src={download}/>

                        </Grid>
                        <Grid item className="base-button-texto" xs={10} lg={10}>

                            <a href={PadroesReferencia} className="button-apoio-title" target="_blank">PARÃMETROS DE REFERÊNCIA</a>
                        </Grid>

                    </Grid>
                </Grid>




            </Grid>


        );
    }
}