import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import "./style.scss";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/styles.css';




export default class Depoimentos extends Component{

    render(){

        return(
            <Grid container className="atendimento-depoimentos" xs={12} md={12}>
                <span className="titulo-primario">Depoimento de quem já fez</span>
                    <AwesomeSlider>

                    <Grid item className="depoimentos-conteudo" xs={12} md={12}>
                        <span className="texto-primario" style={{textAlign: 'center'}}>“Fazer o curso abriu muito a minha mente. Entender os sinais
                            do corpo, ter segurança pra saber o que está acontecendo com ele, isso foi e é maravilhoso
                            demais, me sinto completamente dona de mim”</span>

                        <span className="texto-primario" style={{textAlign: 'center', color: '#EA7973'}}> Caroline Zitto</span>
                    </Grid>

                        <Grid item className="depoimentos-conteudo" xs={12} md={12}>
                        <span className="texto-primario" style={{textAlign: 'center'}}>“Havia lido o livro taking charge
                            of your fertility e decidi começar a usar o método por conta própria. Quanta inocência! Já
                            no primeiro gráfico me senti perdida e sem rumo, então decidi pedir sua ajuda e fazer o curso
                            online. Fizemos 4 encontros, e hoje sou outra pessoa! Consigo interpretar todo o gráfico,
                            conhecer meu ciclo e ter muita autonomia sobre minha fertilidade e meu corpo!”</span>

                            <span className="texto-primario" style={{textAlign: 'center', color: '#EA7973'}}> Débora Orlando Tullio</span>
                        </Grid>


                    </AwesomeSlider>


            </Grid>
        );
    }
}