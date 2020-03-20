import React, {Component} from "react";
import {Grid, Divider, Hidden} from "@material-ui/core";
import "./style.scss"
import ImgHeader from "../../../Assets/Aluna/images/headerInicial.png";
import Dev from '../../../Components/Aluna/Development';

export default class PaginaInicial extends Component{
    render(){
        return(
            // <Dev />
            <Grid container className="pagina-inicial" xs={12} sm={12} md={12} lg={12}>

                <img className="header-inicial" src={ImgHeader} style={{marginBottom: '50px'}}/>
                <h1 className="titulo-primario"> Olá! Seja bem-vinda ao Curso de Percepção de Fertilidade da
                    Fluência Corporal!</h1>
                <span className="texto-primario" style={{marginBottom: '50px'}}>Estamos muito contentes que você deu o primeiro passo para aprender
                    esse método lindo, o Justisse. Nessa página você terá as informações básicas de funcionamento do
                    curso e avisos que você precisa saber.</span>

                <h1 className="titulo-primario"> COMO VAI FUNCIONAR?</h1>
                <Divider />

                <Grid container className="pagina-inicial-row " xs={12} sm={12} md={12} lg={12}>

                    <Grid item className="pagina-inicial-column" xs={12} sm={12} md={6} lg={6}>
                    </Grid>
                    <Grid item className="pagina-inicial-column" xs={12} sm={12} md={6} lg={6}>
                        <ul className="pagina-inicial-lista">
                            <li><span className="texto-primario">Assista as partes 1 e 2 das videoaulas</span></li>
                            <li><span className="texto-primario">Faça download dos materiais de apoio</span></li>
                            <li><span className="texto-primario">Imprima os materiais e comece a fazer seu gráfico assim
                                que terminar a parte 2</span></li>
                            <li><span className="texto-primario">Baixe o zoom e marque sua primeira sessão de
                                acompanhamento para 2-3 semanas após terminar a parte 2</span></li>
                            <li><span className="texto-primario">Aprofunde seus conhecimentos com os materiais
                                complementares e contribua com nosso museu do muco</span></li>
                        </ul>
                    </Grid>

                    <Grid container className="pagina-inicial-row-color" xs={12} sm={12} md={12} lg={12}>
                    <Grid item className="pagina-inicial-column" xs={1} sm={1} md={1}  lg={1}>
                        <i className="fas fa-info-circle fa-3x"></i>
                    </Grid>

                        <Grid item className="pagina-inicial-column" xs={11} sm={11} md={11} lg={11}>
                            <span className="texto-secundario"><b>Atenção!</b> As partes 2, 3 e 4 das videaulas só serão
                                liberadas depois da assinatura do termo de responsabilidade, que você pode fazer agora
                                clicando aqui. Após a assinatura do termo, a liberação dos conteúdos acontece em até
                                3 dias úteis.</span>
                        </Grid>

                    </Grid>

                </Grid>

                <h1 className="titulo-primario"> AGENDAMENTO DAS SESSÕES</h1>
                <Divider/>
                <span className="texto-primario">Você ainda não agendou seu primeiro atendimento individual, clique aqui
                    e agende agora.</span>


            </Grid>


        );
    }
}