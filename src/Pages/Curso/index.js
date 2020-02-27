import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Footer from "../../Components/Footer";
import SimpleMenu from "../../Components/Menu";
import InfoCurso from "../../Components/Curso/InfoCurso";
import BenefitsCurso from "../../Components/Curso/BenefitsCurso";
import MetodologiaCurso from "../../Components/Curso/MetodologiaCurso";
import ProgramsCurso from "../../Components/Curso/ProgramsCurso";
import CursoHeader from "../../Components/Curso/CursoHeader";
import ValueCurso from "../../Components/Curso/ValueCurso";
import FeaturesCurso from "../../Components/Curso/FeaturesCurso";
import TimelineCurso from "../../Components/Curso/TimelineCurso";
import FAQCurso from "../../Components/Curso/FAQCurso";



export default class Curso extends Component{

    render(){

        return(
            <Grid container className="curso-page-wrapper" sm={12} lg={12} md={12}>
                <SimpleMenu/>
                <CursoHeader/>

                <Grid container className="curso-content" sm={12} lg={12} md={12}>

                <InfoCurso/>
                <BenefitsCurso/>
                <TimelineCurso/>
                <FeaturesCurso/>
                <ValueCurso/>
                <MetodologiaCurso/>
                <ProgramsCurso/>
                <FAQCurso/>

                </Grid>

                <Footer/>
            </Grid>
        );
    }
}