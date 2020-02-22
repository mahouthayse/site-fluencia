import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import Flue from "../../../Assets/Home/flue.png";
import Insta1 from "../../../Assets/Home/insta1.jpg";
import Insta2 from "../../../Assets/Home/insta2.jpg";
import Insta3 from "../../../Assets/Home/insta3.png";
import Insta4 from "../../../Assets/Home/insta4.jpg";



export default class Instagram extends Component{

    render(){

        return(
            <Grid container className="instagram-page-wrapper" sm={12} lg={12}>
                <span className="instagram-title"> Siga @fluenciacorporal no insta :)</span>
                    <Grid item className="instagram-images" xs={12} lg={12} md={8}>

                        <a href="https://www.instagram.com/fluenciacorporal/">
                            <img className="insta-image" src={Insta1}/>
                        </a>

                        <a href="https://www.instagram.com/fluenciacorporal/">
                            <img className="insta-image" src={Insta2}/>
                        </a>

                        <a href="https://www.instagram.com/fluenciacorporal/">
                            <img className="insta-image" src={Insta3}/>
                        </a>

                        <a href="https://www.instagram.com/fluenciacorporal/">
                            <img className="insta-image" src={Insta4}/>
                        </a>

                    </Grid>

            </Grid>
        );
    }
}


