import React, { Component } from "react";
import {Grid, Hidden} from '@material-ui/core';
import "./style.scss";
import Mail from "../../../Assets/Home/mail.png";
import Flue from "../../../Assets/Home/imgWork.png";
import {Link} from "react-router-dom";


export default class Info extends Component{

    render(){

        return(
            <Grid container className="info-page-wrapper" sm={12} lg={12}>
                <div className="wave-container">
                    <svg className="wave-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="wave-path-presentation" d="M1439.5,620.5H0v-561c163,53,323.5,59.58,475,41C707.5,72,1017.5-65.48,1439.5,38Z">

                        </path>
                    </svg>
                </div>

                <Grid container className="info-page-color" sm={12} lg={12}>

                <Grid container className="info-content" xs={12} lg={9} md={9}>

                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid item className="info-image-wrapper" xs={12} lg={6} md={4}>
                            <img className="info-image" src={Flue}/>
                        </Grid>

                        <Grid item className="info-text-wrapper" xs={12} lg={6} md={8}>
                            <span className="info-title"> Curso de percepção de fertilidade</span>
                            <span className="info-text"> Com aulas teóricas e conteúdos práticos, nosso curso de
                                percepção de fertilidade é o primeiro e mais completo material do Brasil sobre este
                                método maravilhoso. Compilamos tudo com o maior carinho para que você possa aprender
                                no seu próprio tempo.</span>

                            <span className="info-text"> O curso é ideal para quem gosta de aprender sozinha no seu
                                próprio tempo e está começando a se interessar pelo tema.</span>

                            {/*<Link to="/curso-online" className="info-link" >Conheça agora</Link>*/}

                        </Grid>

                    </Hidden>

                    <Hidden only={['sm', 'xs']}>
                    <Grid item className="info-text-wrapper" xs={12} lg={6} md={8}>
                        <span className="info-title"> Curso de percepção de fertilidade</span>
                        <span className="info-text"> Com aulas teóricas e conteúdos práticos, nosso curso de
                                percepção de fertilidade é o primeiro e mais completo material do Brasil sobre este
                                método maravilhoso. Compilamos tudo com o maior carinho para que você possa aprender
                                no seu próprio tempo.</span>

                        <span className="info-text"> O curso é ideal para quem gosta de aprender sozinha no seu
                                próprio tempo e está começando a se interessar pelo tema.</span>

                        <Link to="/" className="info-link" >Conheça agora</Link>

                    </Grid>

                    <Grid item className="info-image-wrapper" xs={12} lg={6} md={4}>
                        <img className="info-image" src={Flue}/>
                    </Grid>
                    </Hidden>


                </Grid>
                </Grid>
            </Grid>
        );
    }
}