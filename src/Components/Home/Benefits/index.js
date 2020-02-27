import React, { Component } from "react";
import {Grid, Hidden, Divider} from '@material-ui/core';
import "./style.scss";
import {Link} from "react-router-dom";
import Image1 from "../../../Assets/Home/img1.png";
import Image2 from "../../../Assets/Home/img2.png";
import Image3 from "../../../Assets/Home/img3.png";
import Image4 from "../../../Assets/Home/img4.png";



export default class Benefits extends Component{

    render(){

        return(
            <Grid container className="benefits-page-wrapper" sm={12} lg={12}>

                <Grid container className="benefits-page-color" sm={12} lg={12}>

                    <Grid item className="benefits-title-card" xs={12} lg={6} md={6}>
                        <span className="benefits-page-title">Veja algumas das inúmeras possibilidades
                            que a percepção de fertilidade pode te proporcionar</span>
                    </Grid>

                    <Grid container className="benefits-content" xs={12} lg={10}>

                        <Hidden only={['sm', 'xs']}>

                            <div className="benefits-card">
                                <img className="benefits-image" src={Image1}/>
                                <span className="benefits-title"> Faça as pazes com seu ciclo menstrual</span>
                                <span className="benefits-text"> Aprenda sobre o funcionamento do seu ciclo, descubra suas potencialidades e empodere-se do seu próprio corpo </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </div>


                            <div className="benefits-card">
                                <img className="benefits-image" src={Image2}/>
                                <span className="benefits-title"> Diga adeus aos hormônios sintéticos</span>
                                <span className="benefits-text"> Entenda como anticoncepcionais hormonais afetam seu corpo e como deixar de usá-los com segurança </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </div>


                            <div className="benefits-card">
                                <img className="benefits-image" src={Image3}/>
                                <span className="benefits-title"> Contracepção eficaz sem efeitos colaterais</span>
                                <span className="benefits-text"> Entenda como seu ciclo funciona e como deixar de usar
                                    anticoncepcionais hormonais com segurança e conforto </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </div>


                            <div className="benefits-card">
                                <img className="benefits-image" src={Image4}/>
                                <span className="benefits-title-width"> Engravide naturalmente</span>
                                <span className="benefits-text"> Identifique seus dias férteis com precisão, monitore
                                    sua saúde reprodutiva e aumente suas chances de concepção </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </div>
                        </Hidden>

                        </Grid>


                        <Hidden only={['md', 'xl', 'lg']}>

                            <div className="benefits-card">
                                <img className="benefits-image" src={Image1}/>
                                <span className="benefits-title"> Faça as pazes com seu ciclo menstrual</span>
                                <span className="benefits-text"> Aprenda sobre o funcionamento do seu ciclo, descubra suas potencialidades e empodere-se do seu próprio corpo </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </div>


                            <div className="benefits-card">
                                <img className="benefits-image" src={Image2}/>
                                <span className="benefits-title"> Diga adeus aos hormônios sintéticos</span>
                                <span className="benefits-text"> Entenda como anticoncepcionais hormonais afetam seu corpo e como deixar de usá-los com segurança </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </div>


                            <div className="benefits-card">
                                <img className="benefits-image" src={Image3}/>
                                <span className="benefits-title"> Contracepção eficaz sem efeitos colaterais</span>
                                <span className="benefits-text"> Entenda como seu ciclo funciona e como deixar de usar
                                    anticoncepcionais hormonais com segurança e conforto </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </div>


                            <div className="benefits-card">
                                <img className="benefits-image" src={Image4}/>
                                <span className="benefits-title"> Engravide naturalmente</span>
                                <span className="benefits-text"> Identifique seus dias férteis com precisão, monitore
                                    sua saúde reprodutiva e aumente suas chances de concepção </span>
                                <Link to="/" className="benefits-link" >Saiba mais</Link>
                            </div>

                        </Hidden>


                    </Grid>
                </Grid>
        );
    }
}