import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import group98 from "../../../Assets/Curso/group98.svg";



export default class InfoCurso extends Component{

    render(){

        return(
            <Grid container className="info-curso-wrapper" sm={12} lg={12} md={12}>

                <Grid container className="info-curso-content" sm={12} lg={9} md={12}>

                    <Grid item className="info-card" xs={12} md={3}>

                        <div className="card-image-1">
                        </div>


                        <span className="info-card-title"> Introdução ao método Justisse</span>
                        <span className="info-card-text"> Conheça e comece a se familiarizar com o método de percepção
                            de fertilidade Justisse</span>

                        <span className="info-card-title"> 100% online</span>
                        <span className="info-card-text"> No curso online você aprende sozinha e no seu ritmo a partir
                            de videoaulas, um ebook e diversos materiais complementares</span>
                    </Grid>

                    <Grid item className="info-card" xs={12} md={3}>

                        <div className="card-image-2">

                        </div>

                        <span className="info-card-title"> Público-alvo</span>
                        <span className="info-card-text"> Para quem tem interesse no método e quer um empurrãozinho para
                            começar a estudar</span>

                        <span className="info-card-title"> Não existe pré-requisito!</span>
                        <span className="info-card-text"> O curso tem caráter introdutório e você vai aprender tudo o que
                            precisa para começar a aplicar o método por conta própria</span>
                    </Grid>

                    <Grid item className="info-card" xs={12} md={3}>
                        <div className="card-image-3">

                        </div>

                        <span className="info-card-text"> <b>Carol Fischmann</b> é antropóloga e tem formação como Instrutora
                            de Saúde Reprodutiva Holística no Justisse College, um curso de dois anos para formar instrutoras
                            de percepção de fertilidade. Fundadora do projeto Fluência Corporal, Carol atua como instrutura
                            desde 2017 e já ajudou dezenas de menstruantes.</span>
                    </Grid>

                </Grid>


            </Grid>
        );
    }
}