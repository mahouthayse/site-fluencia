import React, { Component } from "react";
import {Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid} from '@material-ui/core';
import "./style.scss";
import Footer from "../../Components/Footer";
import SimpleMenu from "../../Components/Menu";
import HeaderAtendimentoIndividual from "../../Components/AtendimentoIndividual/HeaderAtendimentoIndividual";
import InfoAtendimentoIndividual from "../../Components/AtendimentoIndividual/InfoAtendimentoIndividual";
import BenefitsCurso from "../../Components/Curso/BenefitsCurso";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faPlus} from "@fortawesome/free-solid-svg-icons";
import FeaturesIndividual from "../../Components/AtendimentoIndividual/FeaturesAtendimento";
import Depoimentos from "../../Components/AtendimentoIndividual/Depoimento";
import {Link} from 'react-router-dom'
import ValueCursoIndividual from "../../Components/AtendimentoIndividual/ValueCursoIndividual";

const produto = {
    title: "Atendimento individual",
    price: "1499"
}

export default class AtendimentoIndividual extends Component{

    render(){

        return(
            <Grid container className="atendimento-individual-container" xs={12} lg={12} md={12}>
                <SimpleMenu/>

                <HeaderAtendimentoIndividual/>


                <Grid container className="atendimento-individual-conteudo" xs={12} sm={12} lg={12} md={12}>

                    <InfoAtendimentoIndividual/>

                    <BenefitsCurso/>


                {/*    /!*TIMELINE *!/*/}



                    <Grid container className="atendimento-timeline-container" xs={12}  md={12}>

                        <Grid item className="atendimento-timeline-header" xs={12} md={12}>

                            <span className="titulo-primario"> Como vai funcionar?</span>

                        </Grid>

                        <Grid item className="timeline-content-wrapper" xs={12} md={12}>

                            <ul className="timeline">
                                <li>
                                    <div className="direction-r">
                                        <div className="flag-wrapper">
                                <span
                                    className="flag">Assista às videoaulas sobre o funcionamento da fertilidade e uso
                                    do método</span>

                                        </div>
                                        <div className="desc">
                                            <span className="text-desc"> Aqui você vai receber uma série de videos e
                                                materiais complementares para estudar sozinha antes dos atendimentos começarem</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="direction-l">
                                        <div className="flag-wrapper">
                                            <span className="flag">Comece a praticar!</span>

                                        </div>
                                        <div className="desc">
                                            <span className="text-desc">Assim que você terminar de assistir as
                                                videoaulas, já comece a fazer seus gráficos. É aqui que vão surgir as
                                                principais dúvidas</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="direction-r">
                                        <div className="flag-wrapper">
                                            <span className="flag">Participe dos atendimentos individuais</span>
                                        </div>
                                        <div className="desc">
                                            <span className="text-desc">Ao longo de 5 sessões de acompanhamento de 1
                                                hora cada, você terá a oportunidade de tirar todas as suas dúvidas e
                                                aprender com um atendimento individualizado e intimista</span>
                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className="direction-l">
                                        <div className="flag-wrapper">
                                            <span className="flag">Continue se aprofundando</span>
                                        </div>
                                        <div className="desc">
                                            <span className="text-desc">Você irá receber também um conjunto de videos e
                                                materiais complementares para estudar sozinha durante e depois de
                                                terminar os atendimentos</span>

                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </Grid>

                    </Grid>


                {/*    /!*INFORMAÇÕES SOBRE O ATENDIMENTO*!/*/}

                    <Grid container className="atendimento-sessoes-container" xs={12} lg={12} md={12}>

                    <Grid container className="atendimento-sessoes" xs={12} lg={6} md={8}>

                        <span className="titulo-primario">Como vão funcionar as sessões de atendimento?</span>

                    <span className="texto-primario"style={{textAlign: 'center'}}>Nas sessões de atendimento partiremos
                        do seu objetivo específico pelo qual procurou o método e adaptaremos as sessões e conteúdo
                        conforme sua necessidade. Analisaremos o que está acontecendo no seu gráfico e tiraremos todas
                        as as dúvidas que você tiver durante as observações, garantindo assim a máxima eficácia do
                        método de percepção de fertilidade.</span>

                    </Grid>

                    </Grid>


                <Depoimentos/>
                <FeaturesIndividual/>
            <ValueCursoIndividual/>


                <Grid container className="contato-atendimento" xs={12} md={12}>

                    <h1 className="titulo-primario ">Ainda não sabe se o atendimento individual é a melhor opção para
                        você?</h1>

                    <span className="texto-primario" style={{ textAlign: 'center'}}>Escreva pra gente e conta mais sobre você e suas dúvidas e
                        responderemos assim que possível! </span>

                    <Grid container className="contato-conteudo" xs={12} md={6}>

                    <input className="formulario-contato" id="nome" name="nome" placeholder="Nome*"
                           type="text"/>

                    <input className="formulario-contato" id="email" name="email" placeholder="Email*"
                           type="email"/>

                    <textarea id="mensagem" name="mensagem" className="formulario-contato-texto" rows="4" cols="50" placeholder="Mensagem">
                        </textarea>

                    <button className="formulario-botao" type="submit">Enviar</button>
                    </Grid>

                </Grid>



                {/*    /!*PROGRAMAS *!/*/}


                    <Grid container className="programs-wrapper" xs={12} lg={12} md={12}>

                        <Grid container className="programs-content" xs={12} lg={12} md={12}>

                            <span className="programs-title"> Conheça nossos outros programas</span>

                            <Grid container className="programs-card-wrapper" xs={12} lg={12} md={12}>

                                <Grid item className="programs-card" xs={12} md={4}>
                                    <span className="programs-card-title"> Curso Online</span>
                                    <span className="programs-card-text">Para quem tem interesse no método e quer um
                                        empurrãozinho para começar a estudar</span>
                                    <Link to="/curso" className="card-button">Quero conhecer</Link>
                                </Grid>


                                <Grid item className="programs-card" xs={12} md={4}>
                                    <span className="programs-card-title"> Atendimento em grupo</span>
                                    <span className="programs-card-text">Para quem quer a máxima eficácia do método e
                                        gosta de aprender trocando com outras pessoas</span>
                                    <button className="card-button">Quero conhecer</button>
                                </Grid>



                            </Grid>

                        </Grid>


                    </Grid>




                {/*    /!*FAQ CURSO INDIVIDUAL*!/*/}


                    <Grid container className="faq-wrapper" xs={12} md={12}>

                        <Grid container className="faq-content" xs={12} md={8}>

                            <div className="expansion-panel-faq">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                        aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu já pratico percepção de fertilidade há
                                            algum tempo. Vale a pena fazer o atendimento individual?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text">
                                            Sim! Se você já estudou outro método ou tem uma prática intuitiva da sua
                                            fertilidade, você provavelmente terá mais facilidade de aprender o Justisse,
                                            mas como o método é cheio de sutilezas, tenho certeza que você aprenderá
                                            muito e conseguirá conquistar o tão sonhado uso perfeito!
                                        </span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                                           aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu posso fazer o atendimento em grupo se
                                            uso contracepção hormonal (pílula, DIU hormonal, adesivo, anel, implante)?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text">
                                            Depende. Os anticoncepcionais hormonais interferem no ciclo menstrual
                                            (a maioria deixa de ovular), impossibilitando o uso do método. Agora se você
                                            está pensando em parar de usar anticoncepcional, o suporte que você receberá
                                            ao longo do atendimento individual será muito valioso! Parar a contracepção
                                            hormonal pode ser bem desafiadora para algumas pessoas, então praticar
                                            percepção de fertilidade durante essa fase é um enorme privilégio, pois
                                            você irá entender melhor o que está acontecendo no seu corpo, terá um método
                                            contraceptivo ou conceptivo e também terá o suporte para encontrar medidas
                                            de autocuidado para passar por essa transição de forma mais leve.
                                        </span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                                           aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu posso fazer o atendimento individual se uso DIU de cobre? </span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text"> Sim! O DIU não afeta o ciclo menstrual,
                                            então você pode usar o método sem nenhum problema!</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                                           aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu vou poder parar de usar camisinha se usar percepção de fertilidade?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text">
                                            O método de percepção de fertilidade tem uma eficácia contraceptiva de
                                            99,6%, portanto, você não precisará usar nenhum tipo de barreira durante o
                                            seu período infértil a partir do momento em que você souber usar direito o
                                            método de percepção de fertilidade. Durante o período fértil (cerca de 6 a
                                            10 dias em ciclos saudáveis), é necessário praticar abstinência ou usar
                                            barreiras. Porém é sempre importante lembrar que o preservativo é a única
                                            forma de se prevenir contra ISTs, então recomendamos que você continue
                                            usando camisinha sempre. </span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                                           aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Casal pode fazer o atendimento junto?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text">Sim!!! E, particularmente, eu acho incrível
                                            quando ambos estão envolvidos na prática do método e compartilham a
                                            responsabilidade de atingir o mesmo objetivo reprodutivo (seja concepção
                                            ou contracepção).</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                                           aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Qual a diferença entre o curso online e
                                            o atendimento individual?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text"> O curso online é voltado para pessoas que
                                            querem estudar sozinhas e aprender o método no seu próprio tempo. No
                                            atendimento individual, além de receber todos os materiais do curso online,
                                            você terá 5 sessões de acompanhamento de 1 hora cada totalmente
                                            personalizadas para as suas necessidades. Nestes encontros, compartilhamos
                                            dúvidas, insights, dificuldades e alegrias e eu reviso seu gráfico para
                                            avaliar se você está fazendo um uso correto. É graças a este contato
                                            contínuo que eu consigo garantir que você não está fazendo nenhum erro
                                            que poderia comprometer a eficácia do método.</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                                           aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Depois de terminar o atendimento
                                            individual, eu vou estar apta a fazer o uso perfeito do método?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text"> Para a maioria das pessoas, as 5 sessões
                                            de acompanhamento são suficientes para entender adequadamente como usar o
                                            método. No entanto, isso dependerá da sua dedicação à aprendizagem e também
                                            da complexidade dos seus ciclos. Em alguns casos pode ser recomendável
                                            adquirir algumas sessões de acompanhamento extras.</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                                           aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header"> Depois de terminar o atendimento
                                            individual, eu posso adquirir mais sessões individuais?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text"> Sim! Se você sentir necessidade de mais
                                            acompanhamento, você pode comprar sessões avulsas por x. Algumas pessoas
                                            simplesmente precisam de mais tempo e atenção para aprender a usar o método.
                                            Depois de alguns meses ou anos, você pode sentir a necessidade de uma nova
                                            sessão, seja para garantir que você continua no caminho, ou porque você
                                            passou por uma grande mudança e necessita mais suporte (por exemplo: estava
                                            usando o método para contracepção e agora quer usar para concepção ou
                                            vice-versa; está amamentando e precisa de auxílio nessa nova fase; está
                                            entrando na perimenopausa e deseja mais suporte; está notando mudanças no
                                            seu ciclo e precisa de apoio para entendê-la; etc.).</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                                                           aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu trabalho com mulheres, o atendimento
                                            individual vai me ajudar na minha prática profissional?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <span className="faq-expansion-text"> Sim, porém este não é um curso
                                            profissionalizante. Isso significa que eu tenhocerteza que o conteúdo que
                                            você vai receber neste curso e as discussões ao longo dos nossos encontros
                                            irão te ajudar a entender algumas coisas que você talvez não soubesse e
                                            também irão te preparar para divulgar o método de percepção de fertilidade
                                            de forma correta. Porém, a formação para se tornar uma instrutora é bem mais
                                            longa e intensa, então você não estará apta a ensinar o método a outras
                                            pessoas. O atendimento individual foi pensado para uso pessoal e, por isso,
                                            não há certificado de conclusão.</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>










                            </div>
                        </Grid>
                    </Grid>




                </Grid>

                <Footer/>
            </Grid>
        );
    }
}