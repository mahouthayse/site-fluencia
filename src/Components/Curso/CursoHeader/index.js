import React, { Component } from "react";
import {Grid, Hidden} from '@material-ui/core';
import "./style.scss";
import HeaderCurso from "../../../Assets/Curso/headerCurso.png";
import Flue from "../../../Assets/Home/flue.png";
import {Link} from "react-router-dom";


export default class CursoHeader extends Component{

    render(){

        return(
            <Grid container className="curso-header-wrapper" sm={12} lg={12} md={12}>

                <Grid container className="curso-header-content" sm={12} lg={12} md={12}>

                    <Grid item className="curso-header-text" sm={12} md={6} lg={6}>
                        <span className="curso-header-title"> Curso online </span>
                        <span className="curso-header-subtitle">Aprenda o método de percepção de fertilidade no seu próprio ritmo </span>
                    </Grid>

                        <Grid item className="curso-header-image" sm={12} md={6} lg={6}>
                            <img className="curso-header-img" src={HeaderCurso}/>
                        </Grid>

                </Grid>

            </Grid>
        );
    }
}

