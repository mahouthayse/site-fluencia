import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Certificado1 from "../../Assets/Footer/certificado1.png";
import Certificado2 from "../../Assets/Footer/certificado2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';




export default class Footer extends Component{

    render(){

        return(
            <Grid container className="footer-wrapper" xs={12} lg={12}>

                <Grid container className="footer-content" xs={12} md={12}  lg={10}>

                    <Grid item className="footer-column" xs={12} md={3} lg={3}>
                        <span className="footer-text"> Fluência Corporal Assessoria Ltda.</span>
                        <span className="footer-text"> CNPJ: 33693375/0001-69</span>
                    </Grid>

                    <Grid item className="footer-column-2" xs={12} md={3}lg={3}>
                        <span className="footer-text"> Certificados</span>

                        <Grid item className="footer-row" xs={12} lg={12}>
                            <img className="footer-image" src={Certificado1}/>
                            <img className="footer-image" src={Certificado2}/>
                        </Grid>
                    </Grid>

                    <Grid item className="footer-column" xs={12} md={3} lg={3}>
                        <Link to="/" className="footer-text"> Home</Link>
                        <Link to="/atendimento-individual" className="footer-text"> Atendimento Individual</Link>
                        {/*<span className="footer-text"> Blog</span>*/}
                        {/*<span className="footer-text"> Cursos</span>*/}
                        <a href="https://aluna.fluenciacorporal.com" className="footer-text"> Área da Aluna</a>
                    </Grid>

                    <Grid item className="footer-column" xs={12} md={3} lg={3}>
                        <span className="footer-text"> Redes sociais</span>
                        <FontAwesomeIcon icon={faInstagram} className="instagramIcon" size="2x" color="white"/>

                        <span className="footer-text"> Contato</span>
                        <span className="footer-text-regular"> contato@fluenciacorporal.com</span>
                    </Grid>


                </Grid>
            </Grid>
        );
    }
}