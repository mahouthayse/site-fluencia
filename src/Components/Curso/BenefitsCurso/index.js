import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import BenefitsImage from "../../../Assets/Curso/benefitsImage.png";



export default class BenefitsCurso extends Component{

    render(){

        return(
            <Grid container className="benefits-curso-wrapper" sm={12} lg={12} md={12}>

                <Grid container className="benefits-curso-content" sm={12} lg={12} md={12}>

                    <Grid item className="benefits-image-wrapper" sm={12} lg={6}>
                        <img className="curso-benefits-image" src={BenefitsImage}/>
                    </Grid>

                    <Grid item className="benefits-text-wrapper" sm={12} lg={6}>

                        <Grid container className="text-wrapper" sm={12} lg={9}>
                        <span className="benefits-curso-title"> Quais são as vantagens de usar percepção de fertilidade?</span>

                            <span className="benefits-curso-text">Eficácia contraceptiva de 99,6%</span>

                            <span className="benefits-curso-text">Pode ser usado para facilitar a concepção e identificar
                                possíveis problemas de fertilidade</span>

                            <span className="benefits-curso-text">Perspectiva feminista: qualquer menstruante pode usar,
                                independente de sua identidade de gênero,orientação sexual, quantidade de parceires e
                                intenção reprodutiva</span>

                            <span className="benefits-curso-text">Entende a percepção menstrual como uma forma de ganhar
                                fluência corporal</span>

                            <span className="benefits-curso-text">Entende o ciclo menstrual como um sinal vital</span>

                            <span className="benefits-curso-text">Tem uma visão holística do ser humano e de seus
                                processos de saúde e doença</span>


                        </Grid>



                    </Grid>

                </Grid>


            </Grid>
        );
    }
}