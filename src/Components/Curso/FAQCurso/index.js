import React from 'react';
import {Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";


export default function FAQCurso() {

    return (
        <Grid container className="faq-wrapper" xs={12} md={12}>

            <Grid container className="faq-content" xs={12} md={8}>

        <div className="expansion-panel-faq">
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                    <span className="faq-expansion-header">Eu já pratico percepção de fertilidade há algum tempo. Esse curso também é para mim?</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <span className="faq-expansion-text">
                       Sim! Se você já estudou outro método ou tem uma prática intuitiva da sua fertilidade, você vai
                        adorar este curso. Ele foi desenhado para cobrir as necessidades de iniciantes e também de
                        pessoas com mais conhecimento e que desejam se aprofundar mais.
                    </span>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                    <span className="faq-expansion-header">Eu posso fazer o curso se uso contracepção hormonal (pílula, DIU hormonal, adesivo, anel, implante)?</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                                        <span className="faq-expansion-text">
                                         Depende. Os anticoncepcionais hormonais interferem no ciclo menstrual (a maioria
                                            deixa de ovular), impossibilitando o uso do método. Agora se você está
                                            pensando em parar de usar anticoncepcional e gostaria de fazer isso com o
                                            suporte de uma comunidade de menstruantes que estão neste mesmo caminho de
                                            autoconhecimento, você vai amar o curso!
                                        </span>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>} aria-controls="panel1a-content" id="panel1a-header">
                    <span className="faq-expansion-header">Eu posso fazer o curso se uso DIU de cobre?</span>
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
                                        <span className="faq-expansion-header">Eu trabalho com mulheres, o curso vai me ajudar na minha prática profissional?</span>
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
                    <span className="faq-expansion-header">Homem pode fazer o curso?</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                                        <span className="faq-expansion-text"> Sim! O curso é voltado para pessoas que
                                            menstruam, mas se você tem interesse em aprender, é muito bem-vindo!
                                        </span>
                </ExpansionPanelDetails>
            </ExpansionPanel>



        </div>
            </Grid>
        </Grid>
    );
}