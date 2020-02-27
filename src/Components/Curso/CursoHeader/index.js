import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import HeaderCurso from "../../../Assets/Curso/headerCurso.png";


export default class CursoHeader extends Component{

    render(){

        return(
            <Grid container className="curso-header-wrapper" sm={12} lg={12} md={12}>

                <Grid container className="curso-header-content" sm={12} lg={12} md={12}>

                    <Grid item className="curso-header-text" sm={12} md={7} lg={6}>
                        <h1 className="curso-header-title"> Curso online </h1>
                        <h2 className="curso-header-subtitle">Aprenda o método de percepção de fertilidade no seu próprio ritmo </h2>
                    </Grid>

                    <Grid item className="curso-header-image" sm={12} md={5} lg={6}>
                        <img className="curso-header-img" src={HeaderCurso}/>
                    </Grid>


                </Grid>

            </Grid>
        );
    }
}