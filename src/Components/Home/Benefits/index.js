import React, { Component } from "react";
import {Grid, Hidden, Divider} from '@material-ui/core';
import "./style.scss";
import Flue from "../../../Assets/Home/flue.png";
import {Link} from "react-router-dom";
import Image1 from "../../../Assets/Home/img1.jpg";
import Image2 from "../../../Assets/Home/img2.jpg";
import Image3 from "../../../Assets/Home/img3.png";
import Image4 from "../../../Assets/Home/img4.jpg";


export default class Benefits extends Component{

    render(){

        return(
            <Grid container className="benefits-page-wrapper" sm={12} lg={12}>
                <div className="wave-container-benefits">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="wave-path-benefits" d="M0,288L60,250.7C120,213,240,139,360,117.3C480,96,600,128,720,160C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">

                        </path>
                    </svg>
                </div>

                <Grid container className="benefits-page-color" sm={12} lg={12}>

                    <Grid item className="benefits-title-card" xs={12} lg={6} md={6}>
                        <span className="benefits-page-title">Veja algumas das inúmeras possibilidades
                            que a percepção de fertilidade pode te proporcionar</span>
                    </Grid>

                    <Grid container className="benefits-content" xs={12} lg={12}>


                        <Hidden only={['sm', 'xs']}>

                            <Grid item className="benefits-card" xs={12} lg={2} md={2}>
                                <img className="benefits-image" src={Image1}/>
                                <span className="benefits-title"> Faça as pazes com seu ciclo menstrual</span>
                                <span className="benefits-text"> Aprenda sobre o funcionamento do seu ciclo, descubra suas potencialidades e empodere-se do seu próprio corpo </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item className="benefits-card" xs={12} lg={2} md={2}>
                                <img className="benefits-image" src={Image2}/>
                                <span className="benefits-title"> Diga adeus aos hormônios sintéticos</span>
                                <span className="benefits-text"> Entenda como anticoncepcionais hormonais afetam seu corpo e como deixar de usá-los com segurança </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item className="benefits-card" xs={12} lg={2} md={2}>
                                <img className="benefits-image" src={Image3}/>
                                <span className="benefits-title"> Contracepção eficaz sem efeitos colaterais</span>
                                <span className="benefits-text"> Aprenda a identificar seu período fértil, use um método com eficácia comprovada e fique segura </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item className="benefits-card" xs={12} lg={2} md={2}>
                                <img className="benefits-image" src={Image4}/>
                                <span className="benefits-title"> Engravide naturalmente</span>
                                <span className="benefits-text"> Monitore sua saúde reprodutiva, identifique possíveis problemas de fertilidade e aumente suas chances de concepção </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </Grid>
                        </Hidden>


                        <Hidden only={['md', 'xl', 'lg']}>

                            <Grid item className="benefits-card" xs={12} lg={2} md={2}>
                                <img className="benefits-image" src={Image1}/>
                                <span className="benefits-title"> Faça as pazes com seu ciclo menstrual</span>
                                <span className="benefits-text"> Aprenda sobre o funcionamento do seu ciclo, descubra suas potencialidades e empodere-se do seu próprio corpo </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </Grid>

                            <Divider orientation="horizontal" flexItem />

                            <Grid item className="benefits-card" xs={12} lg={2} md={2}>
                                <img className="benefits-image" src={Image2}/>
                                <span className="benefits-title"> Diga adeus aos hormônios sintéticos</span>
                                <span className="benefits-text"> Entenda como anticoncepcionais hormonais afetam seu corpo e como deixar de usá-los com segurança </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item className="benefits-card" xs={12} lg={2} md={2}>
                                <img className="benefits-image" src={Image3}/>
                                <span className="benefits-title"> Contracepção eficaz sem efeitos colaterais</span>
                                <span className="benefits-text"> Aprenda a identificar seu período  fértil, use um método com eficácia comprovada e fique segura </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item className="benefits-card" xs={12} lg={2} md={2}>
                                <img className="benefits-image" src={Image4}/>
                                <span className="benefits-title"> Engravide naturalmente</span>
                                <span className="benefits-text"> Monitore sua saúde reprodutiva, identifique possíveis problemas de fertilidade e aumente suas chances de concepção </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </Grid>

                        </Hidden>


                    </Grid>
                </Grid>
            </Grid>
        );
    }
}