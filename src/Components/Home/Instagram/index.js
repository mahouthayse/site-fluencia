import React, { Component } from "react";
import {Grid, Hidden} from '@material-ui/core';
import "./style.scss";
import Flue from "../../../Assets/Home/flue.png";
import Insta1 from "../../../Assets/Home/insta1.jpg";
import Insta2 from "../../../Assets/Home/insta2.jpg";
import Insta3 from "../../../Assets/Home/insta3.png";
import Insta4 from "../../../Assets/Home/insta4.jpg";
import {Link} from "react-router-dom";



export default class Instagram extends Component{

    render(){

        return(
            <Grid container className="instagram-page-wrapper" xs={12} lg={12}>
                <span className="instagram-title"> Siga @fluenciacorporal no insta :)</span>

                <Hidden only={['sm', 'xs']}>

                    <Grid item className="instagram-images" xs={12} lg={9} md={8}>

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

                </Hidden>

                <Hidden only={['md', 'xl', 'lg']}>

                    <Grid item className="instagram-images" xs={12} lg={9} md={8}>

                        <a href="https://www.instagram.com/fluenciacorporal/">
                            <img className="insta-image" src={Insta1}/>
                        </a>

                        <a href="https://www.instagram.com/fluenciacorporal/">
                            <img className="insta-image" src={Insta2}/>
                        </a>
                    </Grid>

                    <Grid item className="instagram-images" xs={12} lg={9} md={8}>

                        <a href="https://www.instagram.com/fluenciacorporal/">
                            <img className="insta-image" src={Insta3}/>
                        </a>

                        <a href="https://www.instagram.com/fluenciacorporal/">
                            <img className="insta-image" src={Insta4}/>
                        </a>

                    </Grid>

                </Hidden>

            </Grid>
        );
    }
}


