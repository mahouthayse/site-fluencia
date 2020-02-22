import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Carol from "../../../Assets/Home/carol.png";

export default class Presentation extends Component{

    render(){

        return(
            <Grid container className="presentation-page-wrapper" sm={12} lg={12}>
                <div className="wave-container">
                    <svg className="wave-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="wave-path-presentation" d="M0,64L80,101.3C160,139,320,213,480,224C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">

                        </path>
                    </svg>
                </div>

                <Grid container className="presentation-page-color" sm={12} lg={12}>


                    <Grid container className="presentation-content" xs={12} lg={9} md={9}>

                        <Grid item className="presentation-image-wrapper" xs={12} lg={4} md={4}>
                            <img className="presentation-image" src={Carol}/>
                        </Grid>

                        <Grid container className="presentation-text-wrapper" xs={12} lg={8} md={8}>
                            <span className="presentation-title"> Olá menstruante!</span>
                            <span className="presentation-text">Eu sou a Carol Fischmann, idealizadora do projeto Fluência
                                Corporal. Sou instrutora de percepção de fertilidade do método Justisse e quero ajudar você
                                a entender seu próprio corpo, redescobrir o seu ciclo menstrual e reconhecer seu período
                                fértil com base em evidências científicas e conhecimentos tradicionais.</span>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        );
    }
}