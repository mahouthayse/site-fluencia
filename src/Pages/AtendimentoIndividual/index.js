import React, { Component } from "react";
import {Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid} from '@material-ui/core';
import "./style.scss";
import Footer from "../../Components/Footer";
import SimpleMenu from "../../Components/Menu";
import HeaderIndividual from "../../Assets/Curso/headerIndividual.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleRight, faChevronDown, faPlus} from "@fortawesome/free-solid-svg-icons";
import BenefitsCurso from "../../Components/Curso/BenefitsCurso";
import MateriaisImage from "../../Assets/Curso/materiais.png";
import Depoimentos from "../../Components/AtendimentoIndividual/Depoimento";
import {Link} from "react-router-dom";
import ReactContactForm from 'react-mail-form';



export default class AtendimentoIndividual extends Component{

    render(){

        return(
            <Grid container className="atendimento-individual-container" xs={12} lg={12} md={12}>
                <SimpleMenu/>

                {/*HEADER*/}

                <Grid container className="atendimento-header-container" xs={12} lg={12} md={12}>

                    <Grid container className="atendimento-header-conteudo" xs={12} lg={12} md={12}>

                        <Grid item className="atendimento-header-texto" xs={12} md={6} lg={6}>
                            <span className="header-titulo-primario"> Atendimento Individual </span>
                            <span className="header-subtitulo-primario">Conquiste o uso perfeito do método de percepção de fertilidade com atendimento personalizado </span>
                        </Grid>

                        <Grid item className="atendimento-header-imagem-container" xs={12} md={6} lg={6}>
                            <img className="atendimento-header-imagem" src={HeaderIndividual}/>
                        </Grid>

                    </Grid>

                </Grid>


                <Grid container className="atendimento-individual-conteudo" xs={12} sm={12} lg={12} md={12}>



                    {/*CARD COM INFORMAÇÕES SOBRE O CURSO*/}

                    <Grid container className="atendimento-informacoes-container" xs={12} sm={12} lg={12} md={12}>
                        <FontAwesomeIcon className="faq-icon-primary" icon={faChevronDown} size="2x" color="#471E67"/>

                        <span className="titulo-secundario">O primeiro e mais completo curso de percepção de fertilidade do Brasil</span>



                        <Grid container className="atendimento-informacoes-content" xs={12} sm={12} lg={9} md={12}>

                            <Grid item className="info-card" xs={9} sm={8} md={3}>

                                <div className="card-image-1">

                                    <div className="ribbon3">
                                        <span className="ribbon-title">Informações gerais</span>
                                        <span className="ribbon-subtitle">Objetivo e metodologia</span>
                                    </div>

                                </div>


                                <span className="info-card-title"> Aprofunde-se no método Justisse</span>
                                <span className="info-card-text"> Aprenda e aplique o método de percepção de fertilidade
                                    Justisse com atendimento individual</span>

                                <span className="info-card-title"> Curso online + sessõs remotas</span>
                                <span className="info-card-text"> Você recebe acesso a um curso 100% online e também
                                    terá direito a 5 sessões de acompanhamento individual de 1 hora cada (no Zoom)</span>
                            </Grid>

                            <Grid item className="info-card" xs={9} sm={8} md={3}>

                                <div className="card-image-2">
                                    <div className="ribbon3">
                                        <span className="ribbon-title">Para quem é o curso?</span>
                                        <span className="ribbon-subtitle">Público e pré-requisito</span>
                                    </div>
                                </div>

                                <span className="info-card-title"> Público-alvo</span>
                                <span className="info-card-text">Para quem quer a máxima eficácia do método e um
                                    atendimento personalizado e intimista</span>

                                <span className="info-card-title"> Não existe pré-requisito!</span>
                                <span className="info-card-text"> Você recebe um material de apoio completo para aprender
                                    o método desde o básico e suporte personalizado para tirar dúvidas e atingir o uso
                                    perfeito</span>
                            </Grid>

                            <Grid item className="info-card" xs={9} sm={8} md={3}>
                                <div className="card-image-3">
                                    <div className="ribbon3">
                                        <span className="ribbon-title">Carol Fischmann</span>
                                        <span className="ribbon-subtitle">Sobre a instrutora</span>
                                    </div>
                                </div>

                                <span className="info-card-text"> <b>Carol Fischmann</b> é antropóloga e tem formação como Instrutora
                            de Saúde Reprodutiva Holística no Justisse College, um curso de dois anos para formar instrutoras
                            de percepção de fertilidade. Fundadora do projeto Fluência Corporal, Carol atua como instrutura
                            desde 2017 e já ajudou dezenas de menstruantes.</span>
                            </Grid>

                        </Grid>


                    </Grid>

                    {/*BENEFÍCIOS*/}

                    <BenefitsCurso/>


                    {/*TIMELINE */}



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


                    {/*INFORMAÇÕES SOBRE O ATENDIMENTO*/}

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


                    {/*FEATURES DO ATENDIMENTO INDIVIDUAL*/}

                    <Grid container className="atendimento-individual-features" xs={12} md={12}>

                        <Grid item className="atendimento-individual-features-imagem" xs={12} md={5}>
                            <img className="features-imagem" src={MateriaisImage}/>
                        </Grid>

                        <Grid item className="atendimento-individual-features-texto" xs={12} md={5}>

                            <span className="titulo-primario" style={{textAlign: 'left'}}> O que está incluído?</span>

                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/>3h30 de videoaulas  </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Ebook com 150 páginas </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Materiais complementares </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Quiz para auto-avaliação </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Sugestões de leituras extras </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> 5 sessões de atendimento individual  </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Suporte por whatsapp por 1 ano </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Descontos para atendimentos extras </span>
                        </Grid>





                    </Grid>


                <Depoimentos/>


                {/*PREÇO DO ATENDIMENTO*/}


                    <Grid container className="value-curso-wrapper" xs={12} lg={12} md={12}>


                        <Grid container className="value-curso-card" xs={12} md={5}>


                            <Grid item className="value-curso-card-header" xs={12} md={12}>

                                <h2 className="value-card-title"> Atendimento Individual</h2>
                                <h1 className="value-card-price"> R$1499</h1>
                                <span className="value-card-secondary-text"> No cartão de crédito ou boleto</span>
                            </Grid>

                            <Grid item className="value-curso-card-body" xs={12} md={12}>
                                <Divider/>
                                <span className="value-card-text">Material de percepção de fertilidade mais completo do Brasil</span>
                                <Divider/>
                                <span className="value-card-text"> Instrutora certificada</span>
                                <Divider/>
                                <span className="value-card-text"> 5 sessões de atendimento individual</span>
                                <Divider/>

                                <Link to="/" className="value-card-link" >Comprar</Link>

                                <span className="value-card-secondary-text" style={{fontSize: '1rem', marginTop: '16px'}}> Vagas limitadas</span>
                            </Grid>
                        </Grid>

                    </Grid>

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



                    {/*PROGRAMAS */}


                    <Grid container className="programs-wrapper" xs={12} lg={12} md={12}>

                        <Grid container className="programs-content" xs={12} lg={12} md={12}>

                            <span className="programs-title"> Conheça nossos outros programas</span>

                            <Grid container className="programs-card-wrapper" xs={12} lg={12} md={12}>

                                <Grid item className="programs-card" xs={12} md={4}>
                                    <span className="programs-card-title"> Curso Online</span>
                                    <span className="programs-card-text">Para quem tem interesse no método e quer um
                                        empurrãozinho para começar a estudar</span>
                                    <button className="card-button">Quero conhecer</button>
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




                    {/*FAQ CURSO INDIVIDUAL*/}


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