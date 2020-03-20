import React from 'react';
import {Grid} from "@material-ui/core";
import gif from "../../../Assets/Aluna/images/previk.gif";
import "./style.scss";

export default function Development(){
    return(
        <Grid container justify="center" alignItems="center" xs={12} lg={12} spacing={2} style={{height: '100%', padding: '10px 0'}}>
            <h1 className="titulo-primario development-text">Devido a alguns problemas técnicos, a área da aluna será
                liberada integralmente no dia 21/03. Nossa equipe está trabalhando ao máximo para resolver.</h1>
            Agradecemos desde já o carinho!
            <br/>
            <img src={gif} cs={12} sm={12} md={8} lg={8} style={{height: '300px'}}/>
        </Grid>
    );
}
