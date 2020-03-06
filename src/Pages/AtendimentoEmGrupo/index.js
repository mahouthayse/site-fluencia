import React, { Component } from "react";
import {Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid} from '@material-ui/core';
import "./style.scss";
import Footer from "../../Components/Footer";
import SimpleMenu from "../../Components/Menu";
import HeaderGrupo from "../../Assets/Curso/headerGroup.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleRight,
    faCalendarDay,
    faChevronDown,
    faCircle,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import BenefitsCurso from "../../Components/Curso/BenefitsCurso";
import MateriaisImage from "../../Assets/Curso/materiais.png";
import Depoimentos from "../../Components/AtendimentoIndividual/Depoimento";
import {Link} from "react-router-dom";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons/faClock";



export default class AtendimentoEmGrupo extends Component{

    render(){

        return(
            <Grid container className="atendimento-individual-container" xs={12} lg={12} md={12}>
                <SimpleMenu/>

                {/*HEADER*/}

                <Grid container className="atendimento-header-container" xs={12} lg={12} md={12}>

                    <Grid container className="atendimento-header-conteudo" xs={12} lg={12} md={12}>

                        <Grid item className="atendimento-header-texto" xs={12} md={6} lg={6}>
                            <span className="header-titulo-primario"> Atendimento em grupo </span>
                            <span className="header-subtitulo-primario">Faça parte de uma comunidade de menstruantes e aprofunde-se no funcionamento do seu ciclo </span>
                        </Grid>

                        <Grid item className="atendimento-header-imagem-container" xs={12} md={6} lg={6}>
                            <img className="atendimento-header-imagem" src={HeaderGrupo}/>
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
                                    Justisse com atendimento em grupo</span>

                                <span className="info-card-title"> Curso online + sessõs remotas</span>
                                <span className="info-card-text"> Você recebe acesso a um curso 100% online e também terá
                                    direito a 6 encontros semanais de 2 horas cada em um grupo de até 7 pessoas (no Zoom)</span>
                            </Grid>

                            <Grid item className="info-card" xs={9} sm={8} md={3}>

                                <div className="card-image-2">
                                    <div className="ribbon3">
                                        <span className="ribbon-title">Para quem é o curso?</span>
                                        <span className="ribbon-subtitle">Público e pré-requisito</span>
                                    </div>
                                </div>

                                <span className="info-card-title"> Público-alvo</span>
                                <span className="info-card-text">Para quem quer a máxima eficácia do método e gosta de
                                    aprender trocando com outras pessoas</span>

                                <span className="info-card-title"> Não existe pré-requisito!</span>
                                <span className="info-card-text"> Você recebe um material de apoio completo para aprender
                                    o método desde o básico e suporte em grupo para tirar dúvidas e atingir o uso perfeito</span>
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
                                    className="flag">Assista às videoaulas sobre o funcionamento da fertilidade e uso do método</span>

                                        </div>
                                        <div className="desc">
                                            <span className="text-desc">Aqui você vai receber uma série de videos e
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
                                            <span className="flag">Participe dos atendimentos em grupo </span>
                                        </div>
                                        <div className="desc">
                                            <span className="text-desc">Ao longo de 7 sessões de acompanhamento semanais
                                                de 2 horas cada em um grupo com até 7 pessoas, você terá a oportunidade
                                                de tirar todas as suas dúvidas e aprender com os gráficos das outras
                                                participantes</span>
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

                            <span className="texto-primario"style={{textAlign: 'center'}}>Nas sessões de atendimento
                                analisaremos o que está acontecendo no gráfico de cada participante e tiraremos todas as
                                dúvidas que surgirem durante as suas observações. Assim, além do acompanhamento
                                individualizado que garante a máxima eficácia do método, você também tem a oportunidade
                                de aprender com as experiências de outras menstruantes. </span>

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
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> 7 sessões de atendimento em grupo </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Grupo de whatsapp exclusivo  </span>
                            <span className="texto-primario"><FontAwesomeIcon className="features-icon-primary" icon={faPlus} size="1.5x" color="#EA7973"/> Descontos para atendimentos extras </span>
                        </Grid>





                    </Grid>


                    <Depoimentos/>


                    {/*PREÇO DO ATENDIMENTO*/}


                    <Grid container className="atendimento-em-grupo-valor" xs={12} lg={12} md={12}>

                        <Grid container className="atendimento-valor-wrapper" xs={12} md={10}>

                        <Grid container className="atendimento-cartao-container" xs={12} md={5}>
                            <Grid item className="atendimento-cartao-cabecalho" xs={12} md={12}>
                                <span className="cartao-titulo"> <FontAwesomeIcon icon={faCalendarDay} size="1x" color="#471E67"/> de XX/03 a XX/04</span>
                                <span className="cartao-titulo"> <FontAwesomeIcon icon={faClock} size="1x" color="#471E67"/> Segunda-feira, das 18h às 20h </span>
                            </Grid>

                            <Grid item className="atendimento-cartao-conteudo" xs={12} md={12}>
                                <span className="cartao-conteudo-titulo"> Atendimento em grupo</span>
                                <span className="cartao-conteudo-preco"> R$999</span>
                                <span className="cartao-conteudo-subtitulo"> no cartão de crédito ou boleto</span>
                                <Divider/>
                                <span className="cartao-conteudo-texto"> Material de percepção de fertilidade mais completo do Brasil</span>
                                 <Divider/>
                                <span className="cartao-conteudo-texto"> Instrutora certificada</span>
                                <Divider/>
                                <span className="cartao-conteudo-texto"> 6 sessões de atendimento em grupo</span>
                                <Divider/>
                                <Link to="/" className="cartao-conteudo-link" >Quero me inscrever</Link>
                                <span className="cartao-conteudo-subtitulo-secundario"> Vagas limitadas</span>
                            </Grid>

                        </Grid>

                        <Grid container className="atendimento-cartao-container" xs={12} md={5}>
                            <Grid item className="atendimento-cartao-cabecalho" xs={12} md={12}>
                                <span className="cartao-titulo"> <FontAwesomeIcon icon={faCalendarDay} size="1x" color="#471E67"/> de XX/03 a XX/04</span>
                                <span className="cartao-titulo"> <FontAwesomeIcon icon={faClock} size="1x" color="#471E67"/> Segunda-feira, das 20h30 às 22h30  </span>
                            </Grid>

                            <Grid item className="atendimento-cartao-conteudo" xs={12} md={12}>
                                <span className="cartao-conteudo-titulo"> Atendimento em grupo</span>
                                <span className="cartao-conteudo-preco"> R$999</span>
                                <span className="cartao-conteudo-subtitulo"> no cartão de crédito ou boleto</span>
                                <Divider/>
                                <span className="cartao-conteudo-texto"> Material de percepção de fertilidade mais completo do Brasil</span>
                                <Divider/>
                                <span className="cartao-conteudo-texto"> Instrutora certificada</span>
                                <Divider/>
                                <span className="cartao-conteudo-texto"> 6 sessões de atendimento em grupo</span>
                                <Divider/>
                                <Link to="/" className="cartao-conteudo-link" >Quero me inscrever</Link>
                                <span className="cartao-conteudo-subtitulo-secundario"> Vagas limitadas</span>
                            </Grid>

                        </Grid>


                        </Grid>

                    </Grid>

                    <Grid container className="contato-atendimento" xs={12} md={12}>

                        <h1 className="titulo-primario" style={{ textAlign: 'center'}}>Não pode nessas datas, mas ficou interessada?</h1>

                        <span className="texto-primario" style={{ textAlign: 'center'}}>Coloque seu nome na lista de
                            espera e receba conteúdos exclusivos sobre as próximas turmas </span>

                        <Grid container className="contato-conteudo" xs={12} md={6}>

                            <input className="formulario-contato" id="nome" name="nome" placeholder="Nome*"
                                   type="text"/>

                            <input className="formulario-contato" id="email" name="email" placeholder="Email*"
                                   type="email"/>

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
                                    <span className="programs-card-title"> Atendimento individual</span>
                                    <span className="programs-card-text">Para quem quer máxima eficácia do método e
                                        um atendimento personalizado e intimista</span>
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
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu já pratico percepção de fertilidade há
                                            algum tempo. Vale a pena fazer o atendimento em grupo?</span>
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
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu posso fazer o atendimento em grupo se uso contracepção hormonal (pílula, DIU hormonal, adesivo, anel, implante)?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text">
                                         Depende. Os anticoncepcionais hormonais interferem no ciclo menstrual (a maioria
                                            deixa de ovular), impossibilitando o uso do método. Agora se você está
                                            pensando em parar de usar anticoncepcional e gostaria de fazer isso com o
                                            suporte de uma comunidade de menstruantes que estão neste mesmo caminho de
                                            autoconhecimento, você vai amar o atendimento em grupo!
                                        </span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu posso fazer o atendimento em grupo se uso DIU de cobre?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text">
                                         Sim! O DIU não afeta o ciclo menstrual, então você pode usar o método sem nenhum problema!
                                        </span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu vou poder parar de usar camisinha se usar percepção de fertilidade? </span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text">O método de percepção de fertilidade tem
                                            uma eficácia contraceptiva de 99,6%, portanto, você não precisará usar
                                            nenhum tipo de barreira durante o seu período infértil a partir do momento
                                            em que você souber usar direito o método de percepção de fertilidade.
                                            Durante o período fértil (cerca de 6 a 10 dias em ciclos saudáveis), é
                                            necessário praticar abstinência ou usar barreiras. Porém é sempre importante
                                            lembrar que o preservativo é a única forma de se prevenir contra ISTs,
                                            então recomendamos que você continue usando camisinha sempre.</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Qual a diferença entre o curso online e o atendimento em grupo?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text"> O curso online é voltado para pessoas que
                                            querem estudar sozinhas e aprender o método no seu próprio tempo. No
                                            atendimento em grupo, além de receber todos os materiais do curso online,
                                            você irá participar de 7 encontros semanais de 2 horas cada em um grupo com
                                            até 7 pessoas. Nestes encontros, compartilhamos dúvidas, insights,
                                            dificuldades e alegrias e eu reviso o gráfico de cada participante para
                                            avaliar se ela está fazendo um uso correto. É graças a este contato contínuo
                                            que eu consigo garantir que você não está fazendo nenhum erro que poderia
                                            comprometer a eficácia do método.</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Depois de terminar o atendimento em
                                            grupo, eu vou estar apta a fazer o uso perfeito do método?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text">Para a maioria das pessoas, a quantidade
                                            de sessões de acompanhamento do grupo é suficiente para entender
                                            adequadamente como usar o método. No entanto, isso dependerá da sua
                                            dedicação à aprendizagem e também da complexidade dos seus ciclos. Em
                                            casos raros pode ser necessário adquirir algumas sessões de acompanhamento
                                            individuais após o fim do grupo.</span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Depois de terminar o atendimento em
                                            grupo, eu posso adquirir mais sessões individuais?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text">
                                         Sim! Se você sentir necessidade de mais acompanhamento depois que o grupo
                                            terminar, você pode comprar sessões avulsas por x. Algumas pessoas
                                            simplesmente precisam de mais tempo e atenção para aprender a usar o método.
                                            Depois de alguns meses ou anos, você pode sentir a necessidade de uma nova
                                            sessão, seja para garantir que você continua no caminho, ou porque você
                                            passou por uma grande mudança e necessita mais suporte (por exemplo: estava
                                            usando o método para contracepção e agora quer usar para concepção ou
                                            vice-versa; está amamentando e precisa de auxílio nessa nova fase; está
                                            entrando na perimenopausa e deseja mais suporte; está notando mudanças no
                                            seu ciclo e precisa de apoio para entendê-la; etc.).

                                        </span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Eu trabalho com mulheres, o atendimento
                                            em grupo vai me ajudar na minha prática profissional?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text"> Sim, porém este não é um curso
                                            profissionalizante. Isso significa que eu tenho certeza que o conteúdo que
                                            você vai receber neste curso e as discussões ao longo dos nossos encontros
                                            irão te ajudar a entender algumas coisas que você talvez não soubesse e
                                            também irão te preparar para divulgar o método de percepção de fertilidade
                                            de forma correta. Porém, a formação para se tornar uma instrutora é bem mais
                                            longa e intensa, então você não estará apta a ensinar o método a outras
                                            pessoas.O atendimento em grupo foi pensado para uso pessoal e, por isso,
                                            não há certificado de conclusão.

                                        </span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Homem pode fazer o atendimento em grupo?</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text">
                                         O atendimento em grupo é voltado somente para pessoas que menstruam, então se
                                            você for um homem trans, será muito bem-vindo!Se você é um homem cis e
                                            gostaria de saber mais sobre o ciclo menstrual e o método de percepção de
                                            fertilidade, você pode fazer o curso online de percepção de fertilidade.

                                        </span>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <span className="faq-expansion-header">Tenho interesse em fazer o atendimento em
                                            grupo, mas não vou conseguir fazer agora. Terão outras turmas?
</span>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <span className="faq-expansion-text">
                                         Sim, as turmas do atendimento em grupo de percepção de fertilidade serão
                                            bimestrais. Então, fique atenta a disponibilização de vagas para a turma
                                            disponível. Caso as vendas estejam encerradas recomendamos se inscrever na
                                            lista de espera para saber em primeira mão o início das vendas.
                                        </span>
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