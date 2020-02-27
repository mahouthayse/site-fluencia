import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import InfoCurso1 from "../../../Assets/Curso/infoImage1.png";
import InfoCurso2 from "../../../Assets/Curso/infoImage2.png";
import InfoCurso3 from "../../../Assets/Curso/infoImage3.png";



export default class MetodologiaCurso extends Component{

    render(){

        return(
            <Grid container className="metodologia-wrapper" xs={12} lg={12} md={12}>

                <Grid container className="metodologia-content" xs={12} lg={8} md={8}>

                    <span className="metodologia-text">Atenção! Nesta modalidade não haverá um acompanhamento tão próximo
                        para que a gente possa te ajudar a analisar os dados coletados com as suas observações.
                        Isso significa que a eficácia contraceptiva do método pode ficar um pouco comprometida e caso
                        você tenha alguma questão muito específica para tratar, como por exemplo dificuldade para
                        engravidar, SOP, endometriose, entre outros problemas que exigem um acompanhamento mais de
                        perto, recomendamos fazer os atendimentos em grupo ou o individual.</span>

                </Grid>


            </Grid>
        );
    }
}