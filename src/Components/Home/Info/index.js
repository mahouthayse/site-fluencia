import React, { Component } from "react";
import {Grid, Hidden} from '@material-ui/core';
import "./style.scss";
import Mail from "../../../Assets/Home/mail.png";
import Flue from "../../../Assets/Home/flue.png";
import {Link} from "react-router-dom";


export default class Info extends Component{

    render(){

        return(
            <Grid container className="info-page-wrapper" sm={12} lg={12}>
                <div className="wave-container">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path className="wave-path" d="M-7.62,127.78 C209.08,173.19 381.77,34.03 500.27,82.39 L500.27,201.80 L-20.03,251.14 Z"></path>
                    </svg>
                </div>

                <Grid container className="info-page-color" sm={12} lg={12}>

                <Grid container className="info-content" xs={12} lg={9} md={9}>

                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid item className="info-image-wrapper" xs={12} lg={4} md={4}>
                            <img className="info-image" src={Flue}/>
                        </Grid>

                        <Grid item className="info-text-wrapper" xs={12} lg={8} md={8}>
                            <span className="info-title"> Curso de percepção de fertilidade</span>
                            <span className="info-text"> Com aulas teóricas e conteúdos práticos, nosso curso de percepção de
                            fertilidade é o primeiro e mais completo material do Brasil sobre este método maravilhoso.
                            Compilamos tudo com o maior carinho para que você possa atingir o tão sonhado uso perfeito! </span>

                            <span className="info-text"> Temos uma versão 100% online para quem gosta de aprender no seu
                            próprio tempo. Também oferecemos atendimentos em grupo e individuais para quem desejar se
                            aprofundar ainda mais!</span>

                            <Link to="/" className="info-link" >Conheça agora</Link>

                        </Grid>

                    </Hidden>

                    <Hidden only={['sm', 'xs']}>
                    <Grid item className="info-text-wrapper" xs={12} lg={8} md={8}>
                        <span className="info-title"> Curso de percepção de fertilidade</span>
                        <span className="info-text"> Com aulas teóricas e conteúdos práticos, nosso curso de percepção de
                            fertilidade é o primeiro e mais completo material do Brasil sobre este método maravilhoso.
                            Compilamos tudo com o maior carinho para que você possa atingir o tão sonhado uso perfeito! </span>

                        <span className="info-text"> Temos uma versão 100% online para quem gosta de aprender no seu
                            próprio tempo. Também oferecemos atendimentos em grupo e individuais para quem desejar se
                            aprofundar ainda mais!</span>

                        <Link to="/" className="info-link" >Conheça agora</Link>

                    </Grid>

                    <Grid item className="info-image-wrapper" xs={12} lg={4} md={4}>
                        <img className="info-image" src={Flue}/>
                    </Grid>
                    </Hidden>


                </Grid>
                </Grid>
            </Grid>
        );
    }
}