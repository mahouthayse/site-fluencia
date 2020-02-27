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
                        <path className="wave-path-presentation" d="M0,38V641.5c414.5,99,617-73.5,791.5-73.5,239,0,237,89.5,648,73.5v-582c-163,53-323.5,59.58-475,41C732,72,422-65.48,0,38Z">

                        </path>
                    </svg>
                </div>

                <Grid container className="presentation-page-color" sm={12} lg={12}>


                    <Grid container className="presentation-content" xs={12} lg={9} md={9}>

                        <Grid item className="presentation-image-wrapper" xs={12} lg={5} md={4}>
                            <img className="presentation-image" src={Carol}/>
                        </Grid>

                        <Grid container className="presentation-text-wrapper" xs={12} lg={7} md={8}>
                            <span className="presentation-title"> Olá menstruante!</span>
                            <span className="presentation-text">Aqui na Fluência Corporal, você finalmente vai entender
                                seu próprio corpo! Quero te ajudar a entender a importância de ovular, como reconhecer
                                seu período fértil com precisão e como se reconciliar com sua ciclicidade. Tudo baseado
                                nas melhores evidências científicas e conhecimentos tradicionais.</span>
                            <span className="presentation-text">Então pegue uma xícara de chá, um pedaço de bolo e chega
                                junto que a conversa vai ser boa!</span>
                        </Grid>

                    </Grid>
                </Grid>

                <div className="wave-container-bottom">
                    <svg className="wave-container-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="wave-path-presentation" d="M0,555v86.5c414.5,99,617-73.5,791.5-73.5,239,0,237,89.5,648,73.5V559Z" transform="translate(0 -555)">

                        </path>
                    </svg>
                </div>

            </Grid>
        );
    }
}