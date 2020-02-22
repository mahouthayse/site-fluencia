import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Mail from "../../../Assets/Home/mail.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";



export default class Newsletter extends Component{

    render(){

        return(
            <Grid container className="newsletter-page-wrapper" sm={12} lg={12}>

                <Grid container className="newsletter-content" xs={12} lg={9} md={9}>

                    <Grid item className="newsletter-image" xs={12} lg={6} md={6}>
                        <img className="newsletter-image" src={Mail}/>
                    </Grid>

                    <Grid item className="newsletter-form" xs={12} lg={6} md={6}>
                        <span className="newsletter-text"> Assine nossa newsletter e acompanhe nossos conteúdos em
                            primeira mão!</span>

                            <form action="https://paginas.rocks/Pages/Index/343790" method="post" >
                                <input id="id" name="id" type="hidden" value="343790" />
                                <input id="pid" name="pid" type="hidden" value="13011807" />
                                <input id="list_id" name="list_id" type="hidden" value="343790" />
                                <input id="provider" name="provider" type="hidden" value="leadlovers" />
                                <input class="newsletter-input" id="email" name="email" placeholder="Informe o seu email" type="text" />
                                <button class="newsletter-button"  type="submit"><FontAwesomeIcon icon={faAngleRight} size="2x" color="white"/></button>
                                <input type="hidden" id="source" name="source" value="" />
                            </form>

                    </Grid>
                </Grid>
            </Grid>
        );
    }
}