import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";




export default class TimelineCurso extends Component{

    render(){

        return(
            <Grid container className="timeline-curso-wrapper" sm={12} lg={12} md={12}>

                <ul className="timeline">
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span
                                    className="flag">Parte 1 - O funcionamento da fertilidade feminina e masculina</span>

                            </div>
                            <div className="desc">
                                <span className="text-desc"> Aqui você vai aprender um pouco da história da percepção de fertilidade; como funciona a fertilidade masculina; anatomia genital interna feminina; funcionamento do ciclo menstrual; muco cervical e fertilização</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="flag">Parte 2 - Como usar o método</span>

                            </div>
                            <div className="desc">
                                <span className="text-desc">Nesse tópico explicaremos o uso do gráfico; como fazer a observação e interpretação do muco, temperatura basal, colo do útero, além de outras observações importantes</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Parte 3 - O método no seu cotidiano</span>
                            </div>
                            <div className="desc">
                                <span className="text-desc">Estudaremos como funciona o método sintotermal na vida real; como diferenciar muco de outros fluidos; uso do método para contracepção e concepção</span>
                            </div>
                        </div>
                    </li>


                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="flag">Parte 4 - Aulas bônus</span>
                            </div>
                            <div className="desc">
                                <span className="text-desc">Também contaremos com aulas bônus de outras  profissionais incríveis, que vão agregar muito no seu conhecimento e empoderamento sobre sua saúde sexual e reprodutiva</span>

                            </div>
                        </div>
                    </li>

                </ul>

            </Grid>
        );
    }
}