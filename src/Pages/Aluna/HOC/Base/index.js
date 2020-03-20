import React from "react";
import {Grid, Hidden} from "@material-ui/core";

import "./style.scss";

import Menu from "../../../../Components/Aluna/Menu";
import MenuMobile from "../../../../Components/Aluna/MenuMobile";


export default class Base extends React.Component {
    render(){

        return(
            <Grid container className="base-dashboard" xs={12} lg={12}>

                <Hidden smDown>
                <Grid item className="menu-dashboard" style={{width: '5%'}}>
                    <Menu history={this.props.history}/>
                </Grid>
                </Hidden>

                <Hidden smUp>
                    <Grid item className="menu-dashboard" md={2} lg={2}>
                        <MenuMobile/>
                    </Grid>
                </Hidden>

                <Grid item className="main-dashboard" xs={12} sm={12} md={11} lg={11}>
                    {this.props.children}
                </Grid>

            </Grid>
        );
    }


}