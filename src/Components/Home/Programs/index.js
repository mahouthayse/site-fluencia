import React, { Component } from "react";
import {Grid, Hidden} from '@material-ui/core';
import "./style.scss";
import Mail from "../../../Assets/Home/mail.png";
import Individual from "../../../Assets/Home/imgIndividual.png";
import Grupo from "../../../Assets/Home/imgGrupo.png";
import {Link} from "react-router-dom";


export default class Programs extends Component{

    render(){

        return(
            <Grid container className="programs-page-wrapper" sm={12} lg={12}>


                    <Grid container className="info-content" xs={12} lg={9} md={9}>

                        <Hidden only={['md', 'lg', 'xl']}>
                            <Grid item className="info-image-wrapper" xs={12} lg={6} md={4}>
                                <img className="program-image" src={Individual}/>
                            </Grid>

                            <Grid item className="info-text-wrapper" xs={12} lg={6} md={8}>
                                <span className="info-title"> Atendimento Individual</span>
                                <span className="info-text"> Venha aprender o método de percepção de fertilidade de
                                    forma totalmente personalizada às suas necessidades e desejos.</span>

                                <span className="info-text"> No atendimento individual, teremos várias sessões para
                                    discutir todas as suas dúvidas e, assim, garantir o uso perfeito
                                    do método. E você ainda recebe uma série de materiais de apoio para seus estudos!</span>

                                {/*<Link to="/curso-online" className="info-link" >Conheça agora</Link>*/}

                            </Grid>

                        </Hidden>

                        <Hidden only={['sm', 'xs']}>
                            <Grid item className="info-text-wrapper" xs={12} lg={6} md={8}>
                                <span className="info-title"> Atendimento Individual</span>
                                <span className="info-text"> Venha aprender o método de percepção de fertilidade de
                                    forma totalmente personalizada às suas necessidades e desejos.</span>

                                <span className="info-text"> No atendimento individual, teremos várias sessões para
                                    discutir todas as suas dúvidas e, assim, garantir o uso perfeito
                                    do método. E você ainda recebe uma série de materiais de apoio para seus estudos!</span>

                                {/*<Link to="/" className="info-link" >Conheça agora</Link>*/}

                            </Grid>

                            <Grid item className="info-image-wrapper" xs={12} lg={6} md={4}>
                                <img className="program-image" src={Individual}/>
                            </Grid>
                        </Hidden>


                    </Grid>




                    <Grid container className="info-content" xs={12} lg={9} md={9}>

                        <Hidden only={['md', 'lg', 'xl']}>
                            <Grid item className="info-image-wrapper" xs={12} lg={6} md={4}>
                                <img className="program-image" src={Grupo}/>
                            </Grid>

                            <Grid item className="info-text-wrapper" xs={12} lg={6} md={8}>
                                <span className="info-title"> Atendimento em grupo</span>
                                <span className="info-text"> Com aulas teóricas e sessões semanais em pequenos grupos,
                                    o atendimento em grupo é a forma perfeita para você aprender percepção de
                                    fertilidade com uma comunidade de menstruantes que estão trilhando este mesmo
                                    caminho. Aqui você vai aprender a fazer uso perfeito do método em um espaço seguro
                                    e acolhedor.</span>

                                {/*<Link to="/curso-online" className="info-link" >Conheça agora</Link>*/}

                            </Grid>

                        </Hidden>

                        <Hidden only={['sm', 'xs']}>
                            <Grid item className="info-text-wrapper" xs={12} lg={6} md={8}>
                                <span className="info-title"> Atendimento em grupo</span>
                                <span className="info-text"> Com aulas teóricas e sessões semanais em pequenos grupos,
                                    o atendimento em grupo é a forma perfeita para você aprender percepção de
                                    fertilidade com uma comunidade de menstruantes que estão trilhando este mesmo
                                    caminho. Aqui você vai aprender a fazer uso perfeito do método em um espaço seguro
                                    e acolhedor.</span>

                                {/*<Link to="/" className="info-link" >Conheça agora</Link>*/}

                            </Grid>

                            <Grid item className="info-image-wrapper" xs={12} lg={6} md={4}>
                                <img className="program-image" src={Grupo}/>
                            </Grid>
                        </Hidden>


                    </Grid>


                </Grid>
        );
    }
}