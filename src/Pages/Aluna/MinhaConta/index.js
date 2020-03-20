import React, {Component} from "react";
import {Divider, Grid} from "@material-ui/core";
import "./style.scss"


export default class MinhaConta extends Component{
    render(){
        return(

            <Grid container className="minha-conta" xs={12} sm={12} md={12} lg={12}>
                <h1 className="titulo-primario"> MINHA CONTA</h1>
                <Divider />

                <Grid container className="minha-conta-container" xs={12} md={12} lg={10}>

                    <Grid item className="minha-conta-card" xs={12} md={6} lg={5}>

                        <h1 className="titulo-primario"> Dados pessoais</h1>

                        <span className="minha-conta-text"> Para editar seus dados, clique no símbolo de lápis e
                            depois clique em salvar.</span>

                        <Grid item className="minha-conta-column" xs={12} lg={12}>

                        <label htmlFor="minhacontaNome" className="minha-conta-label" >Nome completo:</label>
                        <input className="minha-conta-input" id="minhacontaNome" type="text" placeholder="Inserir nome e sobrenome"/>

                        <label htmlFor="minhacontaEmail" className="minha-conta-label" >Email:</label>
                        <input className="minha-conta-input" id="minhacontaEmail" type="text" placeholder="email@email.com"/>

                        <label htmlFor="minhacontaTelefone" className="minha-conta-label" >Telefone:</label>
                        <input className="minha-conta-input" id="minhacontaTelefone" type="text" placeholder="(00) 0000-0000"/>

                        </Grid>

                        <Grid item className="form-footer" xs={12} lg={12}>

                            <button className="button-primary">Salvar</button>
                        </Grid>

                    </Grid>


                    <Grid item className="minha-conta-card" xs={12} md={6} lg={5}>

                        <h1 className="titulo-primario"> Senha de acesso</h1>

                        <span className="minha-conta-text"> Para alterar sua senha, confirme sua senha atual e insira uma nova.</span>

                        <Grid item className="minha-conta-column" xs={12} lg={12}>

                            <label htmlFor="minhaContaAntiga" className="minha-conta-label" >Senha atual:</label>
                            <input className="minha-conta-input" id="minhaContaAntiga" type="text" placeholder="******"/>

                            <label htmlFor="minhaContaSenhaNova" className="minha-conta-label" >Nova senha:</label>
                            <input className="minha-conta-input" id="minhaContaSenhaNova" type="text" placeholder="******"/>

                            <label htmlFor="minhaContaSenhaNovaRepetir" className="minha-conta-label" >Repetir nova senha:</label>
                            <input className="minha-conta-input" id="minhaContaSenhaNovaRepetir" type="text" placeholder="******"/>

                        </Grid>

                        <Grid item className="form-footer" xs={12} lg={12}>

                            <button className="button-primary">Salvar Senha</button>
                        </Grid>

                    </Grid>




                </Grid>





            </Grid>


        );
    }
}